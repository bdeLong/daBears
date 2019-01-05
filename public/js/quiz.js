let num = 0;
let beerResult = ""

let quizQuestions = [
  {
    question: "Are You Looking To Get Drunk And Don't Care About Taste?",
    options: ["Yes", "No"],
    connectsTo: [18, 1],
    result1: "American Macro Brew"
  },
  {
    question: "Are You Drinking Outside?",
    options: ["Yes", "No"],
    connectsTo: [2, 3]
  },
  {
    question: "Is It Hot Outside?",
    options: ["Yes", "No"],
    connectsTo: [6, 4]
  },
  {
    question: "Is It A Cold Winter Night?",
    options: ["Yes", "No"],
    connectsTo: [5, 8]
  },
  {
    question: "Are You Running Around Breaking A Sweat?",
    options: ["Yes", "No"],
    connectsTo: [9, 7]
  },
  {
    question: "Are You Looking To Get Pretty Drunk?",
    options: ["Yes", "No"],
    connectsTo: [17, 18],
    result2: "Porter or Stout"
  },
  {
    question: "Fun & Funky? Or Easy & Refreshing?",
    options: ["Fun", "Easy"],
    connectsTo: [13, 18],
    result2: "Farmhouse / Saison"
  },
  {
    question: "Are You Having Food While Drinking?",
    options: ["Yes", "No"],
    connectsTo: [10, 11]
  },
  {
    question: "Do You Want Something Hoppy?",
    options: ["Yes", "No"],
    connectsTo: [18, 12],
    result1: "IPA"
  },
  {
    question: "Do You Enjoy A Challenge?",
    options: ["Yes", "No"],
    connectsTo: [18, 18],
    result1: "Farmhouse / Saison",
    result2: "Pilsner"
  },
  {
    question: "Light & Refreshing Food? Or Heaving & Satisfying Food?",
    options: ["Light", "Heavy"],
    connectsTo: [18, 14],
    result1: "Wheat Beer"
  },
  {
    question: "Do You Like Hoppy Beers?",
    options: ["Yes", "No"],
    connectsTo: [18, 18],
    result1: "Pale Ale",
    result2: "Wheat Beer"
  },
  {
    question: "Do You Like Sour Foods?",
    options: ["Yes", "No"],
    connectsTo: [18, 16],
    result1: "Sour"
  },
  {
    question: "Do You Like A Bitter Hop Bite?",
    options: ["Yes", "No"],
    connectsTo: [18, 18],
    result1: "Pilsner",
    result2: "Wheat Beer"
  },
  {
    question: "Are You Eating A Meal Or Dessert?",
    options: ["Meal", "Dessert"],
    connectsTo: [15, 18],
    result2: "Sour"
  },
  {
    question: "Hoppy Or Roasty?",
    options: ["Hoppy", "Roasty"],
    connectsTo: [18, 18],
    result1: "IPA",
    result2: "Porter or Stout"
  },
  {
    question: "Is Hops OK?",
    options: ["Yes", "No"],
    connectsTo: [18, 18],
    result1: "Pale Ale",
    result2: "Porter or Stout"
  },
  {
    question: "Do You Like Roaste Coffee?",
    options: ["Yes", "No"],
    connectsTo: [18, 18],
    result1: "Barrel-Aged Stout",
    result2: "Barleywine"
  }
];

$("#question").text(quizQuestions[num].question);
$("#option1").text(quizQuestions[num].options[0]);
$("#option2").text(quizQuestions[num].options[1]);

let setQuestion = function () {
  if (num >= 18) {
    $("#question").text("Drink This Beer:");
    $("#option1").hide();
    $("#option2").hide();
  }
  else {
    $("#question").text(quizQuestions[num].question);
    $("#option1").text(quizQuestions[num].options[0]);
    $("#option2").text(quizQuestions[num].options[1]);
  }
}

$("#option1").on("click", function () {
  if (quizQuestions[num].connectsTo[0] === 18) {
    $("#result").text(quizQuestions[num].result1);
    beerResult = quizQuestions[num].result1;
  }
  num = quizQuestions[num].connectsTo[0];
  setQuestion();
})

$("#option2").on("click", function () {
  if (quizQuestions[num].connectsTo[1] === 18) {
    $("#result").text(quizQuestions[num].result2);
    beerResult = quizQuestions[num].result2;
  }
  num = quizQuestions[num].connectsTo[1];
  setQuestion();
})



//favorite JS
//need to collect user specific id, preferred beer style, option to name for profile
const newFavorite = {
  profile_name: "", //need div to reference
  beer_style: beerResult,
  user_id: "",// need to find a way to keep user logged in
};
$.post("/api/favorite", newFavorite)