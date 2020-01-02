Visualisation balance pancakes on the bar
==============

> Created using WebSockets

This is web chat, like a tech support

It can: configure agent name in client interface, remind his location and state using cookie and DB, send request from agent to client to find out his location, searching among agents and clients in agent interface and other features coming soon.

This project require installed mongoDB.

[agent interface repo](https://github.com/Sinica15/js-ws-front-operator-chat200)
![agent_interface](https://raw.githubusercontent.com/Sinica15/nodejs-ws-back-chat200/master/forRM/agent_interface.png)

[client interface repo](https://github.com/Sinica15/js-ws-front-chat200)
![client_interface](https://raw.githubusercontent.com/Sinica15/nodejs-ws-back-chat200/master/forRM/client_interface.png)

``` bash
# Install dependencies
npm install

# Start mongoDB
mongod

# Serve with hot reload at localhost:9004
npm run start

# Build for production with minification
npm run build
```
