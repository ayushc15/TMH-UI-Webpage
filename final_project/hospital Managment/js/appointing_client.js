$response= "";

function cngdpt() {
	switch( $('#dept').val())
	{
		case "0": alert("Please select at least one department");
				break;
		case "1": 
				$('#div_dept').hide();
				$('#dept_1').show();
				$response = "you have a appointment of the department 'A' ";
				break;
		case "2": 
				$('#div_dept').hide();
				$('#dept_2').show();
				$response = "you have a appointment of the department 'B' ";
				break;
		default:alert("Please select at least one department");
	}
}

function doctime() {
	switch( $('#doct1').val())
	{
		case "0": alert("Please select at least one doctor");
				break;
		case "1": 
				$('#dept_1').hide();
				$('#doct-E').show();
				$response += "\n from the doctor 'E' ";
				break;
		case "2": 
				$('#dept_1').hide();
				$('#doct-F').show();
				$response += "\n from the doctor 'F' ";
				break;
		default:alert("Please select at least one doctor");
	}
}

function doctime2() {
	switch( $('#doct2').val())
	{
		case "0": alert("Please select at least one doctor");
				break;
		case "1": 
				$('#dept_2').hide();
				$('#doct-I').show();
				$response += "\n from the doctor 'I' ";
				break;
		case "2": 
				$('#dept_2').hide();
				$('#doct-J').show();
				$response += "\n from the doctor 'J' ";
				break;
		default:alert("Please select at least one doctor");
	}
}

function cmt1() {
	switch( $('#doctETime').val())
	{
		case "0": alert("Please select at least one doctor");
				break;
		case "1": 
				$('#doct-E').hide();
				$('#cmt').show();
				$response += "\n at time 10:00 - 12:00 ";
				break;
		case "2": 
				$('#doct-E').hide();
				$('#cmt').show();
				$response += "\n at time 3:00 - 5:00 ";
				break;
		default:alert("Please select at least one doctor");
	}
}

function cmt2() {
	switch( $('#doctFTime').val())
	{
		case "0": alert("Please select at least one doctor");
				break;
		case "1": 
				$('#doct-F').hide();
				$('#cmt').show();
				$response += "\n at time 10:00 - 12:00 ";
				break;
		case "2": 
				$('#doct-F').hide();
				$('#cmt').show();
				$response += "\n at time 3:00 - 5:00 ";
				break;
		default:alert("Please select at least one doctor");
	}
}
function cmt3() {
	switch( $('#doctITime').val())
	{
		case "0": alert("Please select at least one doctor");
				break;
		case "1": 
				$('#doct-I').hide();
				$('#cmt').show();
				$response += "\n at time 10:00 - 12:00 ";
				break;
		case "2": 
				$('#doct-I').hide();
				$('#cmt').show();
				$response += "\n at time 3:00 - 5:00 ";
				break;
		default:alert("Please select at least one doctor");
	}
}

function cmt4() {
	switch( $('#doctJTime').val())
	{
		case "0": alert("Please select at least one doctor");
				break;
		case "1": 
				$('#doct-J').hide();
				$('#cmt').show();
				$response += "\n at time 10:00 - 12:00 ";
				break;
		case "2": 
				$('#doct-J').hide();
				$('#cmt').show();
				$response += "\n at time 3:00 - 5:00 ";
				break;
		default:alert("Please select at least one doctor");
	}
}

function resp(){
	$('#cmt').hide();
	$response += "\n and your problem is :-" + $('#cmt-dct').val();
	alert($response);
}