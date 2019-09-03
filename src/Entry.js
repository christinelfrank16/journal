export function Entry(title, entry) {
  this.title = title,
  this.entry = entry,
  this.wordCount = 0,
  this.vowelCount = 0,
  this.consCount = 0;
}
// we knew we wanted to count the words so we split the string into an array, using the spaces
Entry.prototype.setWordCount = function() {
  var splitEntry = this.entry.split(" ");
  this.wordCount = splitEntry.length;
};

// here we used a regex to identify vowels.
Entry.prototype.setVowelCount = function() {
  var regex = /[aeiouAEIOU]/;
  var counter = 0;
  for (var i = 0; i < this.entry.length; i++) {
    if (regex.test(this.entry[i])) {
      counter++;
    }
  }
  this.vowelCount = counter;
};

Entry.prototype.setConsCount = function() {
  var alph = /[a-zA-Z]/;
  var vowels = /[aeiouAEIOU]/;
  var counter = 0;
  for (var i = 0; i < this.entry.length; i++) {
    // here we first checking for any letter in the alphabet, and then make sure its also not a vowel
    if (alph.test(this.entry[i]) && !vowels.test(this.entry[i])) {
      counter++;
    }
  }
  this.consCount = counter;
};

// this is where we get the first 8 words in a sentence/or the whole sentence
Entry.prototype.getTeaser = function() {
  var regex = /[.!?]/;
  var firstSent = this.entry.split(regex)[0];
  var teaser = "";
  if (firstSent.split(" ").length <= 8) {
    teaser = firstSent;
  } else {
    for (var i = 0; i < 8; i++) {
      teaser += " " + firstSent.split(" ")[i];
    }
    // used the substring method to remove the first weird space that the split method made before the sentence- we added the space to put spaces between the words but theres an awkward first one we gettin rid of
    teaser = teaser.substring(1);
  }
  return teaser;
};
