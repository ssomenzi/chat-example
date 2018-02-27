# lighthouse

This is the source code for a very simple socket.io based server used for
handling signaling between PoC clients developed using vuejs and webrtc.

Lighthouse helps keep clients' vuex stores synced.

This is really basic stuff not suitable for production made just to barely
support development.

I pull in express just for routing. Quite an overkill but... it's just to support development

### install
After you've cloned the repository cd in the project directory and run

```bash
npm install
```

### test
Head to localhost:3000 and you shoud get 'new connection' in the console

Head to localhost:3000/api and you shoud get back a json with the lighthouse release number

You can change the port the server listen to by setting the ENV variable PORT to a number that
better suits you.
