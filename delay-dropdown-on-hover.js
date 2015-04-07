$(document).ready(function(){
	jQuery('ul.nav li.dropdown').hover(function() {
	  jQuery(this).find('.dropdown-menu').stop(true, true).delay(300).slideDown(10);
	  }, function() {
		 jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(10);
	});
});
