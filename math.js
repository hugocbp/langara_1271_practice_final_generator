let defIndef = [
  1,
  2,
  3,
  4,
  5,
  7,
  8,
  39,
  40,
  41,
  42,
  47,
  48,
  49,
  63,
  64,
  65,
  66,
  71,
  73,
  74
];

let integTech = [
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  43,
  44,
  45,
  46,
  55,
  56,
  57,
  58,
  5960
];

let applications = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 19, 20, 21];
let appProb = [37, 38, 39];

let diffEquations = [5, 6, 7, 8, 11, 13, 15, 16, 17, 18, 19, 20];

let series = [
  11,
  12,
  13,
  14,
  15,
  18,
  19,
  22,
  25,
  28,
  30,
  31,
  32,
  33,
  35,
  37,
  38,
  39,
  40,
  41,
  45
];

let trueFalseA = [1, 2, 3, 4, 5, 6, 9, 11, 12, 13, 14, 15, 19, 20, 21];
let trueFalseB = [1, 2, 3, 4];
let trueFalseC = [1, 2, 4, 5, 6, 7, 8, 10, 13, 14, 15];

let trueFalse = {
  "Chapter 5 T/F": trueFalseA,
  "Chapter 6 T/F": trueFalseB,
  "Chapter 8 T/F": trueFalseC
};

function genTest() {
  console.log("###### Practice Test #######");
  console.log(
    "* Number in parenthesis is the amount of questions about that topic on the actual final"
  );

  console.log("\nI. Definite and Indefinite Integrals (3)");
  console.log("Chapter 5 Review Exercises (no Simpson's Rule)");
  let a = rand(defIndef.length);
  console.log(defIndef[a]);
  defIndef.splice(a, 1);

  a = rand(defIndef.length);
  console.log(defIndef[a]);
  defIndef.splice(a, 1);

  a = rand(defIndef.length);
  console.log(defIndef[a]);
  defIndef.splice(a, 1);

  // a = rand(defIndef.length);
  // console.log(defIndef[a]);
  // defIndef.splice(a, 1);

  // a = rand(defIndef.length);
  // console.log(defIndef[a]);
  // defIndef.splice(a, 1);

  console.log(
    "\nII. Applications of Integrals, Averags, Areas, Volumes, Probabilities (3)"
  );
  console.log("Chapter 6 Review Exercises");
  a = rand(applications.length);
  console.log(applications[a]);
  applications.splice(a, 1);

  a = rand(applications.length);
  console.log(applications[a]);
  applications.splice(a, 1);

  a = rand(appProb.length);
  console.log(appProb[a]);
  appProb.splice(a, 1);

  console.log("\nIII. Differential Equations (1)");
  console.log("Chapter 7 Review Exercises");
  a = rand(diffEquations.length);
  console.log(diffEquations[a]);
  diffEquations.splice(a, 1);
  // a = rand(diffEquations.length);
  // console.log(diffEquations[a]);
  // diffEquations.splice(a, 1);

  console.log("\nIV. Series (2)");
  console.log("Chapter 8 Review Exercises");
  a = rand(series.length);
  console.log(series[a]);
  series.splice(a, 1);

  a = rand(series.length);
  console.log(series[a]);
  series.splice(a, 1);

  // a = rand(series.length);
  // console.log(series[a]);
  // series.splice(a, 1);

  console.log("\nV. True/False (1)");
  let pages = ["Chapter 5 T/F", "Chapter 6 T/F", "Chapter 8 T/F"];
  let i = rand(2);
  let page = pages[i];
  if (page) {
    console.log(page + ": " + trueFalse[page][rand(trueFalse[page].length)]);
    pages.splice(i, 1);
  }

  page = pages[rand(2)];
  if (page) {
    console.log(page + ": " + trueFalse[page][rand(trueFalse[page].length)]);
    pages.splice(i, 1);
  }

  page = pages[rand(2)];
  if (page) {
    console.log(page + ": " + trueFalse[page][rand(trueFalse[page].length)]);
    pages.splice(i, 1);
  }

  page = pages[rand(2)];
  if (page) {
    console.log(page + ": " + trueFalse[page][rand(trueFalse[page].length)]);
    pages.splice(i, 1);
  }
}

function rand(a, b = 0) {
  return Math.floor((Math.random() * 100) % (b - a)) + b;
}

genTest();
