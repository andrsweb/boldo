// Include necessary modules.
const {
	src,
	dest,
	series,
	parallel,
	watch
} = require( 'gulp' )

const htmlmin = require('gulp-htmlmin')
const browserSync	= require( 'browser-sync' ).create()
const concat		= require( 'gulp-concat' )
const uglify		= require( 'gulp-uglify-es' ).default
const sass			= require( 'gulp-sass' )
const autoprefixer	= require( 'gulp-autoprefixer' )
const cleancss		= require( 'gulp-clean-css' )
const sourcemaps	= require( 'gulp-sourcemaps' )
const imagemin		= require( 'gulp-imagemin' )
const newer			= require( 'gulp-newer' )
const del			= require( 'del' )

const rollup		= require( 'gulp-better-rollup' )
const babel			= require( 'rollup-plugin-babel' )
const resolve		= require( 'rollup-plugin-node-resolve' )
const commonjs		= require( 'rollup-plugin-commonjs' )

// BrowserSync initialization.
function browsersync(){
	browserSync.init( {
		server: { baseDir: 'app/' },    // Use app/ directory as base.
		notify	: false,				// Remove browser pop-up notification.
		online	: true					// Enable external address.
	} )
}

// Process scripts.
function scripts(){
	return src( ['app/js/main.js'] )		// Get main js file to process it.
		.pipe( sourcemaps.init( {loadMaps: true} ) )								// Initialize source maps and load existing.
		.pipe( rollup(
			{
				plugins: [
					babel(),
					resolve(),
					commonjs()
				]
			}, 'umd'
		) )
		.pipe( concat( 'main.min.js' ) )	// Conact in one file main.min.js.
		.pipe( sourcemaps.write( '.' ) )	// Write source maps.
		.pipe( dest( 'app/js/' ) )			// Output.
		.pipe( browserSync.stream() )		// Trigger browserSync.
}

// Scripts bundle build version.
function buildScripts(){
	return src( ['app/js/main.js'] )		// Get main js file to process it.
		.pipe( rollup(
			{
				plugins: [
					babel(),
					resolve(),
					commonjs()
				]
			}, 'umd'
		) )
		.pipe( concat( 'main.min.js' ) )	// Conact in one file main.min.js.
		.pipe( uglify() )					// Minify.
		.pipe( dest( 'app/js/' ) )			// Output.
}

// Process styles (SCSS).
function styles(){
	return src( ['app/scss/main.scss'] )				// Get only main.scss file (you must add all includes inside it).
		.pipe( sourcemaps.init( {loadMaps: true} ) )											// Initialize source maps and load existing.
		.pipe( sass() )									// Process.
		.pipe( concat( 'main.min.css' ) )				// Concat in one file main.min.css.
		.pipe( autoprefixer( {
			overrideBrowserslist: ['last 10 versions']
		} ) )											// Add prefixes.
		.pipe( sourcemaps.write( '.' ) )				// Write source maps.
		.pipe( dest( 'app/css/' ) )						// Output.
		.pipe( browserSync.stream() )					// Trigger browserSync.
}

// Styles bundle build version.
function buildStyles(){
	return src( ['app/scss/main.scss'] )				// Get only main.scss file (you must add all includes inside it).
		.pipe( sass() )									// Process.
		.pipe( concat( 'main.min.css' ) )				// Concat in one file main.min.css.
		.pipe( autoprefixer( {
			overrideBrowserslist: ['last 10 versions']
		} ) )											// Add prefixes.
		.pipe( cleancss( ( {
			level: {
				1: {
					specialComments: 0
				}
			}
		} ) ) )											// One-line minify.
		.pipe( dest( 'app/css/' ) )						// Output.
}

// Minify images.
function images(){
	return src( 'app/img/src/**/*' )		// Get all files from app/img/src/ directory.
		.pipe( newer( 'app/img/dest' ) )	// Only new images (not in dest/ directory).
		.pipe( imagemin() )					// Minimize.
		.pipe( dest( 'app/img/dest/' ) )	// Output.
}

// Clean directory.
function cleanDist(){
	return del( 'dist/**/*' )
}

// Watch all necessary files.
function startwatch(){
	watch( 'app/scss/**/*', styles )
	watch( ['app/**/*.js', '!app/**/*.min.js'], scripts );
	watch( '**/*.html' ).on( 'change', function() {
		browserSync.reload()
	}  )
	watch( 'app/img/src/**/*', images )
}

function buildcopy() {
    return src(
        [
            'app/css/**/*.min.css',
            'app/js/**/*.min.js',
            'app/img/dest/**/*',
            'app/**/*.html'
        ],
        { base: 'app' }
    )
    .pipe( dest( 'dist' ) )
}

// Export all functions to run by default or single.
exports.browsersync		= browsersync
exports.scripts			= scripts
exports.buildScripts	= buildScripts
exports.styles			= styles
exports.buildStyles		= buildStyles
exports.images			= images
exports.cleanDist		= cleanDist


// Use 'gulp' command to run them all parallel.
exports.default = parallel( scripts, styles, images, browsersync, startwatch )

// Use 'gulp build' command to run build for production (destination files are the same).
exports.build = series( cleanDist, buildScripts, buildStyles, images, buildcopy )