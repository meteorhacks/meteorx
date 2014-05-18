exposeMongoLivedata = function(namespace) {
  namespace.MongoConnection = MongoInternals.Connection;

  var coll = new Meteor.Collection('__dummy_coll_' + Random.id());
  var cursor = coll.find();
  namespace.MongoCursor = cursor.constructor.prototype;
}
