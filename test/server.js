Tinytest.add(
  'Livedata - Session',
  function (test) {
    test.isNotNull(MeteorX.Session.prototype);
    test.isNotNull(MeteorX.Session.prototype.protocol_handlers);
  }
);

Tinytest.add(
  'Livedata - Subscription',
  function (test) {
    test.isNotNull(MeteorX.Subscription.prototype);
    test.isNotNull(MeteorX.Subscription.prototype.added);
  }
);

Tinytest.add(
  'Livedata - SessionCollectionView',
  function (test) {
    test.isNotNull(MeteorX.SessionCollectionView.prototype);
    test.isNotNull(MeteorX.SessionCollectionView.prototype.added);
  }
);

Tinytest.add(
  'Livedata - SessionDocumentView',
  function (test) {
    test.isNotNull(MeteorX.SessionDocumentView.prototype);
    test.isNotNull(MeteorX.SessionDocumentView.prototype.added);
  }
);

Tinytest.add(
  'MongoLivedata - MongoConnection',
  function (test) {
    test.isNotNull(MeteorX.MongoConnection.prototype);
    test.isNotNull(MeteorX.MongoConnection.prototype._insert);
  }
);

Tinytest.add(
  'MongoLivedata - MongoCursor',
  function (test) {
    test.isNotNull(MeteorX.MongoCursor.prototype);
    test.isNotNull(MeteorX.MongoCursor.prototype._publishCursor);
  }
);