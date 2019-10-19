var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
   {
      title: "var stands for what?:",
      choices: ["variable", "varry", "vartous", "vary"],
      answer: "variable"
    },
    {
      title: "To use bootstrap in your HTML you have to, what?:",
      choices: ["buy a subscription", "link it to your html", "make it a .bs file", "none of the above"],
      answer: "link it to your html"
    },
  ];

  var score = 0;
  
  for(var i=0; i< questions.length; i++){
    var response = window.prompt(questions[i].prompt);
      if(response == questions[i].answer){
        score++;
        alert("Correct!");
      } else {
        score--;
        alert("Wrong!");
      }
      }
  