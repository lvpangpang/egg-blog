'use strict';

module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/menu/list', controller.menu.list);
};
