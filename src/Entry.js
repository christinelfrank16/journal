function Entry(title, entry) {
  this.title = title,
    this.entry = entry,
    this.wordCount = 0,
    this.vowelCount = 0,
    this.consCount = 0

}

Entry.prototype.setWordCount = function() {
  var splitEntry = this.entry.split(" ");
  this.wordCount = splitEntry.length;
}

Entry.prototype.setVowelCount = function() {
  var regex = /[aeiouAEIOU]/;
  var counter = 0;
  for (var i = 0; i < this.entry.length; i++) {
    if (regex.test(this.entry[i])) {
      counter++;
    }

  }
  this.vowelCount = counter;
}

Entry.prototype.setConsCount = function() {
  var alph = /[a-zA-Z]/;
  var vowels = /[aeiouAEIOU]/;
  var counter = 0;
  for (var i = 0; i < this.entry.length; i++) {
    if (alph.test(this.entry[i]) && !vowels.test(this.entry[i])) {
      counter++;
    }
  }
  this.consCount = counter;
}

Entry.prototype.getTeaser = function() {
  var regex = /[.!?]/;
  var firstSent = this.entry.split(regex)[0];
  var teaser = "";

if (firstSent.split(" ").length <= 8) {
  teaser = firstSent;
} else {
  for(var i = 0; i < 8 ; i++ ){
    teaser += " " + firstSent.split(" ")[i];
  }
  teaser = teaser.substring(1);
}
return teaser;
}
