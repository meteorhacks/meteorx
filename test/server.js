Tinytest.addAsync(
  'Livedata - Session',
  function (test, done) {
    MeteorX.onReady(function() {
      test.isNotNull(MeteorX.Session.prototype);
      test.isNotNull(MeteorX.Session.prototype.protocol_handlers);
      done();
    });
  }
);

Tinytest.addAsync(
  'Livedata - Subscription',
  function (test, done) {
    MeteorX.onReady(function() {
      test.isNotNull(MeteorX.Subscription.prototype);
      test.isNotNull(MeteorX.Subscription.prototype.added);
      done();
    });
  }
);

Tinytest.addAsync(
  'Livedata - SessionCollectionView',
  function (test, done) {
    MeteorX.onReady(function() {
      test.isNotNull(MeteorX.SessionCollectionView.prototype);
      test.isNotNull(MeteorX.SessionCollectionView.prototype.added);
      done();
    });
  }
);

Tinytest.addAsync(
  'Livedata - SessionDocumentView',
  function (test, done) {
    MeteorX.onReady(function() {
      test.isNotNull(MeteorX.SessionDocumentView.prototype);
      test.isNotNull(MeteorX.SessionDocumentView.prototype.added);
      done();
    });
  }
);

Tinytest.addAsync(
  'MongoLivedata - MongoConnection',
  function (test, done) {
    MeteorX.onReady(function() {
      test.isNotNull(MeteorX.MongoConnection.prototype);
      test.isNotNull(MeteorX.MongoConnection.prototype._insert);
      done();
    });
  }
);

Tinytest.addAsync(
  'MongoLivedata - MongoCursor',
  function (test, done) {
    MeteorX.onReady(function() {
      test.isNotNull(MeteorX.MongoCursor.prototype);
      test.isNotNull(MeteorX.MongoCursor.prototype._publishCursor);
      done();
    });
  }
);

Tinytest.addAsync(
  'MongoLivedata - MongoOplogDriver',
  function (test, done) {
    MeteorX.onReady(function() {
      test.isNotNull(MeteorX.MongoOplogDriver.prototype);
      done();
    });
  }
);

Tinytest.addAsync(
  'MongoLivedata - MongoPollingDriver',
  function (test, done) {
    MeteorX.onReady(function() {
      test.isNotNull(MeteorX.MongoPollingDriver.prototype);
      done();
    });
  }
);

Tinytest.addAsync(
  'MongoLivedata - Multiplexer',
  function (test, done) {
    MeteorX.onReady(function() {
      test.isNotNull(MeteorX.Multiplexer.prototype);
      done();
    });
  }
);