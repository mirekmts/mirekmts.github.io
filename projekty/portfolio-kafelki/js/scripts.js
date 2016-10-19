//$(function() {
	window.onload=function(){
		$('#tile2').hide(); 
		$('#tile3').hide(); 
		$('#tile4').hide(); 
		
	}; 
	
	

	$('#square1').click(function() {
		$('#tile1').show();
		$('#tile2').hide(); 
		$('#tile3').hide(); 
		$('#tile4').hide(); 	
});

$('#square2').click(function() {
		$('#tile2').show();
		$('#tile1').hide(); 
		$('#tile3').hide(); 
		$('#tile4').hide(); 
});

$('#square3').click(function() {
		$('#tile3').show();
		$('#tile2').hide(); 
		$('#tile1').hide(); 
		$('#tile4').hide(); 
});

$('#square4').click(function() {
		$('#tile4').show();
		$('#tile1').hide(); 
		$('#tile3').hide(); 
		$('#tile2').hide(); 
});



//});


