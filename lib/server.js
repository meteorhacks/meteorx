Fibers = Npm.require('fibers');

MeteorX = {};
MeteorX._readyCallbacks = [];
MeteorX._ready = false;

MeteorX.onReady = function(cb) {
  if(MeteorX._ready) return cb();

  this._readyCallbacks.push(cb);
};

MeteorX.Server = Meteor.server.constructor;
exposeLivedata(MeteorX);

// exposeMongoLivedata needs to wait until the DB is connecting
// But we don't need to wait other parts of the app for that
// That's why we've Meteor.onReady() callback
Meteor.startup(function() {
  new Fibers(function() {
    exposeMongoLivedata(MeteorX);
    MeteorX._readyCallbacks.forEach(function(fn) {
      fn();
    });
    MeteorX._ready = true;
  }).run();
});
