define({ "api": [
  {
    "type": "get",
    "url": "api/authenticate",
    "title": "Authenticate",
    "name": "Authenticate",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Senha do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Contém um bool que indica se foi bem sucedido.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de retorno.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Retorna um token para futuras requisições.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.server.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "api/user/:id",
    "title": "Update User",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Retorna um objeto que contém as informações do usuário alterado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.server.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "api/user/:id",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Retorna um objeto que contém as informações do usuário deletado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.server.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/user/:id",
    "title": "Get User",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Retorna um objeto que contém as informações do usuário.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.server.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/user",
    "title": "Request Get Users",
    "name": "GetUsers",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Retorna um objeto que contém as informações do usuário.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.server.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/user",
    "title": "Create User",
    "name": "PostUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cep",
            "description": "<p>Cep do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Senha do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Retorna um objeto que contém as informações do usuário cadastrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.server.controller.js",
    "groupTitle": "User"
  }
] });
