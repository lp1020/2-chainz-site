var x = document.getElementById("myAudio");

function playAudio() {
    x.play();
}


var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);

    return false;
});




function validateForm() {
    var form = document.getElementById("newsletter-form");
    var submitbtn = document.getElementById("submit-button");
    var x = document.forms["subscribeForm"]["email"].value;
    var y = document.forms["subscribeForm"]["zipcode"].value;
    if (x == "" || y == "") {
        alert("Both fields must be filled out");
        return false;
    }
    alert("Thank you for submitting!")
}
