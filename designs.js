// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height,width,color,table;

$("form").submit(function(event){
	//when it already have some table existed, remove them
    $("tr").remove();
    $("tb").remove();

    //get the height and width from the enter
    height = $("#input_height").val();
    width = $("#input_width").val();
    makeGrid(height,width);
    event.preventDefault();
});


table = $("#pixel_canvas");
function makeGrid(row,column) {

// Your code goes here!
 for(var i = 0; i < row; i ++){
	table.append("<tr></tr>");
	for(var j = 0; j < column; j ++){
		$("tr").append("<td></td>");
	}
  }
}
//background color for each cell,chosen by the user
color = $ ("#colorPicker");
$( 'table' ).on( 'click', 'td', function( evt ) {
    $( evt.target ).css( 'background', color.val() );
});
