/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Random text

var textarray = ["Hoping This Works", "Learning A New Language", "Blaming the Architecture", "Writing Code that Nobody Else Can Read", "Coding on the Weekend", "Losing My Will To Live", "Trying Stuff Untill it Works", "Googling the Error Message",
  "Rationalising My Awful Hackjob", "Getting it to Work", "Implementing Dumb Features", "Blaming the User", "Changing Stuff and Seeing What Happens", "Making Excuses for Not Writing Documentation", "Deleting Code", "Turning Coffee Into Code", 
  "Hoping Nobody Hacks Me", "Ignoring Deprecation Warnings", "Copying and Pasting from Stack Overflow", "Getting an Arduino LED to Blink", "Taking on Needless Dependencies", "Pretending to Know About Stuff", "Hoping that it is Good Enough to Shp", 
  "Hating on Languages I Don't Use", "Forgetting How My Own Code Works", "Procrastinating", "Making Exuses for Not Writing Unit Tests", "Using Regex by Trial and Error"];

function RndText() 
{
    var rannum = Math.floor(Math.random() * textarray.length);
    
    $('#random_text').fadeOut(800, function() { 
        $(this).text(textarray[rannum]).fadeIn(800);
    });
}

$(function() {
    // Call the random function when the DOM is ready:
    RndText(); 
});
var inter = setInterval(function() { RndText(); }, 3000);

// Changing text 

$(function () {
  count = 0;
  wordsArray = ["Hoping This Works", "Learning A New Language", "Blaming the Architecture", "Writing Code that Nobody Else Can Read", "Coding on the Weekend", "Losing My Will To Live", "Trying Stuff Untill it Works", "Googling the Error Message",
  "Rationalising My Awful Hackjob", "Getting it to Work", "Implementing Dumb Features", "Blaming the User", "Changing Stuff and Seeing What Happens", "Making Excuses for Not Writing Documentation", "Deleting Code", "Turning Coffee Into Code", 
  "Hoping Nobody Hacks Me", "Ignoring Deprecation Warnings", "Copying and Pasting from Stack Overflow", "Getting an Arduino LED to Blink", "Taking on Needless Dependencies", "Pretending to Know About Stuff", "Hoping that it is Good Enough to Shp", 
  "Hating on Languages I Don't Use", "Forgetting How My Own Code Works", "Procrastinating", "Making Exuses for Not Writing Unit Tests", "Using Regex by Trial and Error"];
  setInterval(function () {
    var rannum = Math.floor(Math.random() * textarray.length);
    count++;
    $("#word").fadeOut(800, function () {
      $(this).text(wordsArray[rannum]).fadeIn(800);
    });
  }, 6000);
});

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});

})(jQuery);
