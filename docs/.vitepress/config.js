export default {
  "title": "YTMusic",
  "description": "A simple API to get music from YouTube Music",
  "base": "/yt_music_api",
  "srcDir": "./",
  "outDir": "./dist",
  "cleanUrls": true,
  "ignoreDeadLinks": true
  "markdown": {
    "attrs": {
      "disable": true
    }
  },
  "themeConfig": {
    "editLink": {
      "pattern": "https://github.com/Alexis06030631/yt_music_api/edit/main/docs/:path",
      "text": "Edit this page on GitHub"
    },
    "footer": {
      "message": "Made with ❤️ by <a href=\"https://instagram.com/leko_system\">Leko_system</a>"
    },
    "sidebar": [
      {
        "text": "Methods",
        "items": [
          {
            "text": "downloadManager",
            "link": "/docs/method/downloadManager"
          },
          {
            "text": "searchManager",
            "link": "/docs/method/searchManager"
          }
        ]
      },
      {
        "text": "Classes",
        "items": [
          {
            "text": "Album",
            "link": "/docs/class/Album"
          },
          {
            "text": "Artist",
            "link": "/docs/class/Artist"
          },
          {
            "text": "Artwork",
            "link": "/docs/class/Artwork"
          },
          {
            "text": "Download",
            "link": "/docs/class/Download"
          },
          {
            "text": "Duration",
            "link": "/docs/class/Duration"
          },
          {
            "text": "Home",
            "link": "/docs/class/Home"
          },
          {
            "text": "Lyrics",
            "link": "/docs/class/Lyrics"
          },
          {
            "text": "Music_2",
            "link": "/docs/class/Music_2"
          },
          {
            "text": "Music_list",
            "link": "/docs/class/Music_list"
          },
          {
            "text": "Music_model",
            "link": "/docs/class/Music_model"
          },
          {
            "text": "Music",
            "link": "/docs/class/Music"
          },
          {
            "text": "NoLyrics",
            "link": "/docs/class/NoLyrics"
          },
          {
            "text": "Playlist",
            "link": "/docs/class/Playlist"
          }
        ]
      },
      {
        "text": "Interfaces",
        "items": [
          {
            "text": "DownloadQuality_2",
            "link": "/docs/interface/DownloadQuality_2"
          },
          {
            "text": "DownloadType_2",
            "link": "/docs/interface/DownloadType_2"
          },
          {
            "text": "TypeSearch_2",
            "link": "/docs/interface/TypeSearch_2"
          }
        ]
      },
      {
        "text": "Params",
        "items": [
          {
            "text": "DownloadQuality_param",
            "link": "/docs/param/DownloadQuality_param"
          },
          {
            "text": "DownloadType_param",
            "link": "/docs/param/DownloadType_param"
          },
          {
            "text": "TypeSearch_param",
            "link": "/docs/param/TypeSearch_param"
          }
        ]
      }
    ],
    "socialLinks": [
      {
        "icon": "github",
        "link": "https://github.com/Alexis06030631/ytmusic_api/"
      },
      {
        "icon": "instagram",
        "link": "https://www.instagram.com/leko_system/"
      }
    ]
  }
}