const gulp = require("gulp");
//const sourcemaps = require("gulp-sourcemaps");
//const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

// const sassOptions = {
//   outputStyle: "expanded"
// };

// compile scss into css

// function style() {
//   return gulp
//     .pipe(sourcemaps.init())
//     .pipe(sourcemaps.write())
//     .pipe(autoprefixer())
//     .pipe(gulp.dest("./css"))
//     .pipe(browserSync.stream());
// }

function watch() {
  browserSync.init({
    server: "."
  });
  gulp.watch("./css/**/*.css", browserSync.reload);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js", browserSync.reload);
}

// exports.style = style;
exports.watch = watch;