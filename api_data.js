define({ "api": [
  {
    "type": "post",
    "url": "auth/login",
    "title": "Login user to API.",
    "version": "0.1.0",
    "name": "Login_User",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "field": "access_token",
            "description": "<p>access_token of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app.controller.ts",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/auth/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "auth/signup",
    "title": "Create user to API.",
    "version": "0.1.0",
    "name": "Sign_up_User",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the user.</p>"
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>phonenumber of the user.</p>"
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
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Lastname",
            "description": "<p>Lastname of the User.</p>"
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
            "field": "phonenumber",
            "description": "<p>phonenumber of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"19234785\",\n  \"firstname\": \"Hugo\",\n  \"lastname\": \"Meyer\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"password\",\n  \"phonenumber\": \"+33612345678\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app.controller.ts",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/auth/signup"
      }
    ]
  },
  {
    "type": "get",
    "url": "contacts",
    "title": "Get all urgency contacts.",
    "version": "0.1.0",
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
            "field": "urgencyId",
            "description": "<p>Id of the owner of comtact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the urgency contact.</p>"
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
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": \"63sa628sdas87638d6asy\",\n  \"urgencyId\": \"61d6734hd734h0sh239d09\",\n  \"username\": \"Hugo Meyer\",\n  \"phonenumber\": \"+33612345678\"\n},\n {\n  \"id\": \"78d789s98778fh0q99ui092\",\n  \"urgencyId\": \"61d6734hd734h0sh239d09\",\n  \"username\": \"toto tutu\",\n  \"phonenumber\": \"+33612345678\"\n},\n  ...]",
          "type": "json"
        }
      ]
    },
    "filename": "src/contacts/contacts.controller.ts",
    "groupTitle": "Urgency_Contacts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/contacts"
      }
    ]
  },
  {
    "type": "get",
    "url": "contacts/:id",
    "title": "Get an urgency contacts.",
    "version": "0.1.0",
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
            "field": "urgencyId",
            "description": "<p>Id of the owner of comtact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the urgency contact.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"63sa628sdas87638d6asy\",\n  \"urgencyId\": \"61d6734hd734h0sh239d09\",\n  \"username\": \"Hugo Meyer\",\n  \"phonenumber\": \"+33612345678\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/contacts/contacts.controller.ts",
    "groupTitle": "Urgency_Contacts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/contacts/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "contacts/urgency/:urgencyId",
    "title": "Get the owner of an urgency contacts.",
    "version": "0.1.0",
    "name": "Get_the_owner_of_an_urgency_contacts",
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
            "field": "urgencyId",
            "description": "<p>Id of the owner of comtact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the urgency contact.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"63sa628sdas87638d6asy\",\n  \"urgencyId\": \"61d6734hd734h0sh239d09\",\n  \"username\": \"Hugo Meyer\",\n  \"phonenumber\": \"+33612345678\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/contacts/contacts.controller.ts",
    "groupTitle": "Urgency_Contacts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/contacts/urgency/:urgencyId"
      }
    ]
  },
  {
    "type": "remove",
    "url": "contacts/:id",
    "title": "Remove an urgency contacts.",
    "version": "0.1.0",
    "name": "Remove_an_urgency_contacts",
    "group": "Urgency_Contacts",
    "filename": "src/contacts/contacts.controller.ts",
    "groupTitle": "Urgency_Contacts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/contacts/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "contacts/:id",
    "title": "Update an urgency contacts.",
    "version": "0.1.0",
    "name": "Update_an_urgency_contacts",
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
            "field": "urgencyId",
            "description": "<p>Id of the owner of comtact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the urgency contact.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"63sa628sdas87638d6asy\",\n  \"urgencyId\": \"61d6734hd734h0sh239d09\",\n  \"username\": \"Hugo Meyer\",\n  \"phonenumber\": \"+33612345678\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/contacts/contacts.controller.ts",
    "groupTitle": "Urgency_Contacts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/contacts/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "contacts",
    "title": "Create urgency contacts.",
    "version": "0.1.0",
    "name": "create_urgency_contacts",
    "group": "Urgency_Contacts",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "urgencyId",
        "description": "<p>Id of the owner of contact.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "username",
        "description": "<p>Username of the urgency contact.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "phonenumber",
        "description": "<p>Phonenumber of the urgency contact.</p>"
      }
    ],
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
            "field": "urgencyId",
            "description": "<p>Id of the owner of comtact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the urgency contact.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"63sa628sdas87638d6asy\",\n  \"urgencyId\": \"61d6734hd734h0sh239d09\",\n  \"username\": \"Hugo Meyer\",\n  \"phonenumber\": \"+33612345678\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/contacts/contacts.controller.ts",
    "groupTitle": "Urgency_Contacts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/contacts"
      }
    ]
  },
  {
    "type": "Get",
    "url": "user/:email",
    "title": "Get a User by an email.",
    "version": "0.1.0",
    "name": "Get_a_User_by_an_email",
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
            "field": "id",
            "description": "<p>id of the User.</p>"
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
            "field": "Lastname",
            "description": "<p>Lastname of the User.</p>"
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
            "field": "phonenumber",
            "description": "<p>phonenumber of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"19234785\",\n  \"firstname\": \"Hugo\",\n  \"lastname\": \"Meyer\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"password\",\n  \"phonenumber\": \"+33612345678\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/user/user.controller.ts",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/:email"
      }
    ]
  },
  {
    "type": "get",
    "url": "user",
    "title": "Get all users.",
    "version": "0.1.0",
    "name": "Get_all_users",
    "group": "User",
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
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>hash password of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"19234785\",\n  \"firstname\": \"Toto\",\n  \"lastname\": \"Tutu\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"ijsahdf92384h23@#$234kjiwdsg2734yasd23\",\n  \"phonenumber\": \"+33612345678\"\n},\n{\n  \"id\": \"19234785\",\n  \"firstname\": \"Hugo\",\n  \"lastname\": \"Meyer\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"u3sda4hfasdufhoaisdf234@#$234kjiwdsg2734yasd23\",\n  \"phonenumber\": \"+33612345678\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/user/user.controller.ts",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user"
      }
    ]
  },
  {
    "type": "Get",
    "url": "user/profile",
    "title": "Get profile of the current user.",
    "version": "0.1.0",
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
            "field": "id",
            "description": "<p>id of the User.</p>"
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
            "field": "Lastname",
            "description": "<p>Lastname of the User.</p>"
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
            "field": "phonenumber",
            "description": "<p>phonenumber of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"19234785\",\n  \"firstname\": \"Hugo\",\n  \"lastname\": \"Meyer\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"password\",\n  \"phonenumber\": \"+33612345678\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/user/user.controller.ts",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/profile"
      }
    ]
  },
  {
    "type": "Delete",
    "url": "user",
    "title": "Remove a User by Id.",
    "version": "0.1.0",
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
    "filename": "src/user/user.controller.ts",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user"
      }
    ]
  },
  {
    "type": "patch",
    "url": "user",
    "title": "Update user to API.",
    "version": "0.1.0",
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
            "field": "toedit",
            "description": "<p>value to edit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newvalue",
            "description": "<p>new value of the edit.</p>"
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
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Lastname",
            "description": "<p>Lastname of the User.</p>"
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
            "field": "phonenumber",
            "description": "<p>phonenumber of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"19234785\",\n  \"firstname\": \"Hugo\",\n  \"lastname\": \"Meyer\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"password\",\n  \"phonenumber\": \"+33612345678\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/user/user.controller.ts",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user"
      }
    ]
  }
] });
