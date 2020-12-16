const {src, dest, watch} = require('gulp');
const uglify = require('gulp-uglify-es').default; //Todos los ficheros en una linea
const rename = require('gulp-rename'); // Renombra el fichero de salida
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
//const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const purgecss = require('gulp-purgecss');
const imagemin = require('gulp-imagemin');
const gls = require('gulp-live-server');
const useref = require('gulp-useref');
const jsdoc = require('gulp-jsdoc3');
const gulpCssmin = require('gulp-cssmin');

// minificar el HTML
// minificar el CSS (genera un único fichero)
// -> meterle auto-prefixes (2 version anteriores)
// -> clean CSS -> Meter una regla en el html que no se use
// imágenes -> meter una imagen JPG 6 megas -> comprime
// gulp-live-server <- Levantaros un servidor de prueba
// useref -> Cambia los link de javascript y de los CSS -> por un bundle.min.js bundle.min.css
// jsDoc3 -> API Documentación

// autoprefixer -> gulp-autoprefixer
// cleanCSS -> gulp-clean-css
//imagemin -> gulp-imagemin
//gul-live-server -> gulp-live-server
// jsDoc -> gulp-jsdoc3
// concat -> gup-concat
// gulp-useref -> gulp-useref

function minifyJs() {
  return (
    src('src/**/*.js')
      // The gulp-uglify plugin won't update the filename
      .pipe(uglify())
      // So use gulp-rename to change the extension
      .pipe(rename('bundle.min.js'))
      .pipe(dest('dist/'))
  );
}

function minifyHtml() {
  return src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('dist/'));
}

function minifyCss() {
  return src('src/**/*.css')
    .pipe(cssmin())
    .pipe(concat('all.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('dist/style/'));
}

function autoPrefixer() {
  return src('src/**/*.css')
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(concat('all.css'))
    .pipe(dest('dist/style/'));
}

function cssPurge() {
  return src('src/**/*.css')
    .pipe(
      purgecss({
        content: ['src/**/*.html'],
      }),
    )
    .pipe(concat('allPurged.css'))
    .pipe(dest('dist/style/'));
}

function minImage() {
  return src('src/**/*.jpg').pipe(imagemin()).pipe(dest('dist/'));
}

function liveServer() {
  const server = gls.static('dist', 8888);
  server.start();
}

function useRef() {
  return src('src/*.html').pipe(useref()).pipe(dest('dist/'));
}

function docJs(cb) {
  return src('src/**/*.js').pipe(jsdoc(cb));
}

exports.autoPrefixer = docJs;
