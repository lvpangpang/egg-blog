const crypto = require('crypto');

const SECRET_KEY = '123456';

function md5(conetnt) {
  let md5 = crypto.createHash('md5');
  return md5.update(conetnt).digest('hex');
}

function sha1(conetnt) {
  let sha1 = crypto.createHash('sha1');
  return sha1.update(conetnt).digest('hex');
}

function genPassword(password) {
  const str = `password=${password}&key=${SECRET_KEY}`;
  return sha1(md5(str));
}

module.exports = {
  genPassword
};
