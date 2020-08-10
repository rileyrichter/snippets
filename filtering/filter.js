// Filter through items
$(document).ready(function () {
  $("#wrapperid").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $(".classToFilter").filter(function () {
      $(this)
        .parent()
        .toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
$(document).on("keyup", "#inputIdOfSearch", function (e) {
  if (e.keyCode == 13) {
    $("input").blur();
    Foundation.libs.topbar.toggle();
  }
});
