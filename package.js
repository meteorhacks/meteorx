Package.describe({
  "summary": "Exposing Internal Meteor Apis to Hack Meteor Easily",
  "version": "1.2.0",
  "git": "https://github.com/meteorhacks/meteorx.git",
  "name": "meteorhacks:meteorx"
});

Package.on_use(function(api) {
  configurePackage(api);

  api.export(['MeteorX']);
});

Package.on_test(function(api) {
  configurePackage(api);
  api.use([
    'tinytest',
  ], 'server');
  
  api.add_files([
    'test/server.js'
  ], 'server');
});

function configurePackage(api) {
  if(api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.1');
  }

  api.use(['random', 'mongo-livedata'], 'server');
  api.add_files([
    'lib/livedata.js',
    'lib/mongo-livedata.js',
    'lib/server.js'
  ], 'server');
}
