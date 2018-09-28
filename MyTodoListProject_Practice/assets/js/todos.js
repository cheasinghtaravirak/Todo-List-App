//Check off specific todos
$("ul").on("click", "li", function() { //add eventListener on any li in ul 
	$(this).toggleClass("completed");   
}); 
// Click on span to remove li's element 
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove(); 	
	}); 
	event.stopPropagation(); 
});
//Add todo to the list 
$("input[type = 'text']").keypress(function(event) {
	if(event.which === 13) {
		//Grab the text from the input box 
		var todoText = $(this).val();  
		//add to the list 
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
		//clear the input box 
		$(this).val(""); 
	} 
}); 
//Toggle the form 
$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle(); 
}); 
