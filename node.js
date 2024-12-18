var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

/*
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--- the url path can be anything
--- error types
    EACCES     - Permission denied
    EADDRINUSE - Address already in use
    ECONNRESET - Connection reset by peer
    EEXIST     - File exists
    EISDIR     - Is a directory
    EMFILE     - Too many open files in system
    ENOENT     - No such file or directory
    ENOTDIR    - Not a directory
    ENOTEMPTY  - Directory not empty
    ENOTFOUND  - DNS lookup failed
    EPERM      - Operation not permitted
    EPIPE      - Broken Pipe
    ETIMEDOUT  - Operation timed out
+---------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| terminal: npm |
+---------------+
npm init
npm install _packageName_@version
npm install -g _packageName_@version
npm update -g _packageName_
+----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| terminal: node |
+----------------+
node _nodejsFileName_.js
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| node project: main.js |
+-----------------------+
var http = require('http')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(_portNumber_);
+-------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| module: including |
+-------------------+
--- module.exports = _propertyORMethodName_
    var _moduleVarName_ = require('_moduleName_');                                                                    ===> cjs, js (sync)
--- var _customModuleVarName_ = require('_modulePath_');
--- export { _propertyORMethodName_ as _propertyORMethodNewName_, ... };
    import _dataImported_ from _module_ with { _importAttribute_: '_data_', ... };                                    ===> mjs (async)
      --- _dataImported_: (
            { _propertyORMethodName_ as _propertyORMethodNewName_, ... },
            _propertyORMethodName_,
            *
          )
      --- _module_: (
            '_modulePah_.mjs?_attributeName_=_value_&...',
            '_modulePah_.cjs?_attributeName_=_value_&...',
            '_jsonPath_.json', '_packageName_:_moduleName_,_statement_;'
          )
          --- _packageName_: (node, data)
      --- _importAttribute_: (type: 'json')
    await import(_module_, { with: { _importAttribute_: '_data_' } });
--- import._importData_
    --- meta
    --- meta.dirname
    --- meta.filename
    --- meta.url
    --- meta.resolve('_anyFilePath_')
+----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| module: create |
+----------------+
--- exports._moduleFunctionName_ = function () {
      ...
    };
+------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| module: built in |
+------------------+
| module (no need to imported)                                                             ===> to print module data
+------------------------------------------------------------------------------------------
| http
--- http.createServer(function (req, res) {...}).listen(_portNumber);
    --- res.writeHead(_statusCode_, {'Content-Type': '_fileType_'});
        --- _fileType_: text/html, application/json, text/plain
    --- res.write(_data_);
        --- _data_: _data_, JSON.stringify(_json_)
    --- res.end('_data_');
+------------------------------------------------------------------------------------------
| url
--- url.parse(req.url, true)._function_
    --- query._prameters_                                                                  ===> as `http://www.example.com/?year=gffj
        --- _parameterName_
    --- query.search                                                                       ===> as `?year=gffj`
    --- query.host
    --- query.pathname
+------------------------------------------------------------------------------------------
| fs (file server)
--- fs.readFile('_filePath_', function (error, data) {
      ...
      return res.end();
    });
--- fs.appendFile('_filePath_', '_data_', function (error) {
      ...
      throw error;
    });
--- fs.writeFile('_filePath_', '_data_', function (error) {                                  ===> replace the content of file
      ...
      throw error;
    });
--- fs.open('_filePath_', '_openType_', (error, file) {                                      ===> _openType_ as 'w+'
      ...
      throw error;
    });
--- fs.unlink('_filePath_', function (error) {
      ...
      throw error;
    });
--- fs.rename('_filePath_', '_newFileName_', function (error) {
      ...
      throw error;
    });
--- fs.createReadStream('_filePath_').on('open', function () {...});
+------------------------------------------------------------------------------------------
| events
var eventEmitter = new events.EventEmitter();
--- eventEmitter.on('_eventName_', function (_param_, ...) {...});
--- eventEmitter.emit('_eventName_', _valueParam_);                                                      ===> to run event
--- eventEmitter.once()
--- eventEmitter.off()
    eventEmitter.removeListener()
--- eventEmitter.removeAllListeners()
+------------------------------------------------------------------------------------------
| formidable
var form = new formidable.IncomingForm();                                                  ===> to accept post data
--- form.parse(req, function (error, fields, files) {...});
    --- files.filetoupload.filepath
    --- files.filetoupload.originalFilename
+------------------------------------------------------------------------------------------
| nodemailer
var transporter = nodemailer.createTransport({
  service: '_serviceName_',                                                                ===> as gmail
  auth: {
    user: '_email_',
    pass: '_password_'
  }
});
var mailOptions = {
  from: '_email_',
  to: '_email_',
  subject: '_subject',
  text: '_text_'
};
--- transporter.sendMail(mailOptions, function(error, info) {
      ...
      throw error;
    });
+------------------------------------------------------------------------------------------
| mysql
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: '_username_',
  password: '_password_',
  database: '_databaseName_',                                                              ===> if found
});
--- mysql.escape(_data_);                                                                  ===> to prevent sql injection
--- mysqlConnection.connect(function (error) {
      ...
      throw error;
    });
--- mysqlConnection.query('_sqlQuery_', _valuesList_, function (error, result, fields) {   ===> as [['John', 'Highway 71'], ...] to be replace with vars of sql query or `?`, fields is the each column properties
    --- result.affectedRows
      ...
      throw error;
    });
+------------------------------------------------------------------------------------------
| sqlite3
const sqlite3 = require('sqlite3').verbose();
const sqlite3Database = new sqlite3.Database('_filePath_.db');
const sqlite3Database = new sqlite3.Database(':memory:');                                  ===> to store in ram
sqlite3Database.serialize(() => {
  --- sqlite3Database.map('_sqlQuery_', function () {...});
  --- sqlite3Database.exec('_sqlQuery_', function () {...});
  --- sqlite3Database.run('_sqlQuery_', _valuesList_, function () {...});
  --- sqlite3Database.get('_sqlQuery_', _valuesList_, function (error, row) {...});
  --- sqlite3Database.all('_sqlQuery_', _valuesList_, function (error, rows) {...});
  --- sqlite3Database.each('_sqlQuery_', _valuesList_, function (error, row) {...});
  const sqlite3Statement = sqlite3Database.prepare('_sqlQuery', _valuesList_, function () {...});
  --- sqlite3Statement.reset(function () {...});
  --- sqlite3Statement.finalize(function () {...});
  --- sqlite3Statement.run(_valuesList_, function () {...});
  --- sqlite3Statement.get(_valuesList_, function () {...});
  --- sqlite3Statement.all(_valuesList_, function () {...});
  --- sqlite3Statement.each(_valuesList_, function () {...});
  --- sqlite3Statement.bind(_valuesList_, function () {...});
});
sqlite3Database.close();

https://www.tutorialspoint.com/sqlite
*/
