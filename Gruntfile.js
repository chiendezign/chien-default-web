module.exports = function(grunt) {
	// Do grunt-related things in here
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'public/js/dis/script.min.js': ['public/js/src/*.js']
				}
			}
		},

		sass: {          
		    dist: {
		      	options: { 
		        	style: 'compressed'
		      	},
		      	files: {
			        'public/css/style.css': 'public/scss/style.scss'
		      	}
		    }
		 },
		watch: {
			scripts: {
				files: ['public/js/src/*.js'],
				tasks: ['uglify']
			},
			css: {
				files: ['public/scss/*.scss'],
				tasks: ['sass']
			}
		},

	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['watch']);

};