// See https://github.com/jaywcjlove/webpack-api-mocker

const auth = require('./auth');
const problems = require('./problems');
const statistic = require('./statistic');
const user = require('./user');

module.exports = {
  ...auth,
  ...user,
  ...statistic,
  ...problems
}
