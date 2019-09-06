  
const secrets = {
    dbUri: "mongodb://heroku_x7k58sr8:6vtpthsn3covl5po9u9bpi7vqi@ds217438.mlab.com:17438/heroku_x7k58sr8"
  };
  
  const getSecret = key => secrets[key];
  
  module.exports = getSecret;