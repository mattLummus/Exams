(function(){

  'use strict';

  $(document).ready(initialize);


  function initialize(){
    preamble();
    setup();
    $('#go').click(go);
  }

  var list = [];

  function setup(){
    var words = $('#textBox').val();
    var stuff = punctuation(words);
    list = stuff.split(' ');
  }

  function go(){
    setInterval(evenOdd, 100);
  }

  function evenOdd(){
    var word = pullWord();
    word = word[0];
    var num = word.length;
    if(num%2===0){
      even(word);
    }
    else{
      odd(word);
    }
  }

  function even(word){
    var newWord = word.toLowerCase();
    var pWord = pigWord(newWord);
    var sum = sumWord(pWord);

    var $li = $('<li>');
    var $a = $('<a>');
    $a.text(pWord);
    $a.attr('href', 'https://www.google.com/search?q=' +newWord+ '');
    $li.css('background-color', '#FF4747');
    $a.css('background-color', '#4579C5');
    $li.css('color', 'white');
    $a.css('color', 'white');
    $li.text(sum);
    $($li).prepend($a);
    $('#evenUL').append($li);
  }

  function odd(word){
    var newWord = word.toUpperCase();
    var vWord = vowelWord(newWord);
    var fact = factWord(vWord);
    if(vWord.length<1){
      return;
    }
    var $li = $('<li>');
    var $a = $('<a>');
    $a.text(vWord);
    $a.attr('href', 'https://www.google.com/search?q=' +newWord+ '');
    $li.css('background-color', '#4579C5');
    $a.css('background-color', '#FF4747');
    $li.css('color', 'white');
    $a.css('color', 'white');
    $li.text(fact);
    $($li).prepend($a);
    $('#oddUL').prepend($li);
  }

  function sumWord(word){
    var num = word.length;
    var count = 0;
    for(var i=1; i<=num; i++){
      count += i;
    }
    return count;
  }

  function factWord(word){
    var num = word.length;
    var count = 1;
    for(var i=1; i<=num; i++){
      count = count*i;
    }
    return count;
  }


  function pigWord(word){
    var letter = word.charAt(0);
    var rest = word.substring(1);
    var newWord = rest + letter + 'a';
    return newWord;
  }

  function punctuation(words){
    var rest = words.replace(/,/g, '');
    rest = rest.replace('.', '');
    return rest;
  }

  function vowelWord(word){
    var rest = word.replace(/A/gi, '');
    rest = rest.replace(/E/gi, '');
    rest = rest.replace(/I/gi, '');
    rest = rest.replace(/O/gi, '');
    rest = rest.replace(/U/gi, '');
    return rest;
  }

  function pullWord(){
    var random = Math.floor(Math.random()*list.length);
    var result = list.slice(random, random+1);
    _.pull(list, list[random]);
    if(list.length===0){
      return;
    }
    return result;
  }

  function preamble(){
    $('#textBox').val('We the people of the United States, in order to form a more perfect union, establish justice, insure domestic tranquility, provide for the common defense, promote the general welfare, and secure the blessings of liberty to ourselves and our posterity, do ordain and establish this Constitution for the United States of America.');
  }

})();
