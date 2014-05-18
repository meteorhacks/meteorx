Tinytest.add(
  'Livedata - Session Prototype',
  function (test) {
    test.isNotNull(Expose.Session);
    test.isNotNull(Expose.Session.protocol_handlers);
  }
);

Tinytest.add(
  'Livedata - Subscription Prototype',
  function (test) {
    test.isNotNull(Expose.Subscription);
    test.isNotNull(Expose.Subscription.added);
  }
);

Tinytest.add(
  'MongoLivedata - MongoConnection Prototype',
  function (test) {
    test.isNotNull(Expose.MongoConnection);
    test.isNotNull(Expose.MongoConnection._insert);
  }
);

Tinytest.add(
  'MongoLivedata - MongoCursor Prototype',
  function (test) {
    test.isNotNull(Expose.MongoCursor);
    test.isNotNull(Expose.MongoCursor._publishCursor);
  }
);