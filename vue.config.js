module.exports = {
    transpileDependencies: [
      /\bvue-awesome\b/
    ],
    configureWebpack: {
        resolve: {
            transformToRequire: {
                'img': 'src',
                'image': 'xlink:href',
                'b-img': 'src',
                'b-img-lazy': ['src', 'blank-src'],
                'b-card': 'img-src',
                'b-card-img': 'img-src',
                'b-carousel-slide': 'img-src',
                'b-embed': 'src'
            }
        }
    }
  }