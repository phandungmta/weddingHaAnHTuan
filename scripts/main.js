// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('name');

// Gắn biến vào nội dung thẻ p
const output = document.getElementById("ten");
const output2 = document.getElementById("ten2");

if (output == null) myParam= "";
output.innerHTML = myParam;
output2.innerHTML = myParam;


   
})

var player = document.getElementById('player');
function autoPlayMusic() {
    player.play();
}




// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: target.offset().top
                },
                1000,
                function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                }
            );
        }
    }
});
