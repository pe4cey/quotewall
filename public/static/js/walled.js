//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]

shuffle = function(o){ //v1.0
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

var randorder = shuffle([-5,-2,1,2,4,6]);
var index = 0;

$().ready( function() {
	$(".card").each( function(index, element) {
		$(element).css("-webkit-transform","rotate("+ randorder[index++] +"deg)");
		$(element).css("-moz-transform","rotate("+ randorder[index++] +"deg)");
	});
});

