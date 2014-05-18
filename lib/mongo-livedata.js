exposeMongoLivedata = function(namespace) {
  var coll = new Meteor.Collection('__dummy_coll_' + Random.id());
  //we need wait until db get connected with meteor, .findOne() does that
  coll.findOne();
  
  namespace.MongoConnection = MongoInternals.defaultRemoteCollectionDriver().mongo.constructor.prototype;;
  var cursor = coll.find();
  namespace.MongoCursor = cursor.constructor.prototype;
}

