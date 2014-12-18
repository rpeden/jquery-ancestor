(function( $ ) {
 
    $.fn.grandparent = function() {
    	if(console && console.log){
    		console.log("You should really find a better way to do this.");
    	}

    	return this.parent().parent();   
    };

    $.fn.greatGrandparent = function() {
    	if(console && console.log){
    		console.log("Have you been drinking?");
    	}

    	return this.parent().parent().parent();   
    };
 
 	$.fn.greatGreatGrandparent = function() {
    	if(console && console.log){
    		console.log("You should be ashamed of yourself.");
    	}

    	return this.parent().parent().parent();   
    };
}( jQuery ));