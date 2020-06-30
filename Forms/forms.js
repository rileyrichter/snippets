// Refresh the page on form submit
Webflow.push(function() {
    $(document).on('submit', 'form', function() {
      // Refresh page after 2000 milliseconds
      setTimeout(function() { location.reload(true); }, 2000);
    });
  });

  // Pass form input values through to the success state of the form
  $('#submitButtonId').click(function() {
    let firstName = $('#firstNameField').val();
    let lastName = $('#lastNameField').val();
    $('#firstNameResult').html(firstName);
    $('#lastNameResult').html(lastName);
});