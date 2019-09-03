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
