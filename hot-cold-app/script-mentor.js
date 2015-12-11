$(document).ready(function(){

  var secretnumber = parseInt(Math.random()*100);
  console.log(secretnumber);

  $('.js-guess-button').click(function(event) {
    event.preventDefault();
    var guessedNumber = $('.js-user-guess-number').val();
    var message = compareNumbers(guessedNumber, secretnumber); 
    console.log(message);
  });

  function compareNumbers(guessedNumber, secretNumber) {
    var message = '';

    if(guessedNumber == secretNumber) {
      message = 'spot on';
    }
    else if(guessedNumber > secretNumber) {
        if(guessedNumber - secretNumber <= 20){
            message ='hot';
        }
        else if (guessedNumber - secretNumber > 20){
            message ='cold';
        }
    }
    else {
        if(secretNumber - guessedNumber <= 20){
            message ='hot';
        }
        else if (secretNumber - guessedNumber > 20){
            message ='cold';
        }
    }
    return message;
  };

});