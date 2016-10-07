module.exports = function(grunt) {
	grunt.initConfig({
		env: {
			dev: {
				NODE_ENV: 'development'
			},
			test: {
				NODE_ENV: 'test'
			}
		},
		mochaTest: {
			src: 'app/tests/**/*.js',
			options: {
				reporter: 'spec'
			}
		},
		nodemon: {
			dev: {
				script: 'server.js',
				options: {
					ext: 'js,html',
					watch: ['server.js', 'config/**/*.js', 'app/**/*.js']
				}
			}
		},
		jshint: {
			all: {
				src: ['server.js', 'config/**/*.js', 'app/**/*.js', 'public/js/*.js']
			}
		},
		watch: {
			js: {
				files: ['server.js', 'config/**/*.js', 'app/**/*.js', 'public/js/*.js', 'public/modules/**/*.js'],
				tasks: ['jshint']
			}
		},
		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['env:dev', 'concurrent']);
	grunt.registerTask('test', ['env:test', 'mochaTest']);
};
