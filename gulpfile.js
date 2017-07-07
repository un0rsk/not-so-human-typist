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
		name: 'Typist',
		dist: 'dist',
		dependencies: [
			'react',
			'react-dom'
		]
	}
};

initGulpTasks(gulp, taskConfig);