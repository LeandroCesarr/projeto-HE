const normalizePort = require('./config/port');
const notifier = require('node-notifier');
const router = require('./routes/router');
const nunjucks = require('nunjucks');
const express = require('express');

const app = express();
const port = normalizePort(process.env.PORT || '3000');

// template engine
nunjucks.configure('src/views', {
  autoescape: true,
  express: app,
});

app.use(router);

app.listen(port, () => {
  notifier.notify({
    title: `pineappleDevs: ${port}`,
    message: 'Build succesfull',
  })
})
