module.exports = function(grunt) {
  
  grunt.initConfig({
    nodewebkit: {
      options: {
        build_dir: './build', // Where the build version of my node-webkit app is saved
        credits: './app/credits.html',
        mac: true,
        win: true,
        linux32: true,
        linux64: true
      },
      src: './app/**' // Your node-webkit app
    },
  
    compress: { 
      mac: {
        options: {
          archive: 'releases/CarbonWallet-1.1-Mac.tgz',
        },
        files: [ 
          { 
            expand: true,
            src: '**', 
            cwd: 'build/releases/carbonwallet/mac/', 
          }
        ]
      },
      lin32: {
        options: {
          archive: 'releases/CarbonWallet-1.1-Linux32.tgz',
        },
        files: [ 
          { 
            expand: true,
            src: '**', 
            cwd: 'build/releases/carbonwallet/linux32/', 
          }
        ]
      },
      lin64: {
        options: {
          archive: 'releases/CarbonWallet-1.1-Linux64.tgz',
        },
        files: [ 
          { 
            expand: true,
            src: '**', 
            cwd: 'build/releases/carbonwallet/linux64/', 
          }
        ]
      },
      win: {
        options: {
          archive: 'releases/CarbonWallet-1.1-Win.zip',
        },
        files: [ 
          { 
            expand: true,
            src: '**', 
            cwd: 'build/releases/carbonwallet/win/', 
          }
        ]
      }
    },
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.registerTask('default', ['nodewebkit', 'compress']);
  
};