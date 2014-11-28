exposeMongoLivedata = function(namespace) {
  var MongoColl = (typeof Mongo != "undefined")? Mongo.Collection: Meteor.Collection;
  var coll = new MongoColl('__dummy_coll_' + Random.id());
  //we need wait until db get connected with meteor, .findOne() does that
  coll.findOne();

  namespace.MongoConnection = MongoInternals.defaultRemoteCollectionDriver().mongo.constructor;
  var cursor = coll.find();
  namespace.MongoCursor = cursor.constructor;
  exposeOplogDriver(namespace, coll);
  exposePollingDriver(namespace, coll);
  exposeMultiplexer(namespace, coll);
}

function exposeOplogDriver(namespace, coll) {
  var driver = _getObserverDriver(coll.find({}));
  // verify observer driver is an oplog driver
  if(driver && typeof driver.constructor.cursorSupported == 'function') {
    namespace.MongoOplogDriver = driver.constructor;
  }
}

function exposePollingDriver(namespace, coll) {
  var cursor = coll.find({}, {limit: 20, _disableOplog: true});
  var driver = _getObserverDriver(cursor);
  // verify observer driver is a polling driver
  if(driver && typeof driver.constructor.cursorSupported == 'undefined') {
    namespace.MongoPollingDriver = driver.constructor;
  }
}

function exposeMultiplexer(namespace, coll) {
  var multiplexer = _getMultiplexer(coll.find({}));
  if(multiplexer) {
    namespace.Multiplexer = multiplexer.constructor;
  }
}

function _getObserverDriver(cursor) {
  var multiplexer = _getMultiplexer(cursor);
  if(multiplexer && multiplexer._observeDriver) {
    return multiplexer._observeDriver;
  }
}

function _getMultiplexer(cursor) {
  var handler = cursor.observeChanges({added: Function.prototype});
  handler.stop();
  return handler._multiplexer;
}
