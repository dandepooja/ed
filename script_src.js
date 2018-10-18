function validateForm()
{
	let x=document.forms["myForm"]["name"].value;
	let y=document.forms["myForm"]["email"].value;
	let z=document.forms["myForm"]["message"].value;
	if(x.value=" ")
	{
			windows.alert("Please enter your name");
			x.focus();
			return false;
	}
	if(y.value=" ")
	{
		window.alert("please enter your email id")
		y.focus();
		return false;
	}
	if(z.value=" ")
	{
		window.alert("please enter your message")
		z.focus();
		return false;
	}
	else
	{
		window.alert("Succefully sent");
	}
	return true;
}
