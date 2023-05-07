task1_oddOrEven = () => {
  let num1 = Number(prompt("Enter a number"));
  console.log(num1 % 2 == 0 ? "Even Number" : "Odd Number");
};

task2_numbers_average = () => {
  let sum = 0;
  let numberQuantity = Number(prompt("How many numbers?"));
  for (let index = 0; index < numberQuantity; index++) {
    sum += Number(prompt("Choose a number"));
  }
  let average = sum / numberQuantity;
  console.log(
    `Number Quantity: ${numberQuantity}\nSum of the Numbers: ${sum}\nAverage: ${average}`
  );
};

task3_ballThrowContest = () => {
  player1 = {};
  player2 = {};

  player1.name = prompt("Enter First Player Name");
  player1.score = Number(prompt("Enter First Player Score"));

  player2.name = prompt("Enter Second Player Name");
  player2.score = Number(prompt("Enter Second Player Score"));

  let winner = {};
  if (player1.score >= player2.score) {
    winner = player1;
  } else {
    winner = player2;
  }
  console.log(
    `Player ${winner.name} Thrown the ball further to a distance of ${winner.score}`
  );
};

task4_timePrompt = (promptString = "Enter Hour of the Day") => {
  let time = Number(prompt(promptString));

  if (time >= 5 && time <= 11) {
    console.log("בוקר טוב");
    return "morning";
  } else if (time >= 12 && time <= 17) {
    console.log("צהריים טובים");
    return "noon";
  } else if (time >= 18 && time <= 23) {
    console.log("ערב טוב");
    return "evening";
  } else console.log("no data for that hour");
};

task5_trainSystem = () => {
  const taxRate = 0.17;
  let ticketPrice = 6.6;
  let occupancy = { morning: 1, noon: 0.9, evening: 0.7 };
  let travelersCapacity = 120;

  let numberOfWagons = Number(prompt("How many wagons there are?"));
  let occupancyTime = task4_timePrompt("What is the hour of the day?");
  let driverSalary = Number(prompt("What's the driver's salary?"));
  let numberOfTravelersOnEachWagon =
    travelersCapacity * occupancy[occupancyTime];
  let income = numberOfWagons * numberOfTravelersOnEachWagon * ticketPrice;
  let profit = (income - driverSalary) * (1 - taxRate);
  console.log(
    `According to the occupancy time there are ${numberOfTravelersOnEachWagon} travelers on each wagon`
  );
  console.log(`The Total train income is ${income}`);
  console.log(
    `The Train total profit after driver's salary and tax reduction is ${profit}`
  );
};

task6_toyotaAgency = () => {
  const saleRate = 0.05;
  const MaxNumOfPayments = 24;

  let carPriceBeforeSale = Number(prompt("What's the car price?"));
  let carPriceAfterSale = carPriceBeforeSale * (1 - saleRate);
  let numOfPayments = Number(prompt("How many payments?"));
  console.log(
    `The car price after the sale rate is ${carPriceAfterSale.toFixed(2)}`
  );
  console.log(
    `In each payment you will need to pay ${(
      carPriceAfterSale / numOfPayments
    ).toFixed(2)}`
  );
};

task7_taxi = () => {
  const maxCapacity = 12;

  let numOfWaiting = Number(prompt("How many poeple waiting at the station?"));

  if (numOfWaiting >= 12) {
    console.log("The Taxi can go");
    numOfWaiting -= maxCapacity;
    console.log(`There are ${numOfWaiting} poeple left at the station`);
  } else console.log("The Taxi can't go");
};

task8_schoolTrip = () => {
  let numOfStudent = Number(prompt("How many students there are at the trip?"));
  let numberOfSecurityGaurdsAndParamedics = Math.ceil(numOfStudent / 30);
  let numberOfFirstAid = Math.ceil(numOfStudent / 50);

  console.log(`There are ${numOfStudent} students`);
  console.log(
    `So There are ${numberOfSecurityGaurdsAndParamedics} Security Guard(s) and Paramedic(s)`
  );
  console.log(`And There is ${numberOfFirstAid} First Aid Kit(s)`);
};

task9_foo_thursay = () => {
  let foo = prompt("Enter Thursday, thursday or 5 or something else...");
  if (foo === "Thursday" || foo === "thursday" || foo === "5")
    console.log("Thursday! Yay!");
};

task10_bmi = () => {
  let bmiValue = Number(prompt("Enter bmi value"));
  if (bmiValue <= 18) console.log("The BMI Value is too low");
  else if (bmiValue >= 25) console.log("The BMI Value is too High");
  else console.log("The BMI Value is Good");
};

task11_foo_correct = () => {
  let foo = prompt("Enter 'correct am I' or something else...");
  if (foo === "correct am I") console.log("He is NOT correct");
  else console.log("He is correct");
};

task12_root = () => {
  const num = 100;
  console.log(`The root of the number ${num} is: ${Math.sqrt(num)}`);
};

task13_button_display = () => {
  let btnToPress = document.getElementById("btn_change_display");
  let btnChanges = document.getElementById("btn_changing_display");

  btnToPress.addEventListener("click", () => {
    if (btnChanges.style.display == "none") btnChanges.style.display = "block";
    else btnChanges.style.display = "none";
  });
};

task14_openNewPage = () => {
  let btn = document.getElementById("btn_new_page");
  let timeParagraph = document.getElementById("time");
  btn.addEventListener("click", () => {
    window.open("https://justmax7cb.github.io/Second-JS-Assignment/");
  });
};

task15_timeDisplay = () => {
  let btn = document.getElementById("btn_time");
  let timeParagraph = document.getElementById("time");
  btn.addEventListener("click", () => {
    let today = new Date();
    timeParagraph.innerHTML = today;
  });
};

task16_loop_x = () => {
  let x = Number(prompt("Enter a number for x"));
  for (let i = 0; i < x; i++) {
    console.log(`Print Number ${i}: x: ${x}`);
  }
};

task17_loop_string = () => {
  let data = prompt("Enter a string");
  for (let i = 0; i < 10; i++) {
    console.log(`Print Number ${i}: ${data}`);
  }
};

task18_bigger_number = (a, b) => {
  return Math.max(a, b);
};

function fun() {
  alert(task18_bigger_number(21, 14));
}

task22_student_names = () => {
  let student = [
    "Sarah Johnson",
    "Kevin Lee",
    "Emily Davis",
    "Joshua Brown",
    "Amanda Nguyen",
  ];

  for (let i = 0 ; i < student.length; i++) {
    console.log(student[i])
  }
};


task13_button_display();
task14_openNewPage();
task15_timeDisplay();
task22_student_names()