# Documentation available [here](https://alexis06030631.github.io/ytmusic_api_unofficial/)


# Ytmusic API

## Disclaimer
this module is under development and is not yet ready for a production use.<br/>If you want to help me, you can contact me on [Instagram](https://www.instagram.com/leko_system/)

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
const {searchManager,downloadManager} = require('ytmusic_api_unofficial')

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
