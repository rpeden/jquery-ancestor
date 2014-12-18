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

    	return this.parent().parent().parent().parent();   
    };

    $.fn.greatGreatGreatGrandparent = function() {
    	if(console && console.log){
    		console.log("People like you drive other developers to drink.");
    	}

    	return this.parent().parent().parent().parent().parent();   
    };

    $.fn.greatGreatGreatGreatGrandparent = function() {
    	if(console && console.log){
    		console.log("A cat stomping on a keyboard could probably write better code than you.");
    	}

    	return this.parent().parent().parent().parent().parent().parent(); 
    };

    $.fn.greatGreatGreatGreatGreatGrandparent = function() {
    	if(console && console.log){
    		console.log("Are you a former COBOL programmer?");
    	}

    	return this.parent().parent().parent().parent().parent().parent().parent(); 
    };
}( jQuery ));