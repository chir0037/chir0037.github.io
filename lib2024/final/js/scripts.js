window.onload = init;

function init() {

	document.querySelector('.ham').onclick = showHideMobileMenu;


// The overlay container activates before the results are revealed
	$('#form').submit(function (e) {
   		 e.preventDefault();
   		 $("#results").removeClass('reveal');
   		 var form = this;
   		 $(".overlay-container").fadeIn(1000, function(){
   		 		showformValues(form);
   		 		$('.overlay-container').delay(500).fadeOut(500);
   		 		$("#results").addClass('reveal');
   		 });
	});

}

// Hamburger
function showHideMobileMenu() {

	var mobileNav = document.querySelector('.mobile-nav');

	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}

// Showing the form results in the profile info div
function showformValues(form){
	var formValues = $(form).serializeArray(); 		
	$.each(formValues, function(index, field){
		$("#results").find("#"+field.name+"_result").text(field.value);
		if(field.name=="email"){
			$("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
		}
	});			
}


