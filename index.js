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
function sayHiToGrandma(string) {
  if (lowercase.toLowerCase() === lowercase) {
  console.log("I can't hear you!")
  }
}