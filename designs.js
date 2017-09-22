// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
var height,width,color,table;

height = $('#input_height').val();
 
width = $('#input_width').val();
color = $('colorPicker').val();
table = $('pixel_canvas');
for(var i = 0; i < height; i ++){
	var row = table.after('<tr></tr>');
	for(var j = 0; j < width; j ++){
		var column = row.after('<tb></tb>');
		$('tb').click(function(){$(this).css('background-color','color')})
	}
}
  return false;
}

$(':submit').click(function(){makeGrid()});