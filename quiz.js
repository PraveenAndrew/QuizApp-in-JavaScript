var container = document.getElementById('container');
var question = document.getElementById('question');
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var opt4 = document.getElementById('option4');
var result = document.getElementById('result');

 var currQuestion = 0;
 var totalQuestion = questions.length;
 var score = 0;


//  function 1
  function loadQuestion(start)
  {
      var data = questions[start];
      question.textContent = (start + 1) + " . " + data.question;
      opt1.textContent = data.option1;
      opt2.textContent = data.option2;
      opt3.textContent = data.option3;
      opt4.textContent = data.option4;

      var selectedOption = document.querySelector('#container input[type=radio]:checked');

//       if(selectedOption) selectedOption.checked = false;
  };

  loadQuestion(currQuestion);


//   function 2
  function loadNextQuestion()
  { 
       var selectedOption = document.querySelector('#container input[type=radio]:checked');
       if(!selectedOption)
       {
              alert('Please select any one option !!!');
              return;
       }

       if(questions[currQuestion].answer == selectedOption.value)
       {
               score += 10;

       }
       selectedOption.checked = false;

       currQuestion++;
       if(currQuestion == totalQuestion - 1)
       {
            document.getElementById('nextQuestion').textContent = "Finish";
       }
       if(currQuestion == totalQuestion)
       {
          container.style.display = 'none';
          result.style.display = 'block';
          document.getElementById('score').textContent = 'Your Score:' + score;
        
          return;
       }
       loadQuestion(currQuestion);
  };
   

//   function 3
  function restartGame()
  {
       score = 0;
       currQuestion = 0;
       container.style.display = 'block';
       result.style.display = 'none';

       loadQuestion(currQuestion);
}
  