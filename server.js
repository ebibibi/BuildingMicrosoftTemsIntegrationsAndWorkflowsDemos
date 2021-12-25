var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');

app.use(morgan('dev'));
app.use(express.static('web'));

// 要求があった場合にindex.htmlで応答するように設定する
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// TCPポート3007番を利用する
var port = 3007;

// サーバーを開始する
app.listen(port);
console.log(`Listening on port ${port}...`);
console.log('Press CTRL+C to stop the web server...');
