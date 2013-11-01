var http = require('http');
require('../index');


before(function (cb) {
    this.server = http.createServer(function (req, res) {
       res.writeHead(200);
       res.end();
    });
    this.server.listen(cb);
});


after(function (cb) {
    this.server.close(cb);
});


test('get /', function (t) {
    var opts = {
        agent: false,
        hostname: '127.0.0.1',
        port: this.server.address().port,
        path: '/'
    };
    http.get(opts, function (res) {
        t.ok(res);
        t.equal(res.statusCode, 200);
        t.end();
    });
});
