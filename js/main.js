// for make the navbar sticky when scrolling
$(window).scroll(function(){
    if ($(window).scrollTop()) {
        $("nav").addClass("Add-Shadow");
        $(".container").removeClass("Add-Border");
        $("header nav ul li a").addClass("changeClr");
        $("header nav .contact").addClass("changeClr");
        $("header nav .nav-link:first-child").removeClass("homeTitlColor");
    } else {
        $("nav").removeClass("Add-Shadow");
        $(".container").addClass("Add-Border");
        $("header nav ul li a").removeClass("changeClr");
        $("header nav .contact").removeClass("changeClr");
        $("header nav .collapse ul li:first-of-type a").addClass("homeTitlColor");
    }
});

const preloader = document.querySelector('.loaders');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(function () {
            preloader.remove();
            }, 1700);
        });
    }
    

        /* Counter - CountTo */
	var a = 0;
	$(window).scroll(function() {
		if ($('#numbers').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors
			var oTop = $('#numbers').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);
					//alert('finished');
					}
				});
			});
			a = 1;
			}
		}
    });


    AOS.init({
        // Settings that can be overridden on per-element basis, by data-aos-* attributes:
        //offset: 120, // offset (in px) from the original trigger point
        //delay: 0, // values from 0 to 3000, with step 50ms
        //duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });