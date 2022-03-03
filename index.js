const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const clientsRouter = express.Router();

clientsRouter.get('/index.html', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

clientsRouter.get('/api/info', (_, res) => {
  res.json({
    name: 'Batman',
  });
});

app.use('/clients', clientsRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
