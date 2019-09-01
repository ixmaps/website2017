module.exports = function( grunt ) {
	'use strict';

	grunt.initConfig({
		dirs: {
			bower: 'bower_components',
			css: '../css',
			images: '../img',
			js: '../js',
			src: {
				sass: '../__src/sass',
				css: '../__src/css',
				images: '../__src/img',
				js: '../__src/js',
				sui: '../__src/semantic-ui'
			}
		},

		// Compile all .scss files
		sass: {
			compile: {
				options: {
					sourceMap: false,
					indentType: 'tab',
					indentWidth: 1,
					outputStyle: 'expanded',
			        includePaths: require('node-neat').includePaths
				},
				files: [{
					expand: true,
					cwd: '<%= dirs.src.sass %>/',
					src: [ '*.scss', '!_*.scss' ],
					dest: '<%= dirs.css %>/',
					ext: '.css'
				}]
			}
		},

		// Run PostCSS on all .css files
		postcss: {
			options: {
				map: false,
				processors: [
					require('autoprefixer')
				]
			},
			css: {
				expand: true,
				cwd: '<%= dirs.css %>/',
				src: [ '*.css', '!*.min.css' ],
				dest: '<%= dirs.css %>/',
			}
		},

		// Minify all .css files
		cssmin: {
			minify: {
				expand: true,
				cwd: '<%= dirs.css %>/',
				src: [ '*.css', '!*.min.css' ],
				dest: '<%= dirs.css %>/',
				ext: '.min.css'
			}
		},

		// Minify .js files
		uglify: {
			options: {
				preserveComments: /^!|@preserve/i
			},
			jsfiles: {
				files: [{
					expand: true,
					cwd: '<%= dirs.src.js %>/',
					src: [
						'*.js',
						'!*.min.js'
					],
					dest: '<%= dirs.js %>/',
					ext: '.min.js'
				}]
			}
		},

		// Watch for changes to assets
		watch: {
			sass: {
				files: [
					'<%= dirs.src.sass %>/*.scss'
				],
				tasks: [ 'sass', 'postcss', 'cssmin', ]
			},
			js: {
				files: [
					'<%= dirs.src.js %>/*.js',
					'!<%= dirs.src.js %>/*.min.js'
				],
				tasks: [ 'copy:srcjs', 'uglify' ]
			},
			images: {
				files: [ '<%= dirs.src.images %>/**' ],
				tasks: [ 'imagemin' ]
			}
		},

		// Copy dependencies to appropriate directories
		copy: {
			gatherjs: {
				expand: true,
				src: [
					'<%= dirs.bower %>/jquery/dist/jquery.js',
					'<%= dirs.bower %>/jquery/dist/jquery.min.js'
				],
				dest: '<%= dirs.js %>',
				flatten: true
			},
			gathercss: {
				expand: true,
				src: [ '<%= dirs.src.css %>/**.css' ],
				dest: '<%= dirs.css %>',
				flatten: true
			},
			gathersemanticui: {
				expand: true,
				src: [ '<%= dirs.src.sui %>/img/flags.png' ],
				dest: '<%= dirs.images %>/',
				flatten: true
			},
			srcjs: {
				expand: true,
				src: [
					'<%= dirs.src.js %>/**.js',
				],
				dest: '<%= dirs.js %>',
				flatten: true
			}
		},

		// Optimize image assets
		imagemin: {
			default: {
				options: {
					optimizationLevel: 3,
					progressive: false,
					svgoPlugins: [{
						removeTitle: true,
						removeDesc: true,
						removeDimensions: true,
					}]
				},
				files: [{
					expand: true,
					cwd: '<%= dirs.src.images %>/',
					src: ['**/*.{png,jpg,gif}'],
					dest: '<%= dirs.images %>/'
				}]
			}
		},

		modernizr: {
			options: {
				'crawl': false,
				'customTests': [],
				'tests': [
					'bgsizecover',
					'csscalc',
					'flexbox',
					'flexboxlegacy',
					'flexboxtweener',
					'srcset'
				],
				'options': [
					'setClasses'
				],
			},
			prod: {
				'dest': '<%= dirs.js %>/modernizr-custom.min.js',
				'uglify': true
			},
			dev: {
				'dest': '<%= dirs.js %>/modernizr-custom.js',
				'uglify': false
			}
		},

		php: {
			watch: {
				options: {
					open: false,
					base: '../../',
				}
			}
		}

	});

	// Load NPM tasks to be used here
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-modernizr' );
	grunt.loadNpmTasks( 'grunt-php' );
	grunt.loadNpmTasks( 'grunt-postcss' );
	grunt.loadNpmTasks( 'grunt-sass' );

	// Register tasks
	grunt.registerTask( 'default', [
		'sass',
		'postcss',
		'cssmin',
		'uglify',
		'imagemin',
		'copy',
		'modernizr'
	]);
	grunt.registerTask( 'build', [
		'sass',
		'postcss',
		'cssmin',
		'uglify',
		'imagemin'
	]);

	grunt.registerTask('phpwatch', ['php:watch', 'watch']);

};
