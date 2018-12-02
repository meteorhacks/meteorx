# MeteorX

[![github issues][github-issues-image]][github-issues-url]
[![build status][travis-image]][github-project-url]

Exposing internal Meteor API to hack Meteor easily, fork from [meteorhacks/meteorx](https://github.com/meteorhacks/meteorx).
I will maintain it and update it in the future. If you find an error, please open the issue in this project!

## Available APIs on Server-side

- MeteorX.Session - livedata Session
- MeteorX.Subscription - livedata Subscription
- MeteorX.SessionCollectionView - livedata SessionCollectionView
- MeteorX.SessionDocumentView - livedata SessionDocumentView
- MeteorX.MongoConnection - mongo-livedata MongoConnection
- MeteorX.MongoCursor - mongo-livedata Cursor

## Installation

```bash
$ meteor add lamhieu-vk:meteorx
```

## What you can do with this

Think about your meteor related issues and fix them. Some of them are:

- Unblock Subscriptions
- Remove MergeBox


[github-project-url]: https://github.com/lamhieu-vk/meteorx
[travis-image]: https://travis-ci.com/lamhieu-vk/meteorx.svg?branch=master
[github-issues-image]: https://img.shields.io/github/issues/lamhieu-vk/meteorx.svg
[github-issues-url]: https://github.com/lamhieu-vk/meteorx/issues
