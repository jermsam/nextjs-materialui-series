
const path = require('path');
const withOptimizedImages = require('next-optimized-images');

module.exports=withOptimizedImages({

    /* config for next-optimized-images */
  imageTrace: {
    color: "#fafa"
  },


    webpack: (config)=>{

        config.resolve.modules.push(path.resolve('./'))

        return config;
    }
    
})