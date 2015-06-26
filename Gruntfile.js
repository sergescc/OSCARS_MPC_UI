module.exports = function(grunt) {
	//project configuration
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.initConfig({
		

		pkg: grunt.file.readJSON('package.json'),


		clean: {
			styles: {
				src: ['./app/css/lib.css']
			},
			libScripts: {
				src: ['.app/js/lib.js']
			},
			localScripts: {
				src: ['app/js/local.js']
			}
		},

		browserSync: {
            dev: {
                files: {
                    src : [
                        'app/css/*.css', 
                        '!./app/css/lib.css',
                        'app/*.html',
                        'app/src/*.html',
                        'app/js/*.js',
                        '!app/js/lib.js'
                    ]
                }
            }
  
        },

		watch: {
			styles: {
				files: ['./app/css/main.css'],
				tasks: ['clean:styles', 'concat_css']
			},
			localScripts:
			{
				files: ['app/js/*.js', 
						'!app/js/lib.js', 
						'!app/js/local.js'],
				tasks: ['clean:localScripts', 'concat:localScripts']
			},
			gruntEdit: {
				files: ['Gruntfile.js'],
				tasks: ['clean', 'concat', 'concat_css', 'watch']
			}

		},

		

		concat: {
			
			localScripts:
			{
				src: [	'app/js/MapApp.js',
						'app/js/OSCARS_MPC_UI.js',
						'!app/js/lib.js', 
						'!app/js/local.js'],
				dest: 'app/js/local.js'
			},
			libScripts: 
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

	grunt.registerTask('default', ['clean', 'concat', 'concat_css', 'watch', 'browserSync']);

	
}
