// Navigation menu toggle
function toggleScroll() {
	if ($('#nav-toggle').prop('checked') === true) {
		$('body').css('overflowY', 'hidden');
	} else {
		$('body').css('overflowY', 'auto');
	}
}

$('#nav-toggle').on('click', toggleScroll);

$("#scrollFeatured, #scrollNews, #scrollCustomise, #scrollSubscribe").click(function () {
	$("#nav-toggle").prop("checked", false);
	$('body').css("overflowY", "auto");
});

// Navigation items
$("#scrollFeatured, #scrollExplore").click(function () {
	$('html,body').animate({
		scrollTop: $("#featured").offset().top - 80
	}, 1000, 'easeInOutQuart');
});

$("#scrollNews").click(function () {
	$('html,body').animate({
		scrollTop: $("#news").offset().top - 75
	}, 1500, 'easeInOutQuart');
});

$("#scrollCustomise").click(function () {
	$('html,body').animate({
		scrollTop: $("#customise").offset().top - 50
	}, 1750, 'easeInOutQuart');
});

$("#scrollSubscribe").click(function () {
	$('html,body').animate({
		scrollTop: $("#subscribe").offset().top
	}, 2000, 'easeInOutQuart');
});

$("#scrollTop").click(function () {
	$('html,body').animate({
		scrollTop: $("#header").offset().top
	}, 2000, 'easeInOutQuart');
});



// Scroll-Out
ScrollOut({
	once: true,
	threshold: .2
});



// Rellax
function myFunction(x) {
	if (x.matches) {
		var rellax = new Rellax('.info__image', { speed: 0 });
	} else {
		var rellax = new Rellax('.info__image', { speed: .5 });
	}
}

var x = window.matchMedia("(max-width: 62.5em)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes



var rellax = new Rellax('.quote', {
	speed: 2.5,
	center: true,
});

var rellax = new Rellax('.custom__card', {
	speed: 2,
	center: true,
});