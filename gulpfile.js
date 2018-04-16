const gulp = require('gulp')
const sass = require('gulp-sass')

// gulp.task('sass', () => {
//     gulp.src('src/scss/*.sass')
//         .pipe( sass().on('error', sass.logError) )
//         // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//         .pipe( gulp.dest('dist/css') )
// })

// gulp.task('html', () => {
//     gulp.src('src/html/*')
//         .pipe( gulp.dest('dist/html') )
// })

// gulp.task('default', ['sass', 'html'])

// gulp.task('watch', () => {
//     gulp.watch('src/scss/*', ['sass'])
//     gulp.watch('src/html/*', ['html'])
// })