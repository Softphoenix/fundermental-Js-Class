console.group('Am coming from main')


// CLASS 1
// variable declaration 
var firstname = "azeez"

console.log(firstname);
// we have 3 data in javascript
// 1. number(it can be integer and float )
// 2. string(it can be single quote,double qoute and backtik)
// 3. undefined(it is undefined because we did not assign value to it )
// 4. null
// booleans (they are used for true and false)
/*double line Comment*/

var lastName
console.log(lastName)
lastName ="rasheed"


console.log(lastName)
var age = 24;
console.log(age)
var isStudent = true;
console.log (isStudent);
var let = 'ayo'


// naming variable , variable name can only start with letter or an underscore or dollar sign
// variable name cannot contain special characters or space in between 

var $5years = 5;
console.log($5years)
// variable mutation and coarsion it means variable change
// coarsion is how javascript forces a variable from one type to another
var name = `mini`;
var firstname = 'azeez'
var myAge = 7;
var address = null
var city = undefined 
city = "gwas"
console.log(city)
console.log(firstname)

// coarsion
console.log("my name is " + name + " i am" + myAge + "years old.");

console.log(`my name is ${name} i am ${myAge} years old`)

var dob = 2022 - myAge;
console.log(dob);



// 
//  operator arithemetic, tenary, assignment, comparism
var result = 3 - (4 / 2) * 2;
console.log(result);

var num1 = 44
var num2 = "44"
var campare = num1 == num2
console.log(campare)
var campare2 = num1 = num2
console.log(campare2)



var std1, std2, std3;
std1 = std2 = std3  = "james";
console.log(std1, std2, std3);


// increament
var newAge = myAge +1;
console.log(newAge)
myAge = myAge + 1;

myAge += 1
myAge++;
console.log(myAge);


 /**  class work
  var cynthiaMass = 100;
  var cynthiaHeight =40;


  var emekaMass = 44;
  var emekaHeight= 66;

  var cynthiaBmi = 100 / (40*40)
  var emekaBmi = 44 /(66*)


  
  */
  //  correction


  var cynthiaMass = 70;
  var cynthiaHeight = 1.7;

  var emekaMass = 175;
  var emekaHeight = 1.6;

  var cynthiaBmi = cynthiaMass / (cynthiaHeight * cynthiaHeight);
  var  emekaBmi = emekaBmi / (emekaHeight * emekaHeight);

  var higherBmi = cynthiaBmi > emekaBmi
  console.log(" is cynthia bmi higher than emeka's ?" + higherBmi);

  // typeof helps us determine the type of a variable 

  console.log(typeof cynthiaBmi, typeof higherBmi);

  // conditional statements
  //  if (num1 === num2) {
  //    console.log("hello word")
  //  }
  //  else{
  //   console.log("whats up")
  //  }

  if (cynthiaBmi > emekaBmi) {
    console.log("cynthia wins");
  } else {
    console.log("emeka wins")
  }


  var studentAge = 34;
  if (studentAge >= 20)  {
    console.log("you are a legal adult now");
  } else if (studentAge <= 18 && studentAge >= 13) {
    console.log("you are a teenager");
  } else if (studentAge < 13 && studentAge >= 5) {
    console.log("hello young one");
  } else {
    console.log("lovely baby");
  }

  // classwork
  var transport = 100;
  if (transport <= 200) {
    console.log("go to the market")
  } else {
    console.log("not enough money")
  }
  
  
var studentScore = '40';
if (studentScore < '40') {
  console.log('the student fail')
} else {
  console.log('student pass')
}

var studentCgpa = 3.5;
  if (studentCgpa >= 4.5) {
    console.log('the student graduated with firstclass')
  } else if (studentCgpa <= 4.0 && studentCgpa >= 3.5 ) {
    console.log('the student graduated with second class upper')
  } else if (studentCgpa < 3.5 && studentCgpa >= 2.5) {
    console.log('the student graduated with secondclass lower')
  } else if (studentCgpa < 2.5 && studentCgpa >= 1.5) {
    console.log('the student graduated with third class') 
  } else if (studentCgpa < 1.5 && studentCgpa >= 0.5) {
    console.log('the student graduated with pass')
  } else {
    console.log('the student did not graduated')
  }

  function cgpa(studentCgpa) {
    
    if (studentCgpa >= 4.5) {
      console.log('the student graduated with firstclass')
    } else if (studentCgpa <= 4.0 && studentCgpa >= 3.5 ) {
      console.log('the student graduated with second class upper')
    } else if (studentCgpa < 3.5 && studentCgpa >= 2.5) {
      console.log('the student graduated with secondclass lower')
    } else if (studentCgpa < 2.5 && studentCgpa >= 1.5) {
      console.log('the student graduated with third class') 
    } else if (studentCgpa < 1.5 && studentCgpa >= 0.5) {
      console.log('the student graduated with pass')
    } else {
      console.log('the student did not graduated')
    }
        
  }
  cgpa(4.1)
  cgpa(1.1)
  cgpa(3.1)
   

  var votersAge = 18;
  if (votersAge >= 18) {
    console.log(`you are eligible to vote`)
  } else {
    console.log(`come back next time`);
  }

  var whether = 'sunny'
  if (whether === 'sunny') {
    console.log('you can go to market');
  } else {
    console.log('dont go to market')
  }


//  switch case is used to test for equality 


var myName = "Azeez" 
switch (myName)  {
    case "Azeez":
    console.log("welcome programmer Azeez");

    break;
    case "fatima":
    console.log('hello ma')
    break;

    case "adumdum":
      console.log('hello ma')
      break;
   default: 
     console.log("you are confuse");
     break;
}

var gender = 'female';
switch (gender) {
  case 'female':
    console.log('hello ma')

    break;
    case "male":
      console.log("hello sir")
      break;
      default:
      console.log('you are confused')
      break;
}


// tenary operators


var isMarried = true;
 console.log("is james married" + (isMarried ? " yes " :  "no"));

 // class work

 var johnScore = (89, 120, 103);
 var johnAverageScores = (89 + 120 + 123) / 3;
 // console.log(johnAverageScore);

 // correction

 var johnAve = (89 + 120 + 103)  / 3;
 var mikeAve = (116 + 94 + 123)  / 3;
 var maryAve = (97 + 134 + 106)  / 3;

 if (johnAve > mikeAve && johnAve > maryAve)  {
    console.log('the winner is johns team an average score of ' + johnAve);
 } else if (mikeAve > johnAve && mikeAve > maryAve) {
    console.log('the winner is mike team with an average score of ' + mikeAve)
 } else if (maryAve > johnAve && maryAve > mikeAve)  {
    console.log("the winner is marys team with an average score of " + maryAve)
 } else {
    console.log("it is a draw");
 }

 // function
       
     function calculateAge(yearOfBirth = 1998) {
            let currentYear = 2022;
            let age = currentYear - yearOfBirth;
            return age;


          }

          // function name(){
         //   calculate_age
         // }
         // calculateAge() function invocation

      console.log("hello am" + calculateAge(2009) + " years old");   
      console.log("i am " + calculateAge(2000) + "years old");
      function calculate() {

      }
     calculateAge()
      function yearsUntilRetirement(dob, jobYear, name) {
        var myAge = calculateAge(dob)
        var noOfYears = calculateAge(jobYear);
        var ageTillRetirement = 65 - myAge;
        var workTillRetirement = 35 - noOfYears;
        if (ageTillRetirement > workTillRetirement){

          console.log(`hello ${name} you have ${workTillRetirement} years before you retire`); 
      } 
      else if (workTillRetirement > ageTillRetirement) {
        console.log(`hello ${name} you have ${workTillRetirement} years before you retire`); 
      } else {
        console.log(`hello ${name} you have ${workTillRetirement} years before you retire`); 
      }
      }
    
  //  console.log("james");
yearsUntilRetirement(1998, 2009,"james");
yearsUntilRetirement(1998, 2005, "joy");
yearsUntilRetirement(1998, 2015, "mary");
yearsUntilRetirement(1998, 2005, "rita");

var result = [90, 87, 66, 88, 99 ,'john']
console.log(result)
console.log(result.length)
console.log(result[5]);
var student =[' hosea', 'john', 'favour', 'emma'];
console.log(student);
console.log(student[3])
console.log(student.indexOf("hosea"));
student.pop();
console.log(student);
student.shift();
console.log(student);
student.push('linda');
console.log(student);
student.unshift('ali');
console.log(student);


// function practice
let fuel = 99;
function launch_rocket() {
  function warning_msg() {
    console.warn('not enough fuel');
  }  
  if (fuel >= 100) {
    console.log('we are good to go');
  } else {
    warning_msg();
  }
}
launch_rocket();

//  correction
function tipCalculator(bill) {
   var percentage;

   if (bill < 5000) {
     percentage = 0.2;
   } else if (bill >= 5000 && bill <= 30000) {
     percentage = 0.15;
   } else {
    percentage = 0.1;
   }
   return percentage * bill;
}
// console.log(tipCalculator(60000))

var bill = [12400, 4800, 26800];
var tips = [
   tipCalculator(bill[0]),
   tipCalculator(bill[1]),
   tipCalculator(bill[2]),
];
var finalValues = [bill[0] + tips[0], bill[1] + tips[1], + bill[2] + tips[2]];
console.log(tips, finalValues);

// object are like  entity, makes up of key value pair

var student = {
  firstName: "victor",
  lastName: "david",
  age: 22,
  state: "new york",
  lga: 'memphis',
  ca: 44,
  exam: 66,

  address: {
    city: "gwagwalada",
  },

  email: function () {
    return "hello@yahoo.com";
  },
  children: ['funmi', 'joy', 'charlse', 'david'],
};

console.log(student.address.city)
console.log(student.email())
console.log(student.children[3])
console.log(student);

console.log(student.state);
console.log(student["firstName"]);

