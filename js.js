let myDivs = Array.from(document.querySelectorAll('.min-box .box'));
let click1 =document.getElementById('click1');
let click2 =document.getElementById('click2');
let click3 =document.getElementById('click3');

click1.onmouseover = act1;
click2.onmouseover = act2;
click3.onmouseover = act3;


function act1(){
    remove();
    myDivs[0].classList.add('act');
    myDivs[0].children[0].classList.add('actimg');
    myDivs[0].children[1].classList.add('actsh');
}
function act2(){
    remove();
    myDivs[1].classList.add('act');
    myDivs[1].children[0].classList.add('actimg');
    myDivs[1].children[1].classList.add('actsh');
}
function act3(){
    remove();
    myDivs[2].classList.add('act');
    myDivs[2].children[0].classList.add('actimg');
    myDivs[2].children[1].classList.add('actsh');
}

function remove(){
    myDivs.forEach(function(div){
        div.classList.remove('act');
        div.children[0].classList.remove('actimg');
        div.children[1].classList.remove('actsh');

    })
}