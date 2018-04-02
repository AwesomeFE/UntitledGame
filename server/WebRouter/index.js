import path from 'path';
import express from 'express';
import UA from 'ua-parser-js';
import * as strings from '../Constants';

const router = express.Router();

// router.get('/admin/*', adminHandler);
router.get('/game/*', gameHandler);
router.get('/*', userHandler);

function userHandler(req, res, next) {
  const ua = new UA(req.headers['user-agent']);

  if(['mobile', 'tablet'].indexOf(ua.getDevice().type) !== -1) {
    res.sendFile('index.html', {
      root: path.join(__dirname, '../../client/dist/mobile/')
    });

  } else {
    res.sendFile('index.html', {
      root: path.join(__dirname, '../../client/dist/pc/')
    });
  }
}

function gameHandler(req, res, next) {
  const ua = new UA(req.headers['user-agent']);

  if(['mobile', 'tablet'].indexOf(ua.getDevice().type) !== -1) {
    res.sendFile('index.html', {
      root: path.join(__dirname, '../../client/dist/mobile-game/')
    });

  } else {
    res.json({
      end: 'end'
    });
    // res.sendFile('index.html', {
    //   root: path.join(__dirname, '../../client/dist/pc-game/')
    // });
  }
}

// function adminHandler(req, res, next) {
//   res.sendFile(path.join(__dirname, '../../client/dist/dashboard.html'));
// }

export default router;
