/**

	Eric Paheco
	CS-3520
	Midterm question 2
 */
/**
 *
 * splices the array that is past in
 *
 */

 function spliceArr(filtArr, splitList) {
 	for (var i = filtArr.length - 1; i >= 0; i--) {
 		var index = filtArr.indexOf(filtArr[i]);
 		splitList.splice(index, 1);
 	}
 }
 /**
  *
  * filters out our array
  *	only activated if the user put input in the filter form
  *creates array from the filtered values
  */

 function filterList(splitList, filters) {
 	return splitList.filter(function (el) {
 		return el.toLowerCase().indexOf(filters.toLowerCase()) > -1;
 	});
 }

/**
 *
 * adds spans to ourpage
 *
 */

function addSpans(wordList, spanList, wDivs) {
	for (var i = 0; i < wordList.length; i++) {
		spanList.push(document.createElement('span'));
		console.log(spanList[i]);
		spanList[i].innerHTML = wordList[i];
		spanList[i].classList.add("word")
		//adding listitems to our div that has the id words
		wDivs.appendChild(spanList[i]);
	}
}
/**
 *
 * filters the spans on our page
 *
 */

function filterSpans(spanList) {
	// body...
}
// let the party begin
/*===================================
=            main onload            =
===================================*/
window.onload = function () {
	 var btn = document.getElementById('go');
	 btn.addEventListener('click', function () {
	 	var inputstr = document.getElementById('phrase').value;
	 	var split = inputstr.split(/[\s]/);
	 	//the reversed array
	 	var rSplit = split.reverse();
	 	var spans = new Array();
	 	var wordsDiv = document.getElementById('words');
	 	//filter input check
	 	var fil = document.getElementById('filter').value;
	 	wordsDiv.appendChild(document.createElement('br'));

	 	if(fil == ""){
	 		console.log("No filter");
	 		addSpans(rSplit, spans, wordsDiv);
	 	}else{
	 		//call filter funciton;
	 		var filArr = filterList(rSplit, fil);
	 		spliceArr(filArr, rSplit);
	 		addSpans(rSplit, spans, wordsDiv);

	 	}
	 	// wordsDiv.appendChild(document.createElement('br'));

	 	// addSpans(rSplit, spans, wordsDiv);


		//console.log(inputstr);
	 })
	 //end btnEventListener
	
}
/*=====  End of main onload  ======*/