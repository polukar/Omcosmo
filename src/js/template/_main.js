let acc = document.getElementsByClassName('question');
let i;
    for (i=0; i < acc.length; i++)
        acc[i].onclick = function () {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('invisible');
        };

let accPrice = document.getElementsByClassName('price-list__headline');
let n;
for (n=0; n < accPrice.length; n++)
    accPrice[n].onclick = function () {
        console.log('123');
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('invisible');
    };

// $(window).load(function() {
//     $("#before-after").twentytwenty();
// });
