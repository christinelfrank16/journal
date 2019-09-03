import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import {Diary} from './Diary.js';


var diaryBook = new Diary();

$(document).ready(function() {
  $(".journalForm").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var entry = $("#entry").val();
    if (title && entry){
    diaryBook.addEntry(title, entry);
    displayEntries(diaryBook);
    $(this).trigger("reset");
  }
  });
});

function displayEntries(diary){
  var results = $(".result");
  var htmlInsert = "";
  diary.entries.forEach(function(entry){
    htmlInsert += buildEntry(entry);
  });
  results.html(htmlInsert);
}

function buildEntry(entry){
  var markup = `
  <div id="$ID$" class="diaryEntry">
    <h2>$TITLE$</h2>
    <h4>$FIRSTSENT$</h4>
    <p>Word Count: $WORD$; Consonant Count: $CONS$; Vowel Count: $VOWEL$</p>
  </div>
  `;

  markup = markup.replace("$ID$", entry.id);
  markup = markup.replace("$TITLE$", entry.title);
  markup = markup.replace("$FIRSTSENT$", entry.teaser);
  markup = markup.replace("$WORD$", entry.wordCount);
  markup = markup.replace("$CONS$", entry.consCount);
  markup = markup.replace("$VOWEL$", entry.vowelCount);

  return markup;
}
