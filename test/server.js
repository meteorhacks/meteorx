Tinytest.add(
  'Livedata - Session',
  function (test) {
    test.isNotNull(Expose.Session.prototype);
    test.isNotNull(Expose.Session.prototype.protocol_handlers);
  }
);

Tinytest.add(
  'Livedata - Subscription',
  function (test) {
    test.isNotNull(Expose.Subscription.prototype);
    test.isNotNull(Expose.Subscription.prototype.added);
  }
);

Tinytest.add(
  'Livedata - SessionCollectionView',
  function (test) {
    test.isNotNull(Expose.SessionCollectionView.prototype);
    test.isNotNull(Expose.SessionCollectionView.prototype.added);
  }
);

Tinytest.add(
  'Livedata - SessionDocumentView',
  function (test) {
    test.isNotNull(Expose.SessionDocumentView.prototype);
    test.isNotNull(Expose.SessionDocumentView.prototype.added);
  }
);

Tinytest.add(
  'MongoLivedata - MongoConnection',
  function (test) {
    test.isNotNull(Expose.MongoConnection.prototype);
    test.isNotNull(Expose.MongoConnection.prototype._insert);
  }
);

Tinytest.add(
  'MongoLivedata - MongoCursor',
  function (test) {
    test.isNotNull(Expose.MongoCursor.prototype);
    test.isNotNull(Expose.MongoCursor.prototype._publishCursor);
  }
);