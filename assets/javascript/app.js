$('document').ready(function() {
    console.log( "ready!" );

/*
    const quizContainer = $('#quiz');
    const resultsContainer = $('#results');
    const submitButton = $('#submit');
*/


$(".submitButton").on("click", function showResults(){

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

    });









    


















});