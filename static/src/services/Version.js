/*@ngInject*/
module.exports = function ($resource) {
  return $resource('/api/version', {}, {});
};
