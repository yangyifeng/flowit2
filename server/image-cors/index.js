const http = require('http')
const https = require('https')
const url = require('url')

const port = 9000

http.createServer((req, res) => {
  const urlObj = url.parse(req.url, true)
  console.log(JSON.stringify(urlObj, null, 2), '\n')

  if (urlObj.query.url && urlObj.query.url.startsWith('http')) {
    const distObj = url.parse(urlObj.query.url)
    const client = distObj.protocol === 'https:' ? https : http

    var newReq = client.request(urlObj.query.url, function (newRes) {
      var headers = newRes.headers
      // console.log(headers)
      if (headers['content-type'].startsWith('image')) {
        headers['Access-Control-Allow-Origin'] = '*'
        res.writeHead(newRes.statusCode, headers)
        newRes.pipe(res)
      } else {
        res.end('empty')
      }
    }).on('error', (err) => {
      res.statusCode = 500
      console.log('request fail: ', err)
      res.end('error')
    })

    // newReq.end()
    req.pipe(newReq)
  } else {
    res.end('empty')
  }
}).listen(port, () => {
  console.log('listen on port ', port)
})
