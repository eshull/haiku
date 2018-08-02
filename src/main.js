import {Haiku} from './haiku';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './splash.png'

$(document).ready(function() {
  let imgTag = "<img src='"+ img + "' alt='test'>";
  $('#img').html(imgTag);
  $('#button').submit(function(event) {
    event.preventDefault();



  });
});
