var localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'kkman' }, function(err, tunnel) {
  console.log('LT running')
});