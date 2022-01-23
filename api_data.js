define({ "api": [
  {
    "type": "post",
    "url": "auth/login",
    "title": "Login User.",
    "version": "1.0.0",
    "name": "Login_User",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Body",
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
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>access_token of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCIImh1Z28ub...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>error response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"statusCode\": 400,\n     \"message\": \"User with this email does exist\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "auth/signup",
    "title": "Create User.",
    "version": "1.0.0",
    "name": "Sign_up_User",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phonenumber of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "gender",
            "defaultValue": "unknown",
            "description": "<p>gender of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": true,
            "field": "roles",
            "defaultValue": "user",
            "description": "<p>roles of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "roles",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phonenumber of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "create",
            "description": "<p>create of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n     \"status\": \"pending\",\n     \"firstname\": \"Hugo\",\n     \"lastname\": \"Meyer\",\n     \"gender\": \"male\",\n     \"roles\": [\n         \"user\"\n     ],\n     \"email\": \"hugo.meyer@epitech.eu\",\n     \"password\": \"$2b$10$Mmt66zoiMlSBQu66DaKeHuagCuAIQIBH.4SB04kHJ6Dxn/XQSGb2u\",\n     \"phoneNumber\": \"+33123123123\",\n     \"avatar\": \"https://eu.ui-avatars.com/api/?name=Hugo%20Meyer\",\n     \"bio\": \"about me...\",\n     \"_id\": \"616044f52d3a0b1a91b37442\",\n     \"created\": \"2021-10-08T13:17:41.618Z\",\n     \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>error response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"statusCode\": 400,\n     \"message\": \"User with this email already exist\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Authentication"
  },
  {
    "type": "delete",
    "url": "shop/products/:id",
    "title": "Delete product.",
    "version": "1.0.0",
    "name": "Delete_product",
    "group": "Shop",
    "filename": "src/documentation.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "delete",
    "url": "shop/purchase/:id",
    "title": "Delete purchase.",
    "version": "1.0.0",
    "name": "Delete_purchase",
    "group": "Shop",
    "filename": "src/documentation.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "shop/products",
    "title": "Get all products.",
    "version": "1.0.0",
    "name": "Get_all_products",
    "group": "Shop",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageLink[]",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "availability",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[value]",
            "description": "<p>price value of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[currency]",
            "description": "<p>price currency of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>creation date of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n     \"status\": \"active\",\n     \"type\": \"module\",\n     \"title\": \"Bracelet Hynos\",\n     \"link\": \"\",\n     \"imageLink\": [\n         \"https://i.imgur.com/R9HnrxV.png\"\n     ],\n     \"availability\": \"available\",\n     \"price\": {\n         \"value\": 49.99,\n         \"currency\": \"EUR\"\n     },\n     \"gender\": \"unisexe\",\n     \"description\": \"Bracelet avec Module hynos anti-agression.\",\n     \"color\": \"peach\",\n     \"_id\": \"61640526837cb47127361af1\",\n     \"created\": \"2021-10-11T09:34:30.324Z\",\n     \"__v\": 0\n },\n {\n     \"price\": {\n         \"value\": 49.99,\n         \"currency\": \"EUR\"\n     },\n     \"_id\": \"6164048b837cb47127361aeb\",\n     \"status\": \"active\",\n     \"type\": \"module\",\n     \"title\": \"Bracelet Hynos Noir/Argent\",\n     \"link\": \"\",\n     \"imageLink\": [\n         \"https://i.imgur.com/LaMXbW6.png\"\n     ],\n     \"availability\": \"available\",\n     \"gender\": \"unisexe\",\n     \"description\": \"Bracelet noir avec module argente Hynos anti-agression.\",\n     \"color\": \"black\",\n     \"created\": \"2021-10-11T09:31:55.010Z\",\n     \"__v\": 0\n }, ...]",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "shop/products",
    "title": "Get all products.",
    "version": "1.0.0",
    "name": "Get_all_products",
    "group": "Shop",
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the purchase.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the purchase.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the customer.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[_id]",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[firstname]",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[lastname]",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "customer[premium]",
            "description": "<p>If the user is premium or not.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[gender]",
            "description": "<p>gender of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "customer[roles]",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[email]",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[phoneNumber]",
            "description": "<p>phone number of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[password]",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[avatar]",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[bio]",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "customer[create]",
            "description": "<p>create date of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[_id]",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[status]",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[type]",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[title]",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products",
            "description": "<p>[link               link of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[availability]",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[description]",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[gender]",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[color]",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[created]",
            "description": "<p>creation date of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "price[value]",
            "description": "<p>total price value of the purchase.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 CREATED\n[{\n   \"status\": \"pending\",\n   \"customer\": {\n       \"_id\": \"61dee544cd596a26c13b2412\",\n       \"status\": \"pending\",\n       \"firstname\": \"Hugo\",\n       \"lastname\": \"Meyer\",\n       \"premium\": true,\n       \"gender\": \"male\",\n       \"roles\": [\n           \"admin\"\n       ],\n       \"email\": \"hugo.meyer@epitech.eu\",\n       \"password\": \"$2b$10$u4FktmI26UzLLophk6ZuG.lb4LnTStJOXmjhC/2wEzv8F7acmCOau\",\n       \"phoneNumber\": \"+33663657983\",\n       \"avatar\": \"https://eu.ui-avatars.com/api/?name=Hugo%20Meyer\",\n       \"bio\": \"about me...\",\n       \"created\": \"2022-01-12T14:27:16.526Z\",\n       \"__v\": 0\n   },\n   \"products\": [\n       {\n           \"price\": {\n               \"value\": 49.99,\n               \"currency\": \"EUR\"\n           },\n           \"_id\": \"6164048b837cb47127361aeb\",\n           \"status\": \"active\",\n           \"type\": \"module\",\n           \"title\": \"Bracelet Hynos\",\n           \"link\": \"\",\n           \"imageLink\": [\n               \"https://i.imgur.com/LaMXbW6.png\"\n           ],\n           \"availability\": \"available\",\n           \"gender\": \"unisexe\",\n           \"description\": \"Bracelet avec module hynos anti-agression.\",\n           \"color\": \"black/silver\",\n           \"created\": \"2021-10-11T09:31:55.010Z\",\n           \"__v\": 0\n       }\n   ],\n   \"price\": {\n       \"value\": 49.99,\n       \"currency\": \"EUR\"\n   },\n   \"address\": \"21 rue de Dieuze\",\n   \"_id\": \"61ed7719298d87aa7bcad70c\",\n   \"created\": \"2022-01-23T15:41:13.423Z\",\n   \"__v\": 0\n }, ...]",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "shop/products/category",
    "title": "Get all products category.",
    "version": "1.0.0",
    "name": "Get_all_products_category",
    "group": "Shop",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[\n    \"bracelet\",\n    \"module\",\n    \"subscription\",\n    \"unknown\"\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "shop/products/category/:unisexe",
    "title": "Get products by genre.",
    "version": "1.0.0",
    "name": "Get_products_by_genre",
    "group": "Shop",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageLink[]",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "availability",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[value]",
            "description": "<p>price value of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[currency]",
            "description": "<p>price currency of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>creation date of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n     \"status\": \"active\",\n     \"type\": \"module\",\n     \"title\": \"Bracelet Hynos\",\n     \"link\": \"\",\n     \"imageLink\": [\n         \"https://i.imgur.com/R9HnrxV.png\"\n     ],\n     \"availability\": \"available\",\n     \"price\": {\n         \"value\": 49.99,\n         \"currency\": \"EUR\"\n     },\n     \"gender\": \"unisexe\",\n     \"description\": \"Bracelet avec Module hynos anti-agression.\",\n     \"color\": \"peach\",\n     \"_id\": \"61640526837cb47127361af1\",\n     \"created\": \"2021-10-11T09:34:30.324Z\",\n     \"__v\": 0\n },\n {\n     \"price\": {\n         \"value\": 49.99,\n         \"currency\": \"EUR\"\n     },\n     \"_id\": \"6164048b837cb47127361aeb\",\n     \"status\": \"active\",\n     \"type\": \"module\",\n     \"title\": \"Bracelet Hynos Noir/Argent\",\n     \"link\": \"\",\n     \"imageLink\": [\n         \"https://i.imgur.com/LaMXbW6.png\"\n     ],\n     \"availability\": \"available\",\n     \"gender\": \"unisexe\",\n     \"description\": \"Bracelet noir avec module argente Hynos anti-agression.\",\n     \"color\": \"black\",\n     \"created\": \"2021-10-11T09:31:55.010Z\",\n     \"__v\": 0\n }, ...]",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "shop/products/category/:type",
    "title": "Get products by type.",
    "version": "1.0.0",
    "name": "Get_products_by_type",
    "group": "Shop",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageLink[]",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "availability",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[value]",
            "description": "<p>price value of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[currency]",
            "description": "<p>price currency of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>creation date of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n     \"status\": \"active\",\n     \"type\": \"module\",\n     \"title\": \"Bracelet Hynos\",\n     \"link\": \"\",\n     \"imageLink\": [\n         \"https://i.imgur.com/R9HnrxV.png\"\n     ],\n     \"availability\": \"available\",\n     \"price\": {\n         \"value\": 49.99,\n         \"currency\": \"EUR\"\n     },\n     \"gender\": \"unisexe\",\n     \"description\": \"Bracelet avec Module hynos anti-agression.\",\n     \"color\": \"peach\",\n     \"_id\": \"61640526837cb47127361af1\",\n     \"created\": \"2021-10-11T09:34:30.324Z\",\n     \"__v\": 0\n },\n {\n     \"price\": {\n         \"value\": 49.99,\n         \"currency\": \"EUR\"\n     },\n     \"_id\": \"6164048b837cb47127361aeb\",\n     \"status\": \"active\",\n     \"type\": \"module\",\n     \"title\": \"Bracelet Hynos Noir/Argent\",\n     \"link\": \"\",\n     \"imageLink\": [\n         \"https://i.imgur.com/LaMXbW6.png\"\n     ],\n     \"availability\": \"available\",\n     \"gender\": \"unisexe\",\n     \"description\": \"Bracelet noir avec module argente Hynos anti-agression.\",\n     \"color\": \"black\",\n     \"created\": \"2021-10-11T09:31:55.010Z\",\n     \"__v\": 0\n }, ...]",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "patch",
    "url": "shop/products/:id",
    "title": "Update product.",
    "version": "1.0.0",
    "name": "Update_product",
    "group": "Shop",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "KeyName",
            "description": "<p>KeyName and the value to change.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"status\": \"inactive\",\n    \"type\": \"module\",\n    \"title\": \"Bracelet Hynos\",\n    \"description\": \"Bracelet avec Module hynos anti-agression.\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageLink[]",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "availability",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[value]",
            "description": "<p>price value of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[currency]",
            "description": "<p>price currency of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>creation date of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"status\": \"active\",\n     \"type\": \"module\",\n     \"title\": \"Bracelet Hynos\",\n     \"link\": \"\",\n     \"imageLink\": [\n         \"https://i.imgur.com/R9HnrxV.png\"\n     ],\n     \"availability\": \"available\",\n     \"price\": {\n         \"value\": 49.99,\n         \"currency\": \"EUR\"\n     },\n     \"gender\": \"unisexe\",\n     \"description\": \"Bracelet avec Module hynos anti-agression.\",\n     \"color\": \"peach\",\n     \"_id\": \"61640526837cb47127361af1\",\n     \"created\": \"2021-10-11T09:34:30.324Z\",\n     \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "post",
    "url": "shop/products",
    "title": "Create product.",
    "version": "1.0.0",
    "name": "create_product",
    "group": "Shop",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageLink",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "availability",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "price[value]",
            "description": "<p>price value of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "price[currency]",
            "description": "<p>price currency of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"status\": \"active\",\n    \"type\": \"module\",\n    \"title\": \"Bracelet Hynos\",\n    \"link\": \"https://hynos.fr/products/1\",\n    \"imageLink\": [\n        \"https://i.imgur.com/R9HnrxV.png\"\n    ],\n    \"availability\": \"available\",\n    \"price\": {\n        \"value\": 49.99,\n        \"currency\": \"EUR\"\n    },\n    \"description\": \"Bracelet avec Module hynos anti-agression.\",\n    \"color\": \"peach\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageLink[]",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "availability",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[value]",
            "description": "<p>price value of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[currency]",
            "description": "<p>price currency of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>creation date of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"status\": \"active\",\n     \"type\": \"module\",\n     \"title\": \"Bracelet Hynos\",\n     \"link\": \"\",\n     \"imageLink\": [\n         \"https://i.imgur.com/R9HnrxV.png\"\n     ],\n     \"availability\": \"available\",\n     \"price\": {\n         \"value\": 49.99,\n         \"currency\": \"EUR\"\n     },\n     \"gender\": \"unisexe\",\n     \"description\": \"Bracelet avec Module hynos anti-agression.\",\n     \"color\": \"peach\",\n     \"_id\": \"61640526837cb47127361af1\",\n     \"created\": \"2021-10-11T09:34:30.324Z\",\n     \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "post",
    "url": "shop/purchase",
    "title": "Create purchase.",
    "version": "1.0.0",
    "name": "create_purchase",
    "group": "Shop",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "customerID",
            "description": "<p>customerID of the purchase.</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "products",
            "description": "<p>productsID of the purchase.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"customerID\": \"6187dd52cf1b09b167ffde3f\",\n    \"products\": [\n        \"6164048b837cb47127361aeb\",\n    ],\n    \"address\": \"13 rue de Dieuze\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the purchase.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the purchase.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the customer.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[_id]",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[firstname]",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[lastname]",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "customer[premium]",
            "description": "<p>If the user is premium or not.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[gender]",
            "description": "<p>gender of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "customer[roles]",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[email]",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[phoneNumber]",
            "description": "<p>phone number of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[password]",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[avatar]",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[bio]",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "customer[create]",
            "description": "<p>create date of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[_id]",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[status]",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[type]",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[title]",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products",
            "description": "<p>[link               link of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[availability]",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[description]",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[gender]",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[color]",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[created]",
            "description": "<p>creation date of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "price[value]",
            "description": "<p>total price value of the purchase.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 CREATED\n{\n   \"status\": \"pending\",\n   \"customer\": {\n       \"_id\": \"61dee544cd596a26c13b2412\",\n       \"status\": \"pending\",\n       \"firstname\": \"Hugo\",\n       \"lastname\": \"Meyer\",\n       \"premium\": true,\n       \"gender\": \"male\",\n       \"roles\": [\n           \"admin\"\n       ],\n       \"email\": \"hugo.meyer@epitech.eu\",\n       \"password\": \"$2b$10$u4FktmI26UzLLophk6ZuG.lb4LnTStJOXmjhC/2wEzv8F7acmCOau\",\n       \"phoneNumber\": \"+33663657983\",\n       \"avatar\": \"https://eu.ui-avatars.com/api/?name=Hugo%20Meyer\",\n       \"bio\": \"about me...\",\n       \"created\": \"2022-01-12T14:27:16.526Z\",\n       \"__v\": 0\n   },\n   \"products\": [\n       {\n           \"price\": {\n               \"value\": 49.99,\n               \"currency\": \"EUR\"\n           },\n           \"_id\": \"6164048b837cb47127361aeb\",\n           \"status\": \"active\",\n           \"type\": \"module\",\n           \"title\": \"Bracelet Hynos\",\n           \"link\": \"\",\n           \"imageLink\": [\n               \"https://i.imgur.com/LaMXbW6.png\"\n           ],\n           \"availability\": \"available\",\n           \"gender\": \"unisexe\",\n           \"description\": \"Bracelet avec module hynos anti-agression.\",\n           \"color\": \"black/silver\",\n           \"created\": \"2021-10-11T09:31:55.010Z\",\n           \"__v\": 0\n       }\n   ],\n   \"price\": {\n       \"value\": 49.99,\n       \"currency\": \"EUR\"\n   },\n   \"address\": \"21 rue de Dieuze\",\n   \"_id\": \"61ed7719298d87aa7bcad70c\",\n   \"created\": \"2022-01-23T15:41:13.423Z\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "contacts",
    "title": "Get all urgency contacts.",
    "version": "1.0.0",
    "name": "Get_all_urgency_contacts",
    "group": "Urgency_Contacts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Id of the owner of comtact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>Phonenumber of the urgency contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n [{\n  \"ownerId\": \"6163d03106ac6673f0f5c137\",\n  \"fullname\": \"Test Contact\",\n  \"phoneNumber\": \"+33611111111\",\n  \"avatar\": \"https://eu.ui-avatars.com/api/?name=Test%20Contact\",\n  \"description\": \"description ...\",\n  \"_id\": \"6163dafac5863e36ba00d860\",\n  \"created\": \"2021-10-11T06:34:34.401Z\",\n  \"__v\": 0\n},\n{\n  \"ownerId\": \"6163d03106ac6673f0f5c137\",\n  \"fullname\": \"Test Toto\",\n  \"phoneNumber\": \"+33633333333\",\n  \"avatar\": \"https://eu.ui-avatars.com/api/?name=Test%20Toto\",\n  \"description\": \"description ...\",\n  \"_id\": \"6163db83c5863e36ba00d862\",\n  \"created\": \"2021-10-11T06:36:51.841Z\",\n  \"__v\": 0\n},\n   ...]",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Urgency_Contacts"
  },
  {
    "type": "get",
    "url": "contacts/:id",
    "title": "Get an urgency contacts.",
    "version": "1.0.0",
    "name": "Get_an_urgency_contacts",
    "group": "Urgency_Contacts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Id of the owner of comtact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>Phonenumber of the urgency contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"ownerId\": \"6163d03106ac6673f0f5c137\",\n  \"fullname\": \"Test Contact\",\n  \"phoneNumber\": \"+33611111111\",\n  \"avatar\": \"https://eu.ui-avatars.com/api/?name=Test%20Contact\",\n  \"description\": \"description ...\",\n  \"_id\": \"6163dafac5863e36ba00d860\",\n  \"created\": \"2021-10-11T06:34:34.401Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Urgency_Contacts"
  },
  {
    "type": "get",
    "url": "contacts/urgency/:ownerId",
    "title": "Get the owner of an urgency contacts.",
    "version": "1.0.0",
    "name": "Get_the_owner_of_an_urgency_contacts",
    "group": "Urgency_Contacts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Id of the owner of comtact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>Phonenumber of the urgency contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"ownerId\": \"6163d03106ac6673f0f5c137\",\n  \"fullname\": \"Test Contact\",\n  \"phoneNumber\": \"+33611111111\",\n  \"avatar\": \"https://eu.ui-avatars.com/api/?name=Test%20Contact\",\n  \"description\": \"description ...\",\n  \"_id\": \"6163dafac5863e36ba00d860\",\n  \"created\": \"2021-10-11T06:34:34.401Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Urgency_Contacts"
  },
  {
    "type": "remove",
    "url": "contacts/:id",
    "title": "Remove an urgency contacts.",
    "version": "1.0.0",
    "name": "Remove_an_urgency_contacts",
    "group": "Urgency_Contacts",
    "filename": "src/documentation.ts",
    "groupTitle": "Urgency_Contacts"
  },
  {
    "type": "patch",
    "url": "contacts/:id",
    "title": "Update an urgency contacts.",
    "version": "1.0.0",
    "name": "Update_an_urgency_contacts",
    "group": "Urgency_Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "KeyName",
            "description": "<p>Key name and value to edit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"username\": \"Titu\",\n    \"phoneNumber\": \"+33622222222\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Id of the owner of comtact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>Phonenumber of the urgency contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"ownerId\": \"6163d03106ac6673f0f5c137\",\n  \"fullname\": \"Test Contact\",\n  \"phoneNumber\": \"+33611111111\",\n  \"avatar\": \"https://eu.ui-avatars.com/api/?name=Test%20Contact\",\n  \"description\": \"description ...\",\n  \"_id\": \"6163dafac5863e36ba00d860\",\n  \"created\": \"2021-10-11T06:34:34.401Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Urgency_Contacts"
  },
  {
    "type": "post",
    "url": "contacts",
    "title": "Create urgency contacts.",
    "version": "1.0.0",
    "name": "create_urgency_contacts",
    "group": "Urgency_Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Id of the owner of contact.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname of the urgency contact.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>Phonenumber of the urgency contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"urgencyId\": \"6138949afc08c72e2c51f2a8\",\n    \"username\": \"Titi\",\n    \"phoneNumber\": \"+33622222222\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Id of the owner of comtact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>Phonenumber of the urgency contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"ownerId\": \"6163d03106ac6673f0f5c137\",\n  \"fullname\": \"Test Contact\",\n  \"phoneNumber\": \"+33611111111\",\n  \"avatar\": \"https://eu.ui-avatars.com/api/?name=Test%20Contact\",\n  \"description\": \"description ...\",\n  \"_id\": \"6163dafac5863e36ba00d860\",\n  \"created\": \"2021-10-11T06:34:34.401Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "Urgency_Contacts"
  },
  {
    "type": "Get",
    "url": "user/:email",
    "title": "Get a User by email.",
    "version": "1.0.0",
    "name": "Get_a_User_by_email",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
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
            "field": "_id",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "premium",
            "description": "<p>gender of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "roles",
            "description": "<p>roles of the User.</p>"
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
            "field": "phoneNumber",
            "description": "<p>phonenumber of the user.</p>"
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
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "create",
            "description": "<p>create of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"_id\": \"61dee544cd596a26c13b2412\",\n     \"status\": \"pending\",\n     \"firstname\": \"Hugo\",\n     \"lastname\": \"Meyer\",\n     \"premium\": true,\n     \"gender\": \"male\",\n     \"roles\": [\n         \"admin\"\n     ],\n     \"email\": \"hugo.meyer@epitech.eu\",\n     \"password\": \"$2b$10$u4FktmI26asdeophk6ZuG.lb4LnTStJOXmjhC/2wEzv8F7acmCOau\",\n     \"phoneNumber\": \"+33663657983\",\n     \"avatar\": \"https://eu.ui-avatars.com/api/?name=Hugo%20Meyer\",\n     \"bio\": \"about me...\",\n     \"created\": \"2022-01-12T14:27:16.526Z\",\n     \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>error response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"statusCode\": 400,\n     \"message\": \"User with this email already exist\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "user",
    "title": "Get all Users.",
    "version": "1.0.0",
    "name": "Get_all_Users",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "premium",
            "description": "<p>If the user is premium or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "roles",
            "description": "<p>roles of the User.</p>"
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
            "field": "phoneNumber",
            "description": "<p>phone number of the user.</p>"
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
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "create",
            "description": "<p>create date of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n      \"status\": \"pending\",\n      \"firstname\": \"Hugo\",\n      \"lastname\": \"Meyer\",\n      \"premium\": true,\n      \"gender\": \"male\",\n      \"roles\": [\n          \"user\"\n      ],\n      \"email\": \"hugo.meyer@epitech.eu\",\n      \"password\": \"$2b$10$Mmt66zoiMlSBQu69kQgkDuCuAIQIBH.4SB04kHJ6Dxn/XQSGb2u\",\n      \"phoneNumber\": \"+33123123123\",\n      \"avatar\": \"https://eu.ui-avatars.com/api/?name=hynos\",\n      \"bio\": \"about me...\",\n      \"_id\": \"616044f52d3a0b1a91b37442\",\n      \"created\": \"2021-10-08T13:17:41.618Z\",\n      \"__v\": 0\n },\n    {\n        \"_id\": \"61e72141d76d9d3812d8634d\",\n        \"status\": \"active\",\n        \"firstname\": \"test\",\n        \"lastname\": \"testName\",\n        \"premium\": false,\n        \"gender\": \"male\",\n        \"roles\": [\n            \"user\"\n        ],\n        \"email\": \"test.test@epitech.eu\",\n        \"password\": \"$2b$10$1xmJHKKldXI9SZbqxsVO0O/walBti/eumCcQXEAWRQvXNG51KFW\",\n        \"phoneNumber\": \"+33123456789\",\n        \"avatar\": \"https://eu.ui-avatars.com/api/?name=test%20testName\",\n        \"bio\": \"about me...\",\n        \"created\": \"2022-01-18T20:21:21.757Z\",\n        \"__v\": 0\n    }, ...]",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "User"
  },
  {
    "type": "Get",
    "url": "auth/profile",
    "title": "Get profile of the current user.",
    "version": "1.0.0",
    "name": "Get_current_User_Profile",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInRWV...\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles",
            "description": "<p>roles of the User.</p>"
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
            "field": "phoneNumber",
            "description": "<p>phonenumber of the user.</p>"
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
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create",
            "description": "<p>create of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"status\": \"pending\",\n      \"firstname\": \"Hugo\",\n      \"lastname\": \"Meyer\",\n      \"gender\": \"male\",\n      \"roles\": [\n          \"user\"\n      ],\n      \"email\": \"hugo.meyer@epitech.eu\",\n      \"password\": \"$2b$10$Mmt66zoiMlSBQu69kQgkDuagCuAIQIBH.4SB04kHJ6Dxn/XQSGb2u\",\n      \"phoneNumber\": \"+33123123123\",\n      \"avatar\": \"https://eu.ui-avatars.com/api/?name=hynos\",\n      \"bio\": \"about me...\",\n      \"_id\": \"616044f52d3a0b1a91b37442\",\n      \"created\": \"2021-10-08T13:17:41.618Z\",\n      \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "User"
  },
  {
    "type": "Delete",
    "url": "auth/user",
    "title": "Remove a User by Id.",
    "version": "1.0.0",
    "name": "Remove_a_User_by_Id",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInRWV...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "auth/user",
    "title": "Update user to API.",
    "version": "1.0.0",
    "name": "Update_User",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInRWV...\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "KeyName",
            "description": "<p>Key name and value to edit.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body usage:",
        "content": "Example of a json to use for update an user\n{\n    \"avatar\": \"https://eu.ui-avatars.com/api/?name=Hugo\",\n    \"bio\": \"coucou je change ma bio\",\n    \"premium\": true,\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles",
            "description": "<p>roles of the User.</p>"
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
            "field": "phoneNumber",
            "description": "<p>phonenumber of the user.</p>"
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
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create",
            "description": "<p>create of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"status\": \"pending\",\n      \"firstname\": \"Hugo\",\n      \"lastname\": \"Meyer\",\n      \"gender\": \"male\",\n      \"premium\": true,\n      \"roles\": [\n          \"user\"\n      ],\n      \"email\": \"hugo.meyer@epitech.eu\",\n      \"password\": \"$2b$10$Mmt66zoiMlSBQu69kQgkDuagCuAIQIBH.4SB04kHJ6Dxn/XQSGb2u\",\n      \"phoneNumber\": \"+33123123123\",\n      \"avatar\": \"https://eu.ui-avatars.com/api/?name=Hugo\",\n      \"bio\": \"coucou je change ma bio\",\n      \"_id\": \"616044f52d3a0b1a91b37442\",\n      \"created\": \"2021-10-08T13:17:41.618Z\",\n      \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation.ts",
    "groupTitle": "User"
  }
] });
