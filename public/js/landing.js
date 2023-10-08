let user_popup = document.querySelectorAll('.user_popup');

function examine(){

}

function u_pop(){
user_popup.forEach((elem)=>{
elem.classList.toggle('hidden');
console.log('================================');
});

}
let skillSelected=[];
function chooseSkills(e){
e.classList.toggle('skill-true');
console.log(e.className);
if(e.className=="skill-true"){
skillSelected.push(e.innerText);
}else{
   skillSelected.splice(skillSelected.indexOf(e.innerText)); 
}
console.log(skillSelected);
}

function chooseSkills2(e){
    e.classList.toggle('skill-true2');
}

const all = document.querySelector('.all');
let already=null;
const data_title = document.querySelector('#data_title');

function chooseSkills3(e){
data_title.innerText = e.innerText;
    console.log(data_title.innerText);

    if(already==null){
        e.classList.toggle('skill-true3');
        already=e;
    }else{
        e.classList.toggle('skill-true3');
        already.classList.toggle('skill-true3');
        already=e;

    }
}
chooseSkills3(all);





function seeAllRecomm(e){
if(e.innerText=='See more'){
const recommandBar =e.parentNode.parentNode;
recommandBar.style.height="100%";
e.innerText='See less';
}else{
const recommandBar =e.parentNode.parentNode;
recommandBar.style.height="600px";
e.innerText='See more';
}
}


const containerRecomm = document.querySelector('.containerRecomm');

function createElements(){
const p = document.createElement('div');
p.classList.add('p');
const p1 = document.createElement('div');
p1.classList.add('p1');
const p2 = document.createElement('div');
const h3 =document.createElement('h3');
h3.classList.add('h3');

containerRecomm.appendChild(p);
p.appendChild(p1);
p.appendChild(p2);
p2.appendChild(h3);
h3.innerText='Hello World!!'



p.addEventListener('click',()=>{

    backfromproject();

});

}

createElements();

const projectPage = document.querySelector('.projectPage');

function backfromproject(){
projectPage.classList.toggle('hidden');
}
backfromproject()




