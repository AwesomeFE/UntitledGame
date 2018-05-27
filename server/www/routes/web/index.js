import path from 'path';
import express from 'express';
import UA from 'ua-parser-js';

const router = express.Router();

router.get('/*', userHandler);

function userHandler(req, res, next) {
  const ua = new UA(req.headers['user-agent']);

  if(['mobile', 'tablet'].indexOf(ua.getDevice().type) !== -1) {
    res.sendFile('index.html', {
      root: path.resolve('client/dist/www/mobile')
    });

  } else {
    res.sendFile('index.html', {
      root: path.resolve('client/dist/www/pc')
    });
  }
}

export const WebRoutes = router;
