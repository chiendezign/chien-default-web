module.exports = function(grunt) {
	// Do grunt-related things in here
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'public/dist/script.min.js': ['public/src/*.js']
				}
			}
		},

		sass: {          
		    dist: {
		      	options: { 
		        	style: 'expanded'
		      	},
		      	files: {
			        'public/scs/style.css': 'public/scss/style.scss'
		      	}
		    }
		 },
		watch: {
			scripts: {
				files: ['public/js/src/*.js'],
				tasks: ['uglify']
			},
			css: {
				files: ['public/scss/*.css'],
				tasks: ['cssmin']
			}
		},

	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['watch']);

};