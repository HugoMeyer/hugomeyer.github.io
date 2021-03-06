define({ "api": [
  {
    "type": "post",
    "url": "auth/login",
    "title": "Login user to API.",
    "version": "0.1.0",
    "name": "Login",
    "group": "Authentication_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TwitchToken",
            "description": "<p>TwitchToken of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "GithubToken",
            "description": "<p>GithubToken of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Status of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"username\": \"JoK3RZz\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"password\",\n  \"TwitchToken\": \"qs65d468qs6d1zaed8q4dqsd\",\n  \"GithubToken\": \"5df6sd54f6sd4fsqdsdqsze87r5sd6fcs6\",\n  \"isActive\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app.controller.ts",
    "groupTitle": "Authentication_API"
  },
  {
    "type": "post",
    "url": "auth/signup",
    "title": "signup user to API.",
    "version": "0.1.0",
    "name": "Signup",
    "group": "Authentication_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TwitchToken",
            "description": "<p>TwitchToken of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "GithubToken",
            "description": "<p>GithubToken of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Status of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"username\": \"JoK3RZz\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"password\",\n  \"TwitchToken\": \"qs65d468qs6d1zaed8q4dqsd\",\n  \"GithubToken\": \"5df6sd54f6sd4fsqdsdqsze87r5sd6fcs6\",\n  \"isActive\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app.controller.ts",
    "groupTitle": "Authentication_API"
  },
  {
    "type": "post",
    "url": "crypto/infcoin",
    "title": "Alert Inferior price of Crypto.",
    "version": "0.1.0",
    "name": "Inferior_Alert_Crypto",
    "group": "Cryptocurrency",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coin",
            "description": "<p>Crypto to Alert.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Alerte",
            "description": "<p>Price Alert.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Alert Send !\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/crypto/crypto.controller.ts",
    "groupTitle": "Cryptocurrency"
  },
  {
    "type": "post",
    "url": "crypto/suppcoin",
    "title": "Alert superior price of Crypto.",
    "version": "0.1.0",
    "name": "Superior_Alert_Crypto",
    "group": "Cryptocurrency",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coin",
            "description": "<p>Crypto to Alert.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Alerte",
            "description": "<p>Price Alert.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Alert Send !\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/crypto/crypto.controller.ts",
    "groupTitle": "Cryptocurrency"
  },
  {
    "type": "post",
    "url": "github/setuphook",
    "title": "Setup Webook Github on repository.",
    "version": "0.1.0",
    "name": "Setup_Webook_Github",
    "group": "Github",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>url callback for webhook.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the repository.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Webhook set !\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/github/github.controller.ts",
    "groupTitle": "Github"
  },
  {
    "type": "post",
    "url": "myanimelist/broadcast",
    "title": "Alert broadcast anime.",
    "version": "0.1.0",
    "name": "Alert_Broadcast_anime",
    "group": "MyAnimeList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "anime",
            "description": "<p>anime to search broadcast.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the anime.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>picture of the anime.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "broadcast",
            "description": "<p>episodes of the anime.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "episodes",
            "description": "<p>episodes of the anime.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"One piece\",\n  \"image_url\": \"https://cdn.myanimelist.net/images/anime/1634/111433.jpg\",\n  \"broadcast\": \"Sunday at 02:25 (JST)\",\n  \"episodes\": 965\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/myanimelist/myanimelist.controller.ts",
    "groupTitle": "MyAnimeList"
  },
  {
    "type": "post",
    "url": "myanimelist/anime",
    "title": "Send anime informations.",
    "version": "0.1.0",
    "name": "Send_anime_info",
    "group": "MyAnimeList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "anime",
            "description": "<p>anime to search.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the anime.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>score of the anime.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>url of the anime.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>picture of the anime.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "synopsis",
            "description": "<p>synopsis of the anime.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "episodes",
            "description": "<p>episodes of the anime.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"One piece\",\n  \"score\": 9.25,\n  \"url\": \"https://myanimelist.net/anime/21/One_Piece\",\n  \"image_url\": \"https://cdn.myanimelist.net/images/anime/1634/111433.jpg\",\n  \"synopsis\": \"Gol D. Roger was known as the Pirate King, the strongest ...\",\n  \"episodes\": 965 \n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/myanimelist/myanimelist.controller.ts",
    "groupTitle": "MyAnimeList"
  },
  {
    "type": "post",
    "url": "myanimelist/manga",
    "title": "Send manga informations.",
    "version": "0.1.0",
    "name": "Send_manga_info",
    "group": "MyAnimeList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manga",
            "description": "<p>manga to search.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the manga.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>score of the manga.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>url of the manga.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>picture of the manga.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "synopsis",
            "description": "<p>synopsis of the manga.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"One piece\",\n  \"score\": 9.25,\n  \"url\": \"https://myanimelist.net/manga/21/One_Piece\",\n  \"image_url\": \"https://cdn.myanimelist.net/images/manga/1634/111433.jpg\",\n  \"synopsis\": \"Gol D. Roger was known as the Pirate King, the strongest ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/myanimelist/myanimelist.controller.ts",
    "groupTitle": "MyAnimeList"
  },
  {
    "type": "get",
    "url": "oauth/github",
    "title": "Connection to github service.",
    "version": "0.1.0",
    "name": "Github",
    "group": "OAuth_Services",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "GithubToken",
            "description": "<p>GithubToken of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"GithubToken\": \"qs65d468qs6d1zaed8q4dqsd\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/auth.controller.ts",
    "groupTitle": "OAuth_Services"
  },
  {
    "type": "get",
    "url": "oauth/twitch",
    "title": "Connection to twitch service.",
    "version": "0.1.0",
    "name": "Twitch",
    "group": "OAuth_Services",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TwitchToken",
            "description": "<p>TwitchToken of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"TwitchToken\": \"qs65d468qs6d1zaed8q4dqsd\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/auth.controller.ts",
    "groupTitle": "OAuth_Services"
  },
  {
    "type": "Post",
    "url": "twicth/follow",
    "title": "Follow a streamer and send a mail.",
    "version": "0.1.0",
    "name": "Follow_a_streamer",
    "group": "Twitch",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streamer",
            "description": "<p>streamer to search.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "display_name",
            "description": "<p>streamer's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>streamer's logo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>url of the stream.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>currently on.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"display_name\": \"Sardoche\",\n  \"logo\": \"https://static-cdn.jtvnw.net/jtv_user_pictures/4f06579f-f60c0f7ffe-profile_image-300x300.png\",\n  \"url\": \"https://www.twitch.tv/sardoche\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/twitch/twitch.controller.ts",
    "groupTitle": "Twitch"
  },
  {
    "type": "Get",
    "url": "twicth/follows",
    "title": "If a streamer is on air send a mail.",
    "version": "0.1.0",
    "name": "Streamer_on_air",
    "group": "Twitch",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streamer",
            "description": "<p>streamer to search.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "display_name",
            "description": "<p>streamer's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>streamer's logo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>url of the stream.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>currently on.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"display_name\": \"Sardoche\",\n  \"logo\": \"https://static-cdn.jtvnw.net/jtv_user_pictures/4f06579f-f60c0f7ffe-profile_image-300x300.png\",\n  \"url\": \"https://www.twitch.tv/sardoche\",\n  \"game\": \"Dark Souls\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/twitch/twitch.controller.ts",
    "groupTitle": "Twitch"
  },
  {
    "type": "Post",
    "url": "twicth/unfollow",
    "title": "Unfollow a streamer and send a mail.",
    "version": "0.1.0",
    "name": "Unfollow_a_streamer",
    "group": "Twitch",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streamer",
            "description": "<p>streamer to search.</p>"
          }
        ]
      }
    },
    "filename": "src/twitch/twitch.controller.ts",
    "groupTitle": "Twitch"
  },
  {
    "type": "Get",
    "url": "users/:id",
    "title": "Get a User by Id.",
    "version": "0.1.0",
    "name": "Get_a_User_by_Id",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TwitchToken",
            "description": "<p>TwitchToken of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "GithubToken",
            "description": "<p>GithubToken of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Status of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"username\": \"JoK3RZz\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"password\",\n  \"TwitchToken\": \"qs65d468qs6d1zaed8q4dqsd\",\n  \"GithubToken\": \"5df6sd54f6sd4fsqdsdqsze87r5sd6fcs6\",\n  \"isActive\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/users/users.controller.ts",
    "groupTitle": "Users"
  },
  {
    "type": "Get",
    "url": "users",
    "title": "Get all Users.",
    "version": "0.1.0",
    "name": "Get_all_Users",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TwitchToken",
            "description": "<p>TwitchToken of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "GithubToken",
            "description": "<p>GithubToken of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Status of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"username\": \"JoK3RZz\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"password\",\n  \"TwitchToken\": \"qs65d468qs6d1zaed8q4dqsd\",\n  \"GithubToken\": \"5df6sd54f6sd4fsqdsdqsze87r5sd6fcs6\",\n  \"isActive\": true\n},\n{\n  \"id\": \"2\",\n  \"username\": \"Popo\",\n  \"email\": \"Popo@epitech.eu\",\n  \"password\": \"popoword\",\n  \"TwitchToken\": \"sq6dq6s8d7654zaes6q5d\",\n  \"GithubToken\": \"qs6d4987dza465eaze46az5e4aze6az6s\",\n  \"isActive\": true\n}, ...",
          "type": "json"
        }
      ]
    },
    "filename": "src/users/users.controller.ts",
    "groupTitle": "Users"
  },
  {
    "type": "Get",
    "url": "users/remove/:id",
    "title": "Remove a User by Id.",
    "version": "0.1.0",
    "name": "Remove_a_User_by_Id",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user.</p>"
          }
        ]
      }
    },
    "filename": "src/users/users.controller.ts",
    "groupTitle": "Users"
  },
  {
    "type": "Post",
    "url": "weather/infnow",
    "title": "Report if the temperature is below certain level by sending a mail.",
    "version": "0.1.0",
    "name": "Inferior_Weather_Alerte",
    "group": "Weather",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "alerttemp",
            "description": "<p>Temperature alerte.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city_name",
            "description": "<p>The City name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "temp",
            "description": "<p>Temperature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "weather",
            "description": "<p>Weather details.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weather.icon",
            "description": "<p>icon Weather API.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weather.code",
            "description": "<p>code icon Weather API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weather.description",
            "description": "<p>description of weather.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"city_name\": \"Nancy\",\n  \"temp\": 8,\n  \"weather\": {\n        \"icon\": \"c01n\",\n        \"code\": 800,\n        \"description\": \"Clear sky\"\n      }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/weather/weather.controller.ts",
    "groupTitle": "Weather"
  },
  {
    "type": "Post",
    "url": "weather/infforecast",
    "title": "Report if the temperature forecast is below certain level by sending a mail.",
    "version": "0.1.0",
    "name": "Inferior_Weather_forecast_Alerte",
    "group": "Weather",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "alerttemp",
            "description": "<p>Temperature alerte.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city_name",
            "description": "<p>The City name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "temp",
            "description": "<p>Temperature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "weather",
            "description": "<p>Weather details.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weather.icon",
            "description": "<p>icon Weather API.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weather.code",
            "description": "<p>code icon Weather API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weather.description",
            "description": "<p>description of weather.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"city_name\": \"Nancy\",\n  \"temp\": 15,\n  \"weather\": {\n        \"icon\": \"c01n\",\n        \"code\": 800,\n        \"description\": \"Clear sky\"\n      }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/weather/weather.controller.ts",
    "groupTitle": "Weather"
  },
  {
    "type": "Post",
    "url": "weather/suppnow",
    "title": "Report if the temperature is un top certain level by sending a mail.",
    "version": "0.1.0",
    "name": "Superior_Weather_Alerte",
    "group": "Weather",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "alerttemp",
            "description": "<p>Temperature alerte.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city_name",
            "description": "<p>The City name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "temp",
            "description": "<p>Temperature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "weather",
            "description": "<p>Weather details.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weather.icon",
            "description": "<p>icon Weather API.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weather.code",
            "description": "<p>code icon Weather API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weather.description",
            "description": "<p>description of weather.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"city_name\": \"Nancy\",\n  \"temp\": 13,\n  \"weather\": {\n     \"icon\": \"c01n\",\n     \"code\": 800,\n     \"description\": \"Clear sky\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/weather/weather.controller.ts",
    "groupTitle": "Weather"
  },
  {
    "type": "Post",
    "url": "weather/suppforecast",
    "title": "Report if the temperature forecast is un top certain level by sending a mail.",
    "version": "0.1.0",
    "name": "Superior_Weather_forecast_Alerte",
    "group": "Weather",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "alerttemp",
            "description": "<p>Temperature alerte.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city_name",
            "description": "<p>The City name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "temp",
            "description": "<p>Temperature.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "weather",
            "description": "<p>Weather details.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weather.icon",
            "description": "<p>icon Weather API.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weather.code",
            "description": "<p>code icon Weather API.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weather.description",
            "description": "<p>description of weather.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"city_name\": \"Nancy\",\n  \"temp\": 10,\n  \"weather\": {\n     \"icon\": \"c01n\",\n     \"code\": 800,\n     \"description\": \"Clear sky\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/weather/weather.controller.ts",
    "groupTitle": "Weather"
  }
] });
