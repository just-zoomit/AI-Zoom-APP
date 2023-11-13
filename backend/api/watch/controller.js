const { createProxyMiddleware } = require('http-proxy-middleware')
const fs = require('fs')
const path = require('path')

// Video streamer files
let videoFileMap

videoFileMap = {
  0: path.join(__dirname, 'videos', 'cdn.mp4'),
  1: path.join(__dirname, 'videos', 'generate-pass.mp4'),
  2: path.join(__dirname, 'videos', 'get-post.mp4'),
}

let videoFileDataMap

videoFileDataMap = [
  {
    id: 0,
    duration: '3 mins',
    name: 'CDN Sample',
  },
  {
    id: 1,
    duration: '4 mins',
    name: 'Generate Pass',
  },
  {
    id: 2,
    duration: '2 mins',
    name: 'Get Post',
  },
]

module.exports = {
  async getVideos(req, res, next) {
    try {
      res.json(videoFileDataMap)
    } catch (error) {
      return next(error)
    }
  },
  async getVideo(req, res, next) {
    try {
      const videoId = parseInt(req.params.id, 10)

      console.log('videoId -->', videoId)

      res.json(videoFileDataMap[videoId])
    } catch (error) {
      return next(error)
    }
  },
  async getAVideo(req, res, next) {
    try {
      const filename = 'videos/' + req.params.id + '.mp4'

      console.log('Filename -->', filename)

      const path = videoFileMap[filename]

      if (!path) {
        return res.status(404).send('File not found')
      }

      const stat = fs.statSync(path)
      const fileSize = stat.size
      const range = req.headers.range

      if (range) {
        const parts = range.replace(/bytes=/, '').split('-')
        const start = parseInt(parts[0], 10)
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1

        const chunksize = end - start + 1
        const file = fs.createReadStream(path, { start, end })
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4',
        }
        res.writeHead(206, head)
        file.pipe(res)
      } else {
        const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
      }
    } catch (error) {
      return next(error)
    }
  },
  async getVideosFile(req, res, next) {
    try {
      console.log('req.params -->', req.params.filename)
      const filename = req.params.filename

      console.log('Filename -->', filename)

      const path = videoFileMap[filename]

      if (!path) {
        return res.status(404).send('File not found')
      }

      const stat = fs.statSync(path)
      const fileSize = stat.size
      const range = req.headers.range

      if (range) {
        const parts = range.replace(/bytes=/, '').split('-')
        const start = parseInt(parts[0], 10)
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1

        const chunksize = end - start + 1
        const file = fs.createReadStream(path, { start, end })
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4',
        }
        res.writeHead(206, head)
        file.pipe(res)
      } else {
        const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
      }
    } catch (error) {
      return next(error)
    }
  },

  // External FRONTEND PROXY ===========================================================
  proxy: createProxyMiddleware({
    target: process.env.ZOOM_APP_EXTERNAL_URL,
    changeOrigin: true,
    ws: true,
  }),
}
