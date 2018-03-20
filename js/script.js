// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// create an array containing five quote objects, each with five properties
var quotes = [
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    source: "Albus Dumbledore",
    citation: "Harry Potter and the Philosopher's Stone",
    year: 1997,
    tag: "fantasy"
  },

  {
    quote: "In a minute there is time for decisions and revisions which a minute will reverse.",
    source: "T. S. Eliot",
    citation: "The Love Song of J. Alfred Prufrock",
    year: 1915,
    tag: "poetry"
  },

  {
    quote: "May the odds be ever in your favor.",
    source: "Suzanne Collins",
    citation: "The Hunger Games",
    year: 2008,
    tag: "fiction"
  },

  {
    quote: "Whatever we look at, and however we look at it, we see only through our own eyes.",
    source: "C. G. Jung",
    citation: "Modern Man in Search of a Soul",
    year: 1933,
    tag: "psychology"
  },

  {
    quote: "The secret to life is to put yourself in the right lighting. For some it's a Broadway spotlight; for others, a lamplit desk.",
    source: "Susan Cain",
    citation: "Quiet: The Power of Introverts in a World that Can't Stop Talking",
    year: 2012,
    tag: "sociology"
  }
];

// use Math.random() to create a random number, then use that number to display one of the array objects at random
function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var randQuote = quotes[randomNumber];
    return randQuote;
  }
// create random background color; using Math.random(), get random numbers and assign them to an RGB value
function getRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var rgbValue = "rgb(" + red + ", " + green + ", " + blue +")";
  document.body.style.backgroundColor = rgbValue;
}

function refreshQuote() {
  var intervalId = setInterval(printQuote, 20000);
}

// call the getRandomQuote function here and access the value in each quote object, then print random quotes using HTML to the page
// call getRandomColor function to set a different background color each time the button is clicked
function printQuote () {
  var random = getRandomQuote();
  getRandomColor();

  var html = '<p class="quote">' + random.quote + '</p>';
  html += '<p class="source">' + random.source;
  if (random.citation) {
    html += '<span class="citation">' + random.citation + '</span>';
  }
  if (random.year) {
  html += '<span class="year">' + random.year + '</span>';
}
  if (random.tag) {
  html += '<span class="tag">' + random.tag + '</span></p>';
}
 document.getElementById('quote-box').innerHTML = html;
}


printQuote(); //call the printQuote function and print out quote
refreshQuote(); // call the refreshQuote function to automatically display a new quote every 20 seconds
