MeteorX = {};

MeteorX.Server = Meteor.server.constructor;

exposeLivedata(MeteorX);
exposeMongoLivedata(MeteorX);
