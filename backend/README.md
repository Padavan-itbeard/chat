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