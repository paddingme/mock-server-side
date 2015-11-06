define({ "api": [
  {
    "type": "get",
    "url": "api/user/",
    "title": "取的所有用户信息",
    "name": "GetAllUser",
    "group": "User",
    "permission": [
      {
        "name": "login user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户姓名</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>用户年龄</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t [\n\t  {\n\t    \"id\": 1,\n\t    \"name\": \"madidi\",\n\t    \"age\": \"18\"\n\t  },\n\t  {\n\t    \"id\": 2,\n\t    \"name\": \"cengjunjun\",\n\t    \"age\": \"19\"\n\t  }\n\t]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/Users/paddingme/Documents/paddingme's work/jwt-simplt/server/api.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/user/:id",
    "title": "取得指定id用户信息",
    "name": "GetTheUser",
    "group": "User",
    "permission": [
      {
        "name": "login user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户姓名</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>用户年龄</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t    \"id\": 1,\n\t    \"name\": \"madidi\",\n\t    \"age\": \"18\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "4xx",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>用户未登录</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>没有该用户id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n \"error\" : \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/Users/paddingme/Documents/paddingme's work/jwt-simplt/server/api.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/user/",
    "title": "创建一个新用户",
    "name": "create_a_new_user",
    "group": "User",
    "permission": [
      {
        "name": "login user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>用户年龄</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "4xx",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>用户未登录</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AgeIsNaN",
            "description": "<p>年龄非数字</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameToolong",
            "description": "<p>姓名少于四个字</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/Users/paddingme/Documents/paddingme's work/jwt-simplt/server/api.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "api/user/:id",
    "title": "更新一个用户信息",
    "name": "update_a_user_info",
    "group": "User",
    "permission": [
      {
        "name": "login user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>用户年龄</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "4xx",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>用户未登录</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AgeIsNaN",
            "description": "<p>年龄非数字</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameToolong",
            "description": "<p>姓名少于四个字</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/Users/paddingme/Documents/paddingme's work/jwt-simplt/server/api.js",
    "groupTitle": "User"
  }
] });