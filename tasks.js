// tasks.js

document.addEventListener('DOMContentLoaded', function() {

  var btns = document.querySelectorAll('.fbtn');
  var tasks = document.querySelectorAll('.tbox');
  var headings = document.querySelectorAll('.sectitle');

  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {

      btns.forEach(function(b) { b.classList.remove('on'); });
      this.classList.add('on');

      var filter = this.getAttribute('data-filter');

      tasks.forEach(function(t) {
        if (filter === 'all' || t.getAttribute('data-cat') === filter) {
          t.style.display = '';
        } else {
          t.style.display = 'none';
        }
      });

      headings.forEach(function(h) {
        if (filter === 'all') {
          h.style.display = '';
        } else {
          var next = h.nextElementSibling;
          var found = false;
          while (next && !next.classList.contains('sectitle')) {
            if (next.classList.contains('tbox') && next.style.display !== 'none') {
              found = true;
              break;
            }
            next = next.nextElementSibling;
          }
          h.style.display = found ? '' : 'none';
        }
      });

    });
  });

  if (window.location.hash) {
    var target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(function() {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }

});
