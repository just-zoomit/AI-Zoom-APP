const { Router } = require('express')
const router = Router()
const controller = require('./controller')
router
  .use('/proxy', controller.proxy)
  .use('/sockjs-node', controller.proxy)
  .get('/:filename', controller.getVideosFile)

  
  

  module.exports = router;