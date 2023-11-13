const { Router } = require('express')
const router = Router()
const controller = require('./controller')

router
  .use('/proxy/*', controller.proxy)
  .use('/sockjs-node', controller.proxy)
  .get('/player', controller.getVideos)
  .get('/video/:id/data', controller.getVideo)
  .get('/video/:id', controller.getAVideo)
  .get('/:filename', controller.getVideosFile)

module.exports = router
