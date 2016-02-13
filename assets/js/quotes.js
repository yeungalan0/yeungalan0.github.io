//When a quote is added, add a quote to the text file (a single line) with the "- to determine the author, and change home.html and add a new button div with and increased button number
function getQuotes() {
    $.get( "/quotes.txt", function(data) {
	var next = $("#quote").data("current") + 1;
	var lines = data.split("\n");
	//Account for the "" found at the end of the array
	if (next > lines.length - 2) {
	    next = 0;
	}
	var line = lines[next];
	var author = line.slice(line.indexOf('"-') + 1);
	var quote = line.slice(0, line.indexOf('"-') + 1);
	$("#quote").data("current", next);
	setActive(next);
	$("#quote").fadeOut(500, function() { 
	    $("#quote").html(quote + "</br>" + author).fadeIn(500);
	});
    })
}

function getQuote(quoteNumber, clear) {
    if(clear === undefined) {
	clear = true;
   }
    $.get( "/quotes.txt", function(data) {
	if(clear) {
	    clearInterval(quoteInterval);
	}
	var lines = data.split("\n");
	//Account for the "" found at the end of the array
	var line = lines[quoteNumber];
	var author = line.slice(line.indexOf('"-') + 1);
	var quote = line.slice(0, line.indexOf('"-') + 1);
	$("#quote").data("current", quoteNumber);
	setActive(quoteNumber);
	$("#quote").fadeOut(500, function() { 
	    $("#quote").html(quote + "</br>" + author).fadeIn(500);
	});
    })
}

// Set the button of the quote number to an active state
function setActive(quoteNumber) {
    $("#button-" + quoteNumber).toggleClass("active");
    var previous = $("#quote").data("previous");
    if (previous != undefined) {
	$("#button-" + previous).toggleClass("active");
    }
    $("#quote").data("previous", quoteNumber);
}

function addButtons() {
    $.get( "/quotes.txt", function(data) {
	var lines = data.split("\n");
	//Account for the "" found at the end of the array with a -1
	for (var i = 0; i < lines.length - 1; i++) {
	    $(".buttons-container").append('<div class="button-container"><p class="round-button" id="button-' + i + '" onClick="getQuote(' + i + ')"></p></div>');
	}
    })
}
