import { User } from '../../models';
import { messages } from '../../constants';
import { removeFieldsFromProjection } from '../../utils/dataFormat';

class GetSessionUser {
  required = {};

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const { user } = req;

    const projection = user && user.projection;
    const formatedUser = user && projection && removeFieldsFromProjection(projection, user);
    res.json(messages.REQUEST_SUCCESS(formatedUser));
  }
}

export const getSessionUser = new GetSessionUser();