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
		}
	})

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch')

	grunt.registerTask('default', ['less:dev', 'watch:dev']);
};