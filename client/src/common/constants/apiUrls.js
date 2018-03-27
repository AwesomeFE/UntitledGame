export const apiUrls = {
  SIGNIN: (data, params) => ({
    method: 'post',
    url: '/api/user/signin',
    data
  }),
  SIGNUP: (data, params) => ({
    method: 'post',
    url: '/api/user/signup',
    data
  }),
  GET_USER: (data, params) => ({
    method: 'get',
    url: '/api/user'
  })
};