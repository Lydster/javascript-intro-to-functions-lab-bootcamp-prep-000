function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

var lowercase = 'hello!'
var uppercase = 'HELLO!'
var mixedCase = "I love you, Grandma."

function sayHiToGrandma(string) {
  if (lowercase.toLowerCase() === lowercase)
  return "I can't hear you!"; 
}
 

function sayHiToGrandma(string) {
  if (uppercase.toUpperCase() === uppercase)
  return "YES INDEED!";
}


function sayHiToGrandma(string) {
  if (mixedCase === mixedCase)
  return "I love you, too."
}


function sayHiToGrandma(string) {
  if (lowercase.toLowerCase() === lowercase)
  return "I can't hear you!";
  else if (uppercase.toUpperCase() === uppercase)
  return "YES INDEED";
  else if (mixedCase === mixedCase)
  return "I love you, too.";
  else()
  return "test failed";
}
  
