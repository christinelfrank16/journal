import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Entry } from './Entry.js';
import {Diary} from './Diary.js';


var diaryBook = new Diary();

$(document).ready(function() {
  $(".journalForm").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var entry = $("#entry").val();
    var finalEntry = new Entry(title, entry);
    diaryBook.addEntry(finalEntry);

    console.log(diaryBook);

  });
});
