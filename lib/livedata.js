exposeLivedata = function(namespace) {
  //instrumenting session
  var fakeSocket = {send: function() {}, close: function() {}, headers: []};
  var ddpConnectMessage = {msg: 'connect', version: 'pre1', support: ['pre1']};
  Meteor.default_server._handleConnect(fakeSocket, ddpConnectMessage);

  if(fakeSocket._meteorSession) { //for newer meteor versions
    namespace.Session = fakeSocket._meteorSession.constructor;

    exposeSubscription(fakeSocket._meteorSession, namespace);
    exposeSessionCollectionView(fakeSocket._meteorSession, namespace);

    if(Meteor.default_server._closeSession) {
      //0.7.x +
      Meteor.default_server._closeSession(fakeSocket._meteorSession);
    } else if(Meteor.default_server._destroySession) {
      //0.6.6.x
      Meteor.default_server._destroySession(fakeSocket._meteorSession);
    }
  } else if(fakeSocket.meteor_session) { //support for 0.6.5.x
    namespace.Session = fakeSocket.meteor_session.constructor;

    //instrumenting subscription
    exposeSubscription(fakeSocket.meteor_session, namespace);
    exposeSessionCollectionView(fakeSocket._meteorSession, namespace);

    fakeSocket.meteor_session.detach(fakeSocket);
  } else {
    console.error('expose: session exposing failed');
  }
};

function exposeSubscription(session, namespace) {
  var subId = Random.id();
  var publicationHandler = function() {this.ready()};
  var pubName = '__dummy_pub_' + Random.id();

  session._startSubscription(publicationHandler, subId, [], pubName);
  var subscription = session._namedSubs[subId];
  namespace.Subscription = subscription.constructor;

  //cleaning up
  session._stopSubscription(subId);
}

function exposeSessionCollectionView(session, namespace) {
  var documentView = session.getCollectionView();
  namespace.SessionCollectionView = documentView.constructor;

  var id = 'the-id';
  documentView.added('sample-handle', id, {aa: 10});
  namespace.SessionDocumentView = documentView.documents[id].constructor;
}