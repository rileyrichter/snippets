// run in console to find LSEP

$("body")
  .children()
  .each(function () {
    $(this).html(
      $(this)
        .html()
        .replace(/\u2028/g, "<span style='background:red'>LSEP</span>")
    );
  });
