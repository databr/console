var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('dist', {'index': ['index.html', 'index.htm']}));
app.listen(process.env.PORT);
