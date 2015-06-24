module.exports = function(grunt) {
	//project configuration
	grunt.loadNpmTasks('grunt-contrib-concat');
	

	grunt.initConfig({
		

		pkg: grunt.file.readJSON('package.json'),

		concat: {
			
			scripts: 
			{
				src: ['./app/lib/**/*.js'],
				dest: './app/js/lib.js'
			},

		}
		
	});
}
