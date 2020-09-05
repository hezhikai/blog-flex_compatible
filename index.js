window.onload = function () {
  refresh();
  window.addEventListener('hashchange', refresh);

  function refresh() {
    var currentUrl = location.hash.slice(1) || '/';
    if (currentUrl === '/') {
      $('#content').html('<div></div>');
    } else {
      $('#content').attr('class', currentUrl);
      $('#content').load('src/' + currentUrl + '/index.html');
    }
  }
};
