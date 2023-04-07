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