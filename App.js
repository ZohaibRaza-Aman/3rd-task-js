   //   =======    code.15 Arrays    =======

   //===  string value  ===

var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";
alert("Welcome to " + city3);

// === defined in arrays  ===

var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
alert("Welcome to " + cities[3]);

var mixedArray = [1, "Bob", "Now is", true];
console.log(mixedArray[1]);


//   ======     code.16 Arrays:Adding and removing elements      ======

 
//==== last value remove and two value add string ====

var pets = [];

pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";

pets.pop ()
pets.push("snake");
pets.push("lizard");
console.log(pets);

// =====    with arrays  ======

var pets =[];
pets = ['dog','cat','bird'];
pets.pop()
pets.push('snake','lizard')
console.log(pets);


// =====  Code.17 Arrays:Removing inserting and extracting elements  ====


// ====  string value defined shift unshift  ====

var fruits = [];

fruits[0] = "mango";
fruits[1] = "apple";
fruits[2] = "banana";
fruits[3] = "grapes";
fruits.shift();
fruits.unshift("pineapple" , "orange");
console.log(fruits);

//====  with arrays   ====

var fruits = [];
fruits = ["mango" , "apple" , "banana" , "grapes"];
fruits.shift();
fruits.unshift("pineapple","charry");
console.log(fruits);

//====  slice  ====

var fruits = [];
fruits = ["mango" , "apple" , "banana" , "grapes"];
copy = fruits.slice(1,3);
console.log(fruits)
console.log(copy);

//====  splice  ====

var fruits = [];
fruits = ["mango" , "apple" , "banana" , "grapes"];
console.log(fruits);
fruits.splice(2,1);
console.log(fruits);


// =======    code.18 for loops     =======


var a = ["Cheyenne", "Santa Fe", "tucson", "Great Falls", "Honolulu"];

for(var i = 0; i < a.length; i++){
    if(a[i] == "tucson") alert("call my word")
    console.log(a[i]);
}

var cleanestCities = ["Cheyenne", "Santa Fe", "tucson", "Great Falls", "Honolulu"];

for(var i = 0; i <= cleanestCities.length; i++){
        if(cleanestCities[i] === "tucson")
         alert(cleanestCities[i]+" one of the cleanest cities");
    else if(cleanestCities[i] === "Great Falls")
        alert(cleanestCities[i]+" one of the cleanest cities");
     }


     // =====     Code.19 for loops :Flags Booleans array length and loopus interruptus =====


var Cities = ["karachi" , "Lahore" , "peshawar" , "islamabad"];

      var matchFound = false;
      for (var i = 0; i <= 4; i++){

      if ("islamabad" === Cities[i]) {
      matchFound = true;
      alert("It's one of the cleanest cities");
      }

      if (matchFound === false) {
      alert("It's not on the list");
      }
      
      }


var matchFound = "No";
var Cities = ["karachi" , "Lahore" , "peshawar" , "islamabad"];


for(var i = 0; i <= 4; i++){
   if ("Lahore" === Cities[i]) {
      matchFound === "yes";
      alert("It's one of the cleanest cities");
      
   }
   if (matchFound === "No") {
      alert("It's not on the list")  
   }
}

for (var i = 1; i > 0; i++) {
if (i === 15) {
   break
   
}
   console.log("type")
}
    


// =====   Code.20 for loops nested    ======

for(var i = 0; i < 5; i++){
   for(var a = 0; a < 3; a++){
      console.log("Allow to All")
   }
}


var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

for(var i = 0; i < firstNames.length; i++){
   for(var x = 0; x < lastNames.length; x++){
      console.log(firstNames[i]+" "+ lastNames[x])
   }
}

