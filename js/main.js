function askQuestions() {

	var firstName = prompt ('What is your first name?').trim();
	var lastName = prompt ('What is your last name?').trim();
	var fullName = firstName + ' ' + lastName;


	console.log(fullName);

	var age = prompt ('How old are you?')
	age = parseInt(age);

	if (age >= 18) {

		console.log('User is an adult'); 

	} 

	else if (age >= 13) {

		console.log ('User is a teenager');

	}

	 else {

		console.log ('User is a child');
	}


	/*
		If the user's first name is 'General' and their 
		last name is NOT 'Assembly, then greet the general!
		(Hint: Use console.log)
	*/

	if (firstName.toLowerCase().trim() === 'general' && lastName.toLowerCase().trim() !== 'assembly') {

		console.log ('Greetings ' + firstName + ' ' +lastName);
	}

}


//When the page is loaded
$(function() {


	$('img').on('click', askQuestions);

	// When the user clicks an h3
	$('h3').on('click',function (){

		//Toggle the next element, don't need to use hide
		$(this).next().slideToggle();


	});

});
