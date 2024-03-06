const mix = require('laravel-mix');
const path = require('path');

const PROJECT_FOLDER = path.basename(process.cwd());
const THEME_PATH = 'htdocs/content/themes/meat-theme';
const THEME_ASSETS_PATH = 'htdocs/content/themes/meat-theme/dist';

mix
  .setResourceRoot('../')
  .setPublicPath(THEME_ASSETS_PATH)
  .js('resources/js/app.js', 'js').vue({ version: 2 })
  .sass('resources/scss/app.scss', 'css')
  .extract()
  .version()
  .copy('resources/images', `${THEME_ASSETS_PATH}/images`)
  .browserSync({
    proxy: process.env.BROWSERSYNC_PROXY_URL || 'localhost:8080',
    files: [
      `${THEME_PATH}/resources/views/**/*.php`,
      `${THEME_ASSETS_PATH}/js/**/*.js`,
      `${THEME_ASSETS_PATH}/css/**/*.css`,
    ],
    host: '127.0.0.1',
    port: 3000,
    open: false,
    watchOptions: {
      usePolling: true,
      interval: 150,
    },
  })
  .disableNotifications()
  .autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
    axios: ['axios'],
    vue: ['Vue'],
  })
  .webpackConfig({
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'resources/js'),
      },
    },
  })
  .options({
    processCssUrls: false,
    silenceSuccess: true,
    clearConsole: false,
  })
  .then((stats) => {
    console.log(Object.keys(stats.compilation.assets));
  });
