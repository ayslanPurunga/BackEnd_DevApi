const bcrypt = require('bcryptjs');

const hashOne = bcrypt.hashSync('one', 8);
const hashTwo = bcrypt.hashSync('two', 8);

module.exports = [{
    name: "minhoca",
    email: "minhoca@gmail.com",
    password: hashOne
  },{
    name: "Mario",
    email: "mario@gmail.com",
    password: hashTwo
  }]