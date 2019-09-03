// this is a costructor to hold all our potential entries.
export function Diary() {
  this.entries = [],
  this.idCounter = 0;
}

// this method gives each entry an ID so that we can fnd it for future reference
Diary.prototype.assignId = function(){
// this vvv increases the idCounter property by 1 each time an id is aassigned
  this.idCounter ++;
  return this.idCounter;
};

// this method puts entries into the entries property, and it assigns an ID first.
Diary.prototype.addEntry = function(entry) {
  entry.id = this.assignId();
  this.entries.push(entry);

};
