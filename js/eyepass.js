$("#mail_form").submit(function (event) {
  event.preventDefault(); //prevent default action
  show__success_message();
});

function show__success_message_prev(event) {
  //	event.preventDefault();
  $('#btn__form-submit').prop('disabled', true);
  $('#btn__form-submit span').text('... processing');

  var post_url = '/submit.php'; //get form action url
  var request_method = 'POST'; //get form GET/POST method
  var form_data = $("#mail_form").serialize(); //Encode form elements for submission
  $.get({
    url: post_url,
    type: request_method,
    data: form_data
  }).done(function (response) { //
    let error_block = document.getElementsByClassName("js-errorbox-all t-form__errorbox-wrapper")[0];
    let success_block = document.getElementById('success__div');
    error_block.style.display == 'none' && (success_block.style.display = "");
  });
}