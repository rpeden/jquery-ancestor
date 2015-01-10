(function( $ ) {
    var insultUser = function(insultMessage){
        if(console && console.log){
            console.log(insultMessage);
        }
    }

    $.fn.grandparent = function() {
    	insultUser("You should really find a better way to do this.");	
    	return this.parent().parent();   
    };

    $.fn.greatGrandparent = function() {
    	insultUser("Have you been drinking?")
    	return this.parent().parent().parent();   
    };
 
 	$.fn.greatGreatGrandp  rent = function() {
    	insultUser("You should be ashamed of yourself.");
    	return this.parent().parent().parent().parent();   
    };

    $.fn.greatGreatGreatGrandparent = function() {
    	insultUser("People like you drive other developers to drink.");
    	return this.parent().parent().parent().parent().parent();   
    };

    $.fn.greatGreatGreatGreatGrandparent = function() {
    	insultUser("A cat stomping on a keyboard could probably write better code than you.");
    	return this.parent().parent().parent().parent().parent().parent(); 
    };

    $.fn.greatGreatGreatGreatGreatGrandparent = function() {
    	insultUser("Are you a former COBOL programmer?");
    	return this.parent().parent().parent().parent().parent().parent().parent(); 
    };

    $.fn.greatGreatGreatGreatGreatGreatGrandparent = function() {
    	insultUser("If you keep this up, you're going to break the Internet.");
    	return this.parent().parent().parent().parent().parent().parent().parent().parent(); 
    };

    $.fn.greatGreatGreatGreatGreatGreatGreatGrandparent = function() {
 insultUser("You just broke the Internet.");
       return this.parent().parent().parent().parent().parent().parent().parent().parent().parent(); 
    };

    $.fn.greatGreatGreatGreatGreatGreatGreatGreatGrandparent = function() {
        if(console && console.log){
            console.log("Does the code you write ever work?");
        }

        return this.parent().parent().parent().parent().parent().parent().parent().parent().parent().parent(); 
    };

    $.fn.greatGreatGreatGreatGreatGreatGreatGreatGreatGrandparent = function() {
        if(console && console.log){
            console.log("ಠ_ಠ");
        }

        return this.parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent(); 
    };

    $.fn.greatGreatGreatGreatGreatGreatGreatGreatGreatGreatGrandparent = function() {
        if(console && console.log){
            console.log("(╯°□°）╯︵ ┻━┻");
        }

        return this.parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent(); 
    };
    
    $.fn.greatGreatGreatGreatGreatGreatGreatGreatGreatGreatGreatGrandparent = function() {
        if(console && console.log){
            console.log("ಠ▃ಠ");
        }
        return this.parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent(); 
    };
    
    $.fn.greatGreatGreatGreatGreatGreatGreatGreatGreatGreatGreatGreatGrandparent = function() {
        if(console && console.log){
            console.log("╚(•⌂•)╝");
        }
        return this.parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent(); 
    };
}( jQuery ));
