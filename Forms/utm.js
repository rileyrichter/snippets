const queryForm = function (settings) {
  let reset = settings && settings.reset ? settings.reset : false;
  let self = window.location.toString();
  let querystring = self.split("?");
  if (querystring.length > 1) {
    let pairs = querystring[1].split("&");
    pairs.forEach(function (pairs) {
      let keyval = pairs.split("=");
      if (reset || sessionStorage.getItem(keyval) === null) {
        sessionStorage.setItem(keyval, decodeURIComponent(keyval));
      }
    });
  }
  let hiddenFields = document.querySelectorAll(
    "input[type=hidden], input[type=text]"
  );
  hiddenFields.forEach(function (field) {
    let name = field.name;
    let param = sessionStorage.getItem(name);
    if (param) document.getElementById(name).value = param;
  });
};
setTimeout(function () {
  queryForm();
}, 3000);
