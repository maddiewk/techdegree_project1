// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// array of five quote objects
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
    quote: "A hungry artist prefers bread to a beautiful painting, and a man in love prefers a woman to his public career; yet the painting may be of the greatest importance to the one and public office to the other.",
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

var random;

// display random quote
function getRandomQuote() {
  for( var i = 0; i <= quotes.length; i += 1 ) {
    random = Math.floor((Math.random() * quotes.length) + 1);
    return random;
  }

}
// organize quotes and print to page
function printQuote (getRandomQuote) {
  <p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
}
printQuote(); //print out quote
