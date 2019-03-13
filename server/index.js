var express = require('express');

var proxy = require('http-proxy-middleware');

var path = require('path')
var app = express();
// app.use('/static', express.static('static'));
// app.use('/assets', express.static('assets'));
app.use('/', express.static(__dirname + '/dist'));


function onProxyRes(proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
}

app.use('/api', proxy({
		target: 'http://api.zhuishushenqi.com/',
		pathRewrite: {'^/api' : '/'}, 
		changeOrigin: true,
		onProxyRes: onProxyRes
	}
));

app.use('/chapter', proxy({
		target: 'http://chapter2.zhuishushenqi.com/',
		pathRewrite: {'^/chapter' : '/chapter'},
		changeOrigin: true,
		onProxyRes: onProxyRes
	}
));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.listen(2266);