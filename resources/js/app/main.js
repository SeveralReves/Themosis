/**
 * We'll load Bootstrap plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = require('popper.js').default;
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

const TOKEN = document.head.querySelector('meta[name="csrf-token"]');

if (TOKEN) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = TOKEN.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * We'll load custom plugins for our javascript project.
 */


window.slick = require('slick-carousel');
window.swal = require('sweetalert');

import Headroom from "headroom.js";


$(document).ready(() => {
  const header = document.querySelector(".header__default");
  const headroom = new Headroom(header, {
    offset: {
      up: 50,
      down: 50,
    },
  });
  headroom.init();
});
