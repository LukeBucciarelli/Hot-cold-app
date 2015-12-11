
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


	var secretNumber = 0;
    var userGuess = 0;
    var guessCount = 0;
    var finish = false;

 

 //randon # generator // 
  
  function secretNumber() {
  		secretnumber = (Math.random()*100);
  		console.log("secretnumber");
  }

  secretNumber();

//userGuess Logic // 

	function positiveamount(); 

	if (userGuess && secretNumber === 'secretnumber'){
            alert("You win great job, you must have been really bored!");

    else if (userGuess && secretnumber) > 60); {
			alert("You are super cold, where's your jacket?");
}
	else if (userGuess && secretnumber) > 50); {
			alert("still really cold!!!");
}
	else if (userGuess && secretnumber) > 40); {
			alert("sightly warm(er) but do better!");
}
	else if (userGuess && secretnumber) > 30); {
			alert("getting somewhat warm!");
}
	else if (userGuess && secretnumber) > 20); {
			alert("now i can actually take my coat off! getting warm!!");
}
	else if (userGuess && secretnumber) > 10); {
			alert("VERY WARM BUD!!");
}
	else if (userGuess && secretnumber) > 5); {
			alert("dude really warm!");			
}
	else if (userGuess && secretnumber) > 3); {
			alert("im sweasting, it/'s like I/'m doing Bikram yoga!");
}
	else if (userGuess && secretnumber) > 2); {
			alert("now Im doing Bikram yoga on the sun!!");
}

	// decreasin userguess logic // 
    
	function negativeamount(); 

	if (userGuess && secretNumber === 'secretnumber'){
            alert("You win great job, you must have been really bored!");
}
    else if (userGuess && secretnumber) < 60); {
			alert("You are super cold, where's your jacket?");
}
	else if (userGuess && secretnumber) < 50); {
			alert("still really cold!!!");
}
	else if (userGuess && secretnumber) < 40); {
			alert("sightly warm(er) but do better!");
}
	else if (userGuess && secretnumber) < 30); {
			alert("getting somewhat warm!");
}
	else if (userGuess && secretnumber) < 20); {
			alert("now i can actually take my coat off! getting warm!!");
}
	else if (userGuess && secretnumber) < 10); {
			alert("VERY WARM BUD!!");
}
	else if (userGuess && secretnumber) < 5); {
			alert("dude really warm!");			
}
	else if (userGuess && secretnumber) < 3); {
			alert("im sweasting, it/'s like I/'m doing Bikram yoga!");
}
	else if (userGuess && secretnumber) < 2); {
			alert("now Im doing Bikram yoga on the sun!!");
}

 function comparisonAmount(){
        if (userGuess - secretNumber > 0) {
            negativeAmount();
        } else {
            positiveAmount();
        }
    }

});
