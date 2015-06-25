module.exports = function(grunt) {
	//project configuration
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-concat-css');
	

	grunt.initConfig({
		

		pkg: grunt.file.readJSON('package.json'),

		concat: {
			
			scripts: 
			{
				src: ['./app/lib/**/*.js'],
				dest: './app/js/lib.js'
			}

		},
		concat_css: {

			styles:
			{
				src: ['./app/lib/**/*.css'],
				dest: './app/css/lib.css'
			},

		}
		
	});
}
