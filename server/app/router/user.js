'use strict';

module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);
  router.get('/user/register', controller.user.register);
  router.post('/user/login', controller.user.login);
  router.get('/user/list', controller.user.list);
  router.post('/user/del', controller.user.del);
};
