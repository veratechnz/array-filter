//A Self Invoking Function

//Data about people goes here

	var people = [

		{
			name: 'Casey',
			rate: 60
		},
		{
			name: 'Camille',
			rate: 80
		},
		{
			name: 'Gordon',
			rate: 75
		},
		{
			name: 'Nigel',
			rate: 120
		}

	];

	// Filtering Code
	//This new array will hold all of the matching results
	var results = [];
	//The foreach method can target an array and can apply the same anonymous function
	//The anonymous callback below acts like a filter. 
	people.forEach(function(person){
		if (person.rate >= 65 && person.rate <= 90) {
			results.push(person);
		}
	});


$(function () {
	
	var $tableBody = $('<tbody></tbody>');
	for (var i = 0; i < results.length; i++) {
		var person = results[i];
		var row = $('<tr></tr>');
		$row = $('<tr></tr>')
		$row.append($('<td></td>').text(person.name));
		$row.append($('<td></td>') .text(person.rate));		
		$tableBody.append( $row );
	}

	//Add the new content after the body of the page.
	$('thead').after($tableBody);
});

