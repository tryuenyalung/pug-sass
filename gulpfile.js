const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const imagemin = require('gulp-imagemin')

gulp.task('sass', () => {
    gulp.src(['src/scss/*.sass', 'src/scss/*.scss'])
        // .pipe( sass().on('error', sass.logError) )
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe( gulp.dest('dist/assets/css') )
})


gulp.task('pug', () => {
    gulp.src('src/pug/layout/*')
        .pipe(pug({
            pretty: true
        }))
        .pipe( gulp.dest('dist') )
})

gulp.task('js', () => {
    gulp.src('src/js/*')
        .pipe( gulp.dest('dist/assets/js') )
})


gulp.task('imagemin', ()=>{
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe( gulp.dest('dist/assets/images'))
})

gulp.task('default', ['js','sass', 'pug', 'imagemin'] )


// gulp.task('watch', () => {
//     gulp.watch('src/scss/*', ['sass'])
//     gulp.watch('src/html/*', ['html'])
// })