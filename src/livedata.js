exposeLivedata = function(namespace) {
  // instrumenting session
  const fakeSocket = {send: function() {}, close: function() {}, headers: []};
  const ddpConnectMessage = {msg: 'connect', version: 'pre1', support: ['pre1']};
  Meteor.default_server._handleConnect(fakeSocket, ddpConnectMessage);

  if(fakeSocket._meteorSession) { // for newer meteor versions
    namespace.Session = fakeSocket._meteorSession.constructor;

    exposeSubscription(fakeSocket._meteorSession, namespace);
    exposeSessionCollectionView(fakeSocket._meteorSession, namespace);

    if (Meteor.default_server._removeSession) {
      // 1.7 +
      Meteor.default_server._removeSession(fakeSocket._meteorSession);
    } else if (Meteor.default_server._closeSession) {
      // 0.7.x +
      Meteor.default_server._closeSession(fakeSocket._meteorSession);
    } else if(Meteor.default_server._destroySession) {
      // 0.6.6.x
      Meteor.default_server._destroySession(fakeSocket._meteorSession);
    }
  } else if(fakeSocket.meteor_session) { // support for 0.6.5.x
    namespace.Session = fakeSocket.meteor_session.constructor;

    // instrumenting subscription
    exposeSubscription(fakeSocket.meteor_session, namespace);
    exposeSessionCollectionView(fakeSocket._meteorSession, namespace);

    fakeSocket.meteor_session.detach(fakeSocket);
  } else {
    console.error('expose: session exposing failed');
  }
};

function exposeSubscription(session, namespace) {
  const subId = Random.id();
  const publicationHandler = function() {
    this.ready()
  };
  const pubName = '__dummy_pub_' + Random.id();

  session._startSubscription(publicationHandler, subId, [], pubName);
  const isMap = session._namedSubs instanceof Map;
  const subscription = isMap ? session._namedSubs.get(subId) : session._namedSubs[subId];
  namespace.Subscription = subscription.constructor;

  // cleaning up
  session._stopSubscription(subId);
}

function exposeSessionCollectionView(session, namespace) {
  const documentView = session.getCollectionView();
  namespace.SessionCollectionView = documentView.constructor;

  const id = 'the-id';
  documentView.added('sample-handle', id, {aa: 10});
  const isMap = documentView.documents instanceof Map;
  const doc = isMap ? documentView.documents.get(id) : documentView.documents[id];
  namespace.SessionDocumentView = doc.constructor;
}
