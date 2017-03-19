var stats = ["🎓","💪","👔","🥂","💸","💘","👼"];
var characters = 
[
  {
    "icon":"‍👮",
    "stats":{
      "🎓":[ 0,+1],
      "💪":[+1, 0],
      "👔":[-1, 0],
      "🥂":[-2,+1],
      "💸":[ 0, 1],
      "💘":[+1,+2],
      "👼":[+2,+2]
    },
    "special":[
      "You lose 1 points if you are rejected, and lose 3 points if you reject your date",
      "Whenever your date mentions alcohol or parties, you must let out a sigh. Doing so gains 3 points at the end of the date"
    ]
  },{
    "icon":"‍🤷",
    "stats":{
      "🎓":[+1, 0],
      "💪":[ 0,+2],
      "👔":[ 0,-1],
      "🥂":[+1,+2],
      "💸":[ 0,+2],
      "💘":[+2,+2],
      "👼":[-1,-1]
    },
    "special":[
      "You lose 2 points if you are rejected, and lose 3 points if you reject your date",
      "You gain +1 point for each time you use the word “Hashtag” (Max 3)"
    ]
  },{
    "icon":"‍🤓",
    "stats":{
      "🎓":[+2,+2],
      "💪":[-1, 0],
      "👔":[-1, 1],
      "🥂":[ 0,+1],
      "💸":[+1,-1],
      "💘":[-1,+1],
      "👼":[-1,+1]
    },
    "special":[
      "You lose 1 points if you are rejected, and lose 2 points if you reject your date",
      "You gain +2 point for each time you use the phrase “Um, actually” (Max 4)"
    ]
  },{
    "icon":"‍🤵",
    "stats":{
      "🎓":[+1,+1],
      "💪":[ 0,+2],
      "👔":[+2,+1],
      "🥂":[+1,+1],
      "💸":[+1, 0],
      "💘":[+2,+2],
      "👼":[-1,-1]
    },
    "special":[
      "You lose 1 points if you are rejected, and lose 2 points if you reject your date",
      "You gain 5 points if the date ends whilst you are in physical contact with your date"
    ]
  },{
    "icon":"‍🤦",
    "stats": {
      "🎓":[+0,+0],
      "💪":[+1,+1],
      "👔":[+1,+2],
      "🥂":[+1,+1],
      "💸":[-1,+2],
      "💘":[-2,+2],
      "👼":[-1,+1]
    },
    "special":[
      "You lose 4 points if you reject your date",
      "You gain 1 point each time you mention your ex (Max 3)",
      "If you are rejected, you draw a single from the deck and go home with them."
    ]
  },{
    "icon":"‍☠️",
    "stats": {
      "🎓": [+1,+2],
      "💪": [ 0,+1],
      "👔": [-2,-2],
      "🥂": [ 0,+1],
      "💸": [-1,-1],
      "💘": [-1,-1],
      "👼": [ 0,-1]
    },
    "special": [
      "You lose 3 points if you reject your date, but *gain* 3 points if you are rejected",
      "You gain 1 point each time you roll your eyes (Max 3)"
    ]
  },{
    "icon":"‍😘",
    "stats": {
      "🎓": [ 0,+1],
      "💪": [ 0,+2],
      "👔": [ 0,+1],
      "🥂": [+1,+1],
      "💸": [ 0,+1],
      "💘": [+1,+1],
      "👼": [-1,+1]
    },
    "special": [
      "You lose 3 points if you are rejected, and lose 5 points if you reject your date",
      "You gain +1 point for each time you wink (Max 3)"
    ]
  },{
    "icon":"‍💃",
    "stats": {
      "🎓": [-2,+1],
      "💪": [+2,+2],
      "👔": [ 0,+2],
      "🥂": [+1,+1],
      "💸": [-1,+2],
      "💘": [+1,+2],
      "👼": [ 0,0]
    },
    "special": [
      "You lose 3 points if you are rejected, and lose 5 points if you reject your date",
      "You gain +1 point for each time you contradict yourself (Max 4)"
    ]
  },{
    "icon":"‍🖖",
    "stats": {
      "🎓": [+2,+2],
      "💪": [-2, 0],
      "👔": [-1,+1],
      "🥂": [-2,-2],
      "💸": [+2, 0],
      "💘": [-1,-1],
      "👼": [ 0, 0]
    },
    "special": [
      "You lose 0 points if you are rejected, and lose 3 points if you reject your date",
      "You gain 4 points if the date ends without you using the words “Like”, “Feel”, “Enjoy”, “Love” or “Hate”"
    ]
  },{
    "icon":"‍🕶️",
    "stats": {
      "🎓": [-1,-1],
      "💪": [+1,+2],
      "👔": [+2,+2],
      "🥂": [+1,+2],
      "💸": [+1,-1],
      "💘": [+2,+2],
      "👼": [ 0,+1]
    },
    "special": [
      "You lose 3 points if you are rejected, and lose 5 points if you reject your date",
      "You gain 5 points if the date ends without you using filler words such as “Like”, “Um”, “Erhm”"
    ]
  },{
    "icon":"‍🙏",
    "stats": {
      "🎓": [ 0,-1],
      "💪": [ 0,+1],
      "👔": [+1,+2],
      "🥂": [-2,-2],
      "💸": [+1,+2],
      "💘": [-1,+1],
      "👼": [+2,+2]
    },
    "special": [
      "You lose 3 points if you are rejected, and lose 5 points if you reject your date",
      "You gain 2 points if the date ends without you using curse words such as “God”, “Jesus”, “Damn”, or any swear words"
    ]
  }]
$(document).ready(function(){
	emojione.imageType = 'svg';
  for(i in characters)
    render_character(characters[i]).appendTo('body');
  $('.character .special').each(function(i, e){
    if($(e).HasScrollBar()){
      $(e).addClass('mini');
    }
  })
});

render_character = function(chara){
  var $card = $("<div/>").addClass("character");

  $card.append($("<div/>").addClass("background"));

  for(var i = 0; i < 60; i++)
      $card.find(".background").append(emojione.toImage(chara.icon));

  $card.append($("<div/>").addClass("icon").append(
		emojione.toImage(chara.icon)
  ));

  var $stats = $("<div/>").addClass("stats").appendTo($card);
  for(stat in chara.stats){
    var $stat = $("<div/>").appendTo($stats);
    $stat.append( $("<span/>").addClass("stat_icon").append(emojione.toImage(stat)));
    $stat.append(get_value_span(chara.stats[stat][0]));
    $stat.append(get_mod_span(chara.stats[stat][1]));
  }
  var $special = $("<div/>").addClass("special").appendTo($card);
  for(i in chara.special){
    $special.append( $("<div/>").text(chara.special[i]));
  }
  return $card;
}
get_value_span = function(v){
  switch(v) {
    case +2:
        return $("<span/>").addClass("value").addClass("pos").text("++");
    case +1:
        return $("<span/>").addClass("value").addClass("pos").text("+");
    case -2:
        return $("<span/>").addClass("value").addClass("neg").text("--");
    case -1:
        return $("<span/>").addClass("value").addClass("neg").text("-");
    default:
        return $("<span/>").addClass("value").text("•");
  }
 
}
get_mod_span = function(m){
  switch(m) {
    case +2:
        return $("<span/>").addClass("mod").addClass("pos").text("×2");
    case +1:
        return $("<span/>").addClass("mod").addClass("pos").text("×1");
    case -2:
        return $("<span/>").addClass("mod").addClass("neg").text("×-2");
    case -1:
        return $("<span/>").addClass("mod").addClass("neg").text("×-1");
    default:
        return $("<span/>").addClass("mod").text("•");
  }
 
}

get_attractiveness_span = function(stats){
  var t = 0;
  for(s in stats){
    t+=stats[s][0];
  }
  var $span = $("<span/>").text(t);
  if(t > 0)
    $span.addClass("pos");

  if(t < 0)
    $span.addClass("neg");

  return $span;
 
}
$.fn.HasScrollBar = function() {
    //note: clientHeight= height of holder
    //scrollHeight= we have content till this height

    var _elm = $(this)[0];
    var _hasScrollBar = false; 
    if ((_elm.clientHeight < _elm.scrollHeight)) {
        _hasScrollBar = true;
    }
    return _hasScrollBar;
}
