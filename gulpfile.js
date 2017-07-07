var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

/**
 * Tasks are added by the react-component-gulp-tasks package
 *
 * See https://github.com/JedWatson/react-component-gulp-tasks
 * for documentation.
 *
 * You can also add your own additional gulp tasks if you like.
 */

var taskConfig = {
	component: {
		src: 'src/lib',
		file: 'Typist.js',
		name: 'Typist',
		dist: 'lib',
		dependencies: [
			'react',
			'react-dom'
		],
		lib: 'lib'
	}
};

initGulpTasks(gulp, taskConfig);