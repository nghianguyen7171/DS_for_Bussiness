const liveServer = require('live-server');
const path = require('path');

const params = {
  port: 8080,
  host: '0.0.0.0',
  root: path.join(__dirname, 'docs'),
  open: true,
  file: 'index.html',
  wait: 1000,
  logLevel: 2
};

console.log('🚀 Starting development server...');
console.log(`📂 Serving: ${params.root}`);
console.log(`🌐 URL: http://localhost:${params.port}\n`);

liveServer.start(params);

