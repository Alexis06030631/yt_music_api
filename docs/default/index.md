---
title: Get Started
layout: doc
---

# Ytmusic API

## Description

A simple, easy to use API for YouTube Music.
You can:

- Search for songs, video
- Download songs and video in the highest quality
- Fast, easy to use and no ads
- Get popular songs from trending charts

You can soon:

- Get albums, artists, playlists, and more
- Get lyrics
- And more...

## Installation

```bash
npm install ytmusic_api_unofficial
```

## Examples

```javascript
const {searchManager, downloadManager} = require('ytmusic_api_unofficial')

// Return a list of songs with the name 'hello'
searchManager.search('hello', 'MUSIC').then((result) => {
	console.log(result);
});

// Return a song by id
searchManager.get('ID').then((result) => {
	console.log(result);
});

// Download a song by id
downloadManager.download('ID', 'mp3', high).then((result) => {
	console.log(result);
});
```

Make By [Alexis06030631](https://www.instagram.com/leko_system/)
