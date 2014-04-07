express = require 'express'
logfmt = require 'logfmt'

app = express()

app.use logfmt.requestLogger()

app.get '/',(req, res) ->
  loadtest = require 'loadtest'
  options =
    url: 'http://agile-ridge-7948.herokuapp.com/',
    maxRequests: 1000,
    requestsPerSecond: 300
          
   loadtest.loadTest options, (error, result) ->
     return res.send 'Test failed' if error
     res.send 'Tests run successfully'

port = Number(process.env.PORT || 5000)

app.listen port, () ->
  console.log 'Listening on ' + port
