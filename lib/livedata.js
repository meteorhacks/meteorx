exposeLivedata = function(namespace) {
  //instrumenting session
  var fakeSocket = {send: function() {}, close: function() {}, headers: []};
  var ddpConnectMessage = {msg: 'connect', version: 'pre1', support: ['pre1']};
  Meteor.default_server._handleConnect(fakeSocket, ddpConnectMessage);

  if(fakeSocket._meteorSession) { //for newer meteor versions
    namespace.Session = fakeSocket._meteorSession.constructor.prototype;

    //instrumenting subscription
    exposeSubscription(fakeSocket._meteorSession, namespace);

    if(Meteor.default_server._closeSession) {
      //0.7.x
      Meteor.default_server._closeSession(fakeSocket._meteorSession);
    } else if(Meteor.default_server._destroySession) {
      //0.6.6.x
      Meteor.default_server._destroySession(fakeSocket._meteorSession);
    }
  } else if(fakeSocket.meteor_session) { //support for 0.6.5.x
    namespace.Session = fakeSocket.meteor_session.constructor.prototype;

    //instrumenting subscription
    exposeSubscription(fakeSocket.meteor_session, namespace);

    fakeSocket.meteor_session.detach(fakeSocket);
  } else {
    console.error('APM: session instrumenting failed');
  }
};

function exposeSubscription(session, namespace) {
  var subId = Random.id();
  var publicationHandler = function() {this.ready()};
  var pubName = '__apm_pub';

  session._startSubscription(publicationHandler, subId, [], pubName);
  var subscription = session._namedSubs[subId];
  namespace.Subscription = subscription.constructor.prototype;

  //cleaning up
  session._stopSubscription(subId);
}