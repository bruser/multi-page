const path = require('path');
module.exports = {
  server: {
    alias:{
      "@":path.resolve(__dirname, 'src'),
      "env":path.resolve(__dirname,'env/beta.js')
    },
  },
  build:{
    beta:{
      alias:{
        "@":path.resolve(__dirname, 'src'),
        env:path.resolve(__dirname,'env/beta.js')
      },
    },
    image:{
      alias:{
        "@":path.resolve(__dirname, 'src'),
        env:path.resolve(__dirname,'env/image.js')
      }
    },
    prod:{
      alias:{
        "@":path.resolve(__dirname, 'src'),
        env:path.resolve(__dirname,'env/prod.js')
      }
    }
  }
};