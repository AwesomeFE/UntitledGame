export const messages = {
  REQUEST_INVALID: (value, type, fieldName) => ({ status: 400, message: `Request ${type} "${fieldName}" is required.`, type: 'REQUEST_INVALID' }),
  SIGNUP_INVALID: { status: 400, message: 'Username, email or mobile is required.', type: 'SIGNUP_INVALID' },
  USER_NOT_FOUND: { status: 400, message: 'The user is not existed.', type: 'USER_NOT_FOUND' },
  PASSWORD_INVALID: { status: 400, message: 'Password is invalid.', type: 'PASSWORD_INVALID' },
  AUTH_INVALID: { status: 401, message: 'Please login.', type: 'AUTH_INVALID' },
  DUNGEON_NOTFOUND: { status: 400, message: 'Dungeon is not found.', type: 'DUNGEON_NOTFOUND' },
  DUNGEON_LEVEL_NOTFOUND: { status: 400, message: 'The level of dungeon is not found.', type: 'DUNGEON_LEVEL_NOTFOUND' },

  REQUEST_SUCCESS: (data) => ({ status: 200, message: 'Request successfully.', type: 'REQUEST_SUCCESS', data })
};