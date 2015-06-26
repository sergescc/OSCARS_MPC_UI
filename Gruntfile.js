module.exports = function(grunt) {
	//project configuration
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.initConfig({
		

		pkg: grunt.file.readJSON('package.json'),


		clean: {
			styles: {
				src: ['./app/css/lib.css']
			},
			scripts: {
				src: ['.app/js/lib.js']
			},
		},

		browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/css/*.css', 
                        '!./app/css/lib.css',
                        'app/*.html',
                        'app/js/*.js',
                        '!app/js/lib.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app',
                    port: '8000'
                }
            }
        },

		watch: {
			styles: {
				files: ['./app/css/main.css'],
				tasks: ['clean:styles', 'concat_css']
			},
			gruntEdit: {
				files: ['Gruntfile.js'],
				tasks: ['clean', 'concat', 'concat_css', 'watch']
			},
			edit:
			{
				files: ['./app/index.html','./app/css/main.css','./app/js/*.js', '!./app/js/lib.js'],
				tasks: ['reload']
			}
		},

		

		concat: {
			
			scripts: 
			{
				src: ['./app/lib/angular/angular.js', 
				'./app/lib/angular-google-maps/dist/angular-google-maps.js',
				'./app/lib/lodash/lodash.js'],
				dest: './app/js/lib.js'
			}

		},
		concat_css: {
			options: 
			{
			},
			styles:
			{

				src: [ './app/css/main.css',
				'./app/lib/angular-motion/dist/angular-motion.css'],
				dest: './app/css/lib.css'
			}

		}


	});

	grunt.registerTask('default', ['clean', 'concat', 'concat_css', 'watch']);

}
