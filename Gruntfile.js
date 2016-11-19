module.exports = function (grunt) {

	grunt.initConfig({
		less: {
			dev: {
				files: {
					'dist/styles.css': 'src/styles.less'
				}
			}
		},
		watch: {
			dev: {
				files: ['src/styles.less'],
				tasks: ['less:dev']
			}
		},
		cssmin: {
			target: {
				files: {
					'dist/styles.min.css': 'dist/styles.css'
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['less:dev', 'watch:dev']);
	grunt.registerTask('production', ['less:dev', 'cssmin'])
};