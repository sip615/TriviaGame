$('document').ready(function() {
    console.log( "ready!" );
    $("#correctAnswers").hide();

//declare a function that calculates the score upon submission of the trivai form. Not a very scalable peice of code. I plan on reworking this to make it more scalable in the future.    
    function showResults(){
        var q1 = $("input[name='question1']:checked").val();
        var q2 = $("input[name='question2']:checked").val();
        var q3 = $("input[name='question3']:checked").val();
        var correct = 0;
        var incorrect = 0;
            if(q1 === "Brasília"){
                correct++;
            }else{
                incorrect++;
                console.log(q1);
            };
            if(q2 === "Spain"){
                correct++;
            }else{
                incorrect++;
                console.log(q2);
            };
            if(q3 === "Mutual"){
                correct++;
            }else{
                incorrect++;
                console.log(q3);
        };
    console.log(correct);
    var score = ((correct/3)*100);
    console.log(score);
    $("#score").append(score);
    $("#correctAnswers").slideDown();
    };

//I don't know if this is the best way to call this, but it's the only way I could get it to work without re-writing the entire script haha. 

    $(".submitButton").on("click", function doThis(){
        showResults();
    });

//Timer code, that sets the number of remaining seconds to 30, and then triggers the submit function when time runs out.

    var timeLeft = 30;
    var elem = document.getElementById("#thisTimer");
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
//    console.log(timeLeft);
      if (timeLeft == 0) {
        clearTimeout(timerId);
        showResults();
      } else {
        timeLeft--;
        $("#thisTimer").html(timeLeft);
      }
    }
});
