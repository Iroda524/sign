var box = document.querySelectorAll('.box'),
    circle = document.querySelectorAll('.circle');


var funk = function(n){
    box[n].style.backgroundColor = '#2ccc71'
    circle[n].style.transform = 'translateX(60px)'
    box[n+2].style.backgroundColor = '#2ccc71'
    circle[n+2].style.transform = 'translateX(60px)'
    box[n-1].style.backgroundColor = '#f1f1f1'
    circle[n-1].style.transform = 'translateX(0px)'
    box[n+1].style.backgroundColor = '#f1f1f1'
    circle[n+1].style.transform = 'translateX(0px)'
}

var funk2 = function(n){
    box[n-2].style.backgroundColor = '#2ccc71'
    circle[n-2].style.transform = 'translateX(60px)'
    box[n].style.backgroundColor = '#2ccc71'
    circle[n].style.transform = 'translateX(60px)'
    box[n-1].style.backgroundColor = '#f1f1f1'
    circle[n-1].style.transform = 'translateX(0px)'
    box[n+1].style.backgroundColor = '#f1f1f1'
    circle[n+1].style.transform = 'translateX(0px)'
}

circle[0].addEventListener('click', () => funk(0))

circle[1].addEventListener('click', () => funk(1))

circle[2].addEventListener('click', () => funk2(2))

circle[3].addEventListener('click', () => funk2(3))

circle[4].addEventListener('click', () => funk2(4))