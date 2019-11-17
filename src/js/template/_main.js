let acc = document.getElementsByClassName('question');
let i;
    for (i=0; i < acc.length; i++)
        acc[i].onclick = function () {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('invisible');
        };


$(window).load(function() {
    $("#before-after").twentytwenty();
});
