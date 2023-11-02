
const { createProxyMiddleware } = require('http-proxy-middleware')
const fs = require('fs')
const path = require('path');

module.exports = {
  
    async getVideosFile(req, res, next) {

      // Video streamer files
      const videoFileMap = {
        'cdn': path.join(__dirname, 'videos', 'cdn.mp4'),
        'generate-pass': path.join(__dirname, 'videos', 'generate-pass.mp4'),
        'get-post': path.join(__dirname, 'videos', 'get-post.mp4'),
      };
      
    
      try{

    console.log('req.params -->', req.params.filename);
    console.log('videoFileMap -->', "HERERERE");
    const filename  = req.params.filename;
    console.log('filename -->', filename);
    const path = videoFileMap[filename];

    
  
    if(!path) {
      return res.status(404).send('File not found');
    }
  
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
  
    if(range){
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10): fileSize-1;
  
      const chunksize = (end-start)+1;
      const file = fs.createReadStream(path, {start, end});
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type':'video/mp4',
      }
      res.writeHead(206, head);
      file.pipe(res);
    }
    else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type':'video/mp4',
      }
      res.writeHead(200, head);
      fs.createReadStream(path).pipe(res);
    }
  } catch (error) {
    return next(error)
  }
  
},

// External FRONTEND PROXY ===========================================================
proxy: createProxyMiddleware({
  target: process.env.ZOOM_APP_EXTERNAL_URL,
  changeOrigin: true,
  ws: false
}),
}