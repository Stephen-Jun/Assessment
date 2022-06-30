var title = " Hello World ";
console.log(title);


$(document).ready(function($) {

$("div#form1").append(
	$("<form/>", {
		class: 'sample-form',
		action: '#',
		method: '#'
	}).append(
	$("<input/>", 
		{
			type: 'text',
			id: 'first-name',
			name: 'first-name',
			placeholder: 'First Name*',
			required: true
		}),
	$("<input/>", 
		{
			type: 'text',
			id: 'email',
			name: 'email',
			placeholder: 'Email*',
			required: true
		}), 
	$("<input/>", {
		type: 'submit',
		id: 'submit',
		value: 'Schedule Now'
	})))
$(".sample-form").submit(function(){
        alert("Form submitted");
    });
});