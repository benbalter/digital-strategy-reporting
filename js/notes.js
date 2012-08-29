jQuery( document ).ready( function($) { 
	$.each( $('.step'), function( k, v ) {
		document.getElementById( $(v).attr('id') ).addEventListener( "impress:stepenter", function(){
			
			notes = $('.active').children('.notes');
	
			if ( notes && notes.html().length > 0 ) 
				console.log( notes.html() );
		
		});
	})
});
