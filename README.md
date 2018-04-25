Don't forget the data-vname because that is the name that will use in message.

<form>
	<input type="text" name="field_1" id="field_1" placeholder="Field 1*" data-vname="Field 1">
	<input type="text" name="field_2" id="field_2" placeholder="Field 2*" data-vname="Field 2">
	<div class="error_message_holder"></div>
	<input type="submit" name="submit_btn" id="submit_btn" value="SUBMIT">
</form>


var required_fields = {
	'required_1' : 'is required please insert some value',
	'required_2' : 'default',
};

jsValidation( required_fields );

Enter the callback in line 47