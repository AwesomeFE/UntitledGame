import { Router } from 'express';
import { messages } from '../../../common/constants';
import routes from './route-config';

const router = Router();

for(const route of routes) {
  const isMiddleware = typeof route === 'function';

  if(!isMiddleware) {
    route.middleware
      ? router[route.method](route.path, route.middleware, routeHandler)
      : router[route.method](route.path, routeHandler);
  } else {
    router.use(route);
  }

  /**
   * Define Route Handler
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  async function routeHandler(req, res, next) {
    try {
      requestCheck(req, route.required);
      route.validate && await route.validate(req, res, next);
      route.handler && await route.handler(req, res, next);
    } catch(message) {
      next(message);
    }
  }

  function requestCheck(request, requiredFieldsArray = {}) {
    const checkTypes = ['body', 'query', 'params'];

    for(const checkType of checkTypes) {
      fieldCheck(checkType, request[checkType], requiredFieldsArray[checkType]);
    }
  }

  function fieldCheck(type = 'body', payload = {}, requiredFields = []) {
    for(const fieldName of requiredFields) {
      if(!payload[fieldName] && payload[fieldName] !== 0) {
        throw messages.REQUEST_INVALID`${type}${fieldName}`;
      }
    }
  }
}

export const ApiRoutes = router;
