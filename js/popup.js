var btn = document.querySelector('btn');

btn.addEventListener('click', function () {
    var myModal = document.getElementById('myModal');
    if (myModal.style.visibility == 'hidden') {
        myModal.style.visibility = 'visible';
        myModal.style.opacity = '1';
    } else {
        myModal.style.visibility = 'hidden';
        myModal.style.opacity = '0';
    }

});