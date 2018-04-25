/**
 * Validate the form via ajax
 * @param  object required_fields required fields to validate
 * @return string                 message
 */
function jsValidation( required_fields ) {
	var message = '<ul>';

	/* Checker if all of the required fields have value */
	var counter = 0;

	/* Loop the required fields */
	for( id in required_fields ) {
		/* Field name that place in error */
		var field_name = $( '#'+ id ).data( 'vname' );

		/* Field value */		
		var field_value = $( '#'+ id ).val();

		/* Check the value if is empty */
		if ( field_value == '' || field_value == null ) {
			/* Check if the value is default then place the default error message */
			if ( required_fields[id] == 'default' ) {
				message += '<li>'+ field_name +' is required</li>';
			}
			/* If is not default then place the custom error message */
			else {
				message += '<li>'+ field_name +' '+ required_fields[id]+'</li>';
			}

			counter++;
		}
	}

	message += '</ul>';

	/* Place the error message */
	if ( counter != 0 ) {
		$( '.error_message_holder' ).removeClass( 'processing' ).addClass( 'errors' ).html( message ).slideDown();
	}
	/* Proceed to ajax validation */
	else {
		$( '.error_message_holder' ).slideUp( function() {
			message = '<p>Processing...</p>';
			$( this ).removeClass( 'errors' ).addClass( 'processing' ).html( message ).slideDown( function() {
				/* Enter your code... */
				
			} );
		} );
	}
}