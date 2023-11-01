'use strict'

require('./config')

const http = require('http')
const express = require('express')
const fs = require('fs')
const morgan = require('morgan')

const middleware = require('./middleware')

const zoomAppRouter = require('./api/zoomapp/router')
const zoomRouter = require('./api/zoom/router')
const videoStreamerRouter = require('./api/watch/router')
const thirdPartyOAuthRouter = require('./api/thirdpartyauth/router')
// Create app
const app = express()

// Video streamer files
const videoFileMap={
  'cdn':'videos/cdn.mp4',
  'generate-pass':'videos/generate-pass.mp4',
  'get-post':'videos/get-post.mp4',
}

// Set view engine (for system browser error pages)
app.set('view engine', 'pug')

// Set static file directory (for system browser error pages)
app.use('/', express.static('public'))

// Set universal middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(middleware.session)
app.use(middleware.setResponseHeaders)

// Zoom App routes
app.use('/api/zoomapp', zoomAppRouter)
if (
  process.env.AUTH0_CLIENT_ID &&
  process.env.AUTH0_CLIENT_SECRET &&
  process.env.AUTH0_ISSUER_BASE_URL
) {
  app.use('/api/auth0', thirdPartyOAuthRouter)
} else {
  console.log('Please add Auth0 env variables to enable the /auth0 route')
}

app.use('/zoom', zoomRouter)

// app.use('/videos/:filename', videoStreamerRouter)

app.get('/videos/:filename', (req, res)=> {
  
  console.log('req.params -->', req.params.filename);
  console.log('videoFileMap -->', "HERERERE");

  const filename  = req.params.filename;
  console.log('filename -->', filename);
  
  const filePath = videoFileMap[filename]

  if(!filePath){
      return res.status(404).send('File not found')
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if(range){
      const parts = range.replace(/bytes=/, '').split('-')
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      const chunksize = end - start + 1;
      const file = fs.createReadStream(filePath, {start, end});
      const head = {
          'Content-Range': `bytes ${start} - ${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
      };
      res.writeHead(206, head);
      file.pipe(res);
  }
  else{
      const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4'
      };
      res.writeHead(200, head);
      fs.createReadStream(filePath).pipe(res)
  }
})


app.get('/hello', (req, res) => {
  res.send('Hello Zoom Apps!')
})

// Handle 404
app.use((req, res, next) => {
  const error = new Error('Not found here')
  error.status = 404
  next(error)
})

// Handle errors (system browser only)
app.use((error, req, res) => {
  res.status(error.status || 500)
  res.render('error', {
    title: 'Error',
    message: error.message,
    stack: error.stack,
  })
})

// Start express server
http.createServer(app).listen(process.env.PORT, () => {
  console.log('Zoom App is listening on port', process.env.PORT)
})
