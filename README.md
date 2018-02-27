# lighthouse

This is the source code for a very simple socket.io based server serves over http
(no https for the time being) used for handling signaling between PoC clients developed using vuejs and webrtc.

Developing my webrtc project, Lighthouse helps keep clients' vuex stores synced but you can simply adapt it to serve
any pourpose you like.

This server simply listens for events and replies back with broadcasts to the connected clients.

This is really basic stuff not suitable for production, made just to barely
support development.

I pull in express just for routing. Quite an overkill but... again... it's just to support development

### install
After you've cloned the repository in a project directory, cd in the project directory and run

```bash
git clone git@github.com:ssomenzi/lighthouse.git <MY_PROJECT_DIR>
cd <MY_PROJECT_DIR>
npm install
```

### run

```bash
node index.js
```

### test
Head to localhost:3000 and you shoud get 'new connection' on the web page and in the
developers' tool console.

Head to localhost:3000/api and you shoud get back a json with the lighthouse release number plus the same
release number in the terminal console.

You can change the port the server listen to by setting the ENV variable PORT to a number that
better suits you.
