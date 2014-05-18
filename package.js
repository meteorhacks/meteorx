Package.describe({
  "summary": "Exposing some of the internal Meteor API prototypes"
});

Package.on_use(function(api) {
  configurePackage(api);

  api.export(['Expose']);
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
  api.use(['random', 'mongo-livedata'], 'server');
  api.add_files([
    'lib/livedata.js',
    'lib/mongo-livedata.js',
    'lib/server.js'
  ], 'server');
}
