(function ($) {
    "use strict";
//

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    new WOW().init();
    //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });
    //
    document.addEventListener("DOMContentLoaded", () => {
        const navLinks = document.querySelectorAll(".nav-link");
        const sections = document.querySelectorAll("section");

        const toggleActiveClass = () => {
            let index = sections.length;

            while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

            navLinks.forEach(link => link.classList.remove("active"));
            navLinks[index].classList.add("active");
        };

        toggleActiveClass();
        window.addEventListener("scroll", toggleActiveClass);
    });



    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 150,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    //
    document.getElementById("helloBtn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevents page reload
        // alert("Message sent to you!"); // Message will appear in the console (or you can use email/other integrations)

        // Show the thank you modal
        var myModal = new bootstrap.Modal(document.getElementById('thankYouModal'), {
            keyboard: false
        });
        myModal.show();
    });
    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


})(jQuery);

