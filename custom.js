//A Self Invoking Function

$(function () {

	//A group of objects held in an array
	var people = [{name:  },{},{},{}]
	
	var $tableBody = $('<tbody></tbody>');
	for (var i = 0; i < results.length; i++) {
		var person = results[i];
		var row = $('<tr></tr>');
		$row = $('<tr></tr>')
		$row.append($('<td></td>')).text(person.name));
		$row.append($('<td></td>')).text(person.rate));		
		$tableBody.append( $row );
	}

	//Add the new content after the body of the page.
	$('thead').after($tableBody);
});