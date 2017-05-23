var gulp = require("gulp");

/*Очистка дирректории*/
var del = require("del");

/*Переименовывание файлов*/
var rename = require("gulp-rename");

/*Синхронная обработка файлов*/
var runSequence = require("run-sequence");

/*Обработка CSS*/
var sass = require("gulp-sass");
var csscomb = require("gulp-csscomb");
var autoprefixer = require("gulp-autoprefixer");
var minify = require("gulp-cssnano");
var cmq = require("gulp-combine-mq");

/*Обработка JS*/
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

/*Обработка html*/
var fileinclude = require("gulp-file-include");
var htmlmin = require("gulp-htmlmin");

/*Работа с изображениями*/
var imagemin = require("gulp-imagemin");

/*Перезагрузка*/
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
var watch = require("gulp-watch");

/*Пути к файлам*/
var path = {
  build: {
    html:     "build/", 
    htmlmin:  "build/",
    copyFont: "build/font/", 
    csscomb:  "_html_block/", 
    css:      "build/css/", 
    img:      "build/img/", 
    js:       "build/js/" 
  },
  src: {
    html:     "src/*.html", 
    copyJS:   "src/js/**/*",
    copyFont: "src/_html_block/font/**/*", 
    img:      "src/img/**/*.{png,jpg,gif}", 
    js:       "src/_html_block/**/*.js", 
    csscomb:  "src/_html_block/**/*.scss", 
    css:      "src/_html_block/main.scss" 
  },
  watch: {
    html:     "src/**/*.html",
    css:      "src/_html_block/**/*.scss",
    js:       "src/_html_block/**/*.js",
    img:      "src/img/**/*",
    copyJS:   "src/js/**/",
    copyFont: "src/font/**/"
  },  
  clean: "build"
}
/*----------------------------Таски------------------------------*/

/*Очистка нашей конечной папки*/
gulp.task("clean:dev", function(){
  return del([path.clean]);
});
/*---------------------------------------------------------------*/

/*Копирование JS и FONT*/
gulp.task("copyJS:dev", function(){
  gulp.src(path.src.copyJS)
      .pipe(gulp.dest(path.build.js))
      .pipe(reload({stream: true}));
});
gulp.task("copyFont:dev", function(){
  gulp.src(path.src.copyFont)
      .pipe(gulp.dest(path.build.copyFont))
      .pipe(reload({stream: true}));
});
/*---------------------------------------------------------------*/

/*Причесывание css файлов (вынесено в отдельную таску, т.к. очищает исходные файлы, когда попадает в бесконечную петлю)*/
gulp.task("csscomb:dev", function(){
  gulp.src(path.src.csscomb)
      .pipe(plumber())
      .pipe(csscomb())
      .pipe(gulp.dest(path.build.csscomb));
});
/*---------------------------------------------------------------*/

/* Отслеживание изменений в стилях */
gulp.task("styles:dev", function(){
  gulp.src(path.src.css)
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ["last 2 version", "ie 10"]
      }))
      .pipe(cmq({
        beautify: false
      }))
      .pipe(gulp.dest(path.build.css))
      .pipe(rename({suffix: ".min"}))
      .pipe(minify())
      .pipe(gulp.dest(path.build.css))
      .pipe(reload({stream: true}));
});
/*---------------------------------------------------------------*/

/* Отслеживание изменений в html */
gulp.task("html:dev", function(){
  gulp.src(path.src.html)
      .pipe(plumber())
      .pipe(fileinclude({/*Сборка файла из кусков*/
        prefix: "@@"
      }))
      .pipe(gulp.dest(path.build.html))
      .pipe(rename({suffix: ".min"}))/*Создаем новые файлы с .min*/
      .pipe(htmlmin({/*Проганяем файлы через минификатор*/
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
          caseSensitive: true,
          keepClosingSlash: true
        }))
      .pipe(gulp.dest(path.build.htmlmin))/*Сохраняем файлы в отдельную папку*/
      .pipe(reload({stream: true}));
});
/*---------------------------------------------------------------*/

/* Работа с изображениями */
gulp.task("images:dev", function(){
  gulp.src(path.src.img)
      .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
      .pipe(gulp.dest(path.build.img))
      .pipe(reload({stream: true}));
});
/*---------------------------------------------------------------*/

/* Отслеживание изменений в JS + сборка в один файл */
gulp.task("scripts:dev", function(){
  gulp.src(path.src.js)
      .pipe(plumber())
      .pipe(concat("script.js"))
      .pipe(gulp.dest(path.build.js))
      .pipe(rename({ suffix: ".min"}))
      .pipe(uglify())
      .pipe(gulp.dest(path.build.js))
      .pipe(reload({stream: true}));
});
/*---------------------------------------------------------------*/

/* Настройка browserSync */
gulp.task("browserSync", function(){
  browserSync.init({
    server: {
      baseDir: path.clean
    }
  });
});
/*---------------------------------------------------------------*/

gulp.task("build", function(cb){
  
  runSequence("clean:dev", ["copyJS:dev", "copyFont:dev", "images:dev"], "html:dev", "styles:dev", "scripts:dev", "browserSync", "watch", cb);

});
gulp.task("production", function(cb){
  
  runSequence("clean:dev", ["copyJS:dev", "copyFont:dev", "images:dev"], "html:dev", "csscomb:dev", "styles:dev", "scripts:dev", "browserSync", "watch", cb);

});

gulp.task("watch", function(){

  watch([path.watch.css], function(event, cb){
    gulp.start("styles:dev");
  });

  watch([path.watch.js], function(event, cb){
    gulp.start("scripts:dev");
  });

  watch([path.watch.img], function(event, cb){
    gulp.start("images:dev");
  });

  watch([path.watch.html], function(event, cb){
    gulp.start("html:dev");
  });

  watch([path.watch.copyJS], function(event, cb){
    gulp.start("copyJS:dev");
  });

  watch([path.watch.copyFont], function(event, cb){
    gulp.start("copyFont:dev");
  });

});
