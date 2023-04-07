# backend build
[source](https://dev.to/aumayeung/how-to-build-a-chat-app-with-react-socket-io-and-express-117m)<br>
```
npx express-generator
npm i
npm i @babel/cli @babel/core @babel/node @babel/preset-env cors
npm i dotenv pg pg-hstore sequelize sequelize-cli socket.io
npx sequelize-cli init
```
create .babelrc
```
{  
    "presets": [  
        "@babel/preset-env"  
    ]  
}
```

add scripts in package.json
```
"scripts": {  
    "start": "nodemon --exec npm run babel-node --  ./bin/www",  
    "babel-node": "babel-node"  
},
```

```
npm i -g nodemon
```

rename config.json to config.json
```
require("dotenv").config();  
const dbHost = process.env.DB_HOST;  
const dbName = process.env.DB_NAME;  
const dbUsername = process.env.DB_USERNAME;  
const dbPassword = process.env.DB_PASSWORD;  
const dbPort = process.env.DB_PORT || 5432;

module.exports = {  
  development: {  
    username: dbUsername,  
    password: dbPassword,  
    database: dbName,  
    host: dbHost,  
    port: dbPort,  
    dialect: "postgres",  
  },  
  test: {  
    username: dbUsername,  
    password: dbPassword,  
    database: "chat_app_test",  
    host: dbHost,  
    port: dbPort,  
    dialect: "postgres",  
  },  
  production: {  
    use_env_variable: "DATABASE_URL",  
    username: dbUsername,  
    password: dbPassword,  
    database: dbName,  
    host: dbHost,  
    port: dbPort,  
    dialect: "postgres",  
  },  
};
```

add .env
```
DB_HOST='localhost'  
DB_NAME='chat_app_development'  
DB_USERNAME='postgres'  
DB_PASSWORD='postgres'
```

add mode ChatRoom
```
npx sequelize model:generate --name ChatRoom --attributes name:string
```

add model ChatRoomMessages
```
npx sequelize model:generate --name ChatRoomMessages --attributes author:string,message:text,chatRoomId:integer
```

add a unique constraint
```
npx sequelize-cli migration:create add-unique-constraint-for-chatroom-name
```

install postgreSql
/Library/PostgreSQL/15
/Library/PostgreSQL/15/data
postgres
port=5433

Installation Directory: /Library/PostgreSQL/15
Server Installation Directory: /Library/PostgreSQL/15
Data Directory: /Library/PostgreSQL/15/data
Database Port: 5433
Database Superuser: postgres
Operating System Account: postgres
Database Service: postgresql-15
Command Line Tools Installation Directory: /Library/PostgreSQL/15
pgAdmin4 Installation Directory: /Library/PostgreSQL/15/pgAdmin 4
Stack Builder Installation Directory: /Library/PostgreSQL/15
Installation Log: /tmp/install-postgresql.log

add .env - DB_PORT='5433'
create BD via pgAdmin with name chat_app_development

run the migrations
```
npx sequelize-cli db:migrate
```