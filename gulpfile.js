const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

const paths = {
  dest: {
    lib: 'lib', // commonjs 文件存放的目录名
    esm: 'esm' // ES module 文件存放的目录名
  },
  // styles: ['src/**/*.scss', '!src/**/demo/*.scss'], // 样式文件路径
  scripts: ['src/**/*.{ts,tsx}', '!src/**/demo/*.{ts,tsx}'] // 脚本文件路径
};

/**
 * 编译脚本文件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 */
function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;
  // 设置环境变量
  process.env.BABEL_ENV = babelEnv;
  return gulp
    .src(scripts)
    .pipe(babel()) // 使用gulp-babel处理
    .pipe(gulp.dest(destDir));
}

/**
 * 编译cjs
 */
function compileCJS() {
  const { dest } = paths;
  return compileScripts('cjs', dest.lib);
}

/**
 * 编译esm
 */
function compileESM() {
  const { dest } = paths;
  return compileScripts('esm', dest.esm);
}

/**
 * 拷贝Scss文件
 */
// function copyScss() {
//   return gulp
//     .src(paths.styles)
//     .pipe(gulp.dest(paths.dest.lib))
//     .pipe(gulp.dest(paths.dest.esm));
// }

/**
 * 生成css文件
 */
function Scss2css() {
  return gulp
    .src('src/styles/index.scss')
    .pipe(sass().on('error', sass.logError)) // 处理scss文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
}

// 串行执行编译脚本任务（cjs,esm） 避免环境变量影响
const buildScripts = gulp.series(compileCJS, compileESM);

// 整体并行执行任务
const build = gulp.parallel(buildScripts, Scss2css);

exports.build = build;

exports.default = build;
