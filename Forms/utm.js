const queryForm = function (settings) {
  let reset = settings && settings.reset ? settings.reset : false;
  let self = window.location.toString();
  let querystring = self.split("?");
  if (querystring.length > 1) {
    let pairs = querystring[1].split("&");
    for (i in pairs) {
      let keyval = pairs[i].split("=");
      if (reset || sessionStorage.getItem(keyval[0]) === null) {
        sessionStorage.setItem(keyval[0], decodeURIComponent(keyval[1]));
      }
    }
  }
  let hiddenFields = document.querySelectorAll(
    "input[type=hidden], input[type=text]"
  );

  hiddenFields.forEach(function (field) {
    let name = field.name;
    let param = sessionStorage.getItem(name);
    document.getElementById(name).value = param;
    console.log(param);
    // if (param) document.getElementsByName(name).value = param;
  });
};
setTimeout(function () {
  queryForm();
}, 3000);
