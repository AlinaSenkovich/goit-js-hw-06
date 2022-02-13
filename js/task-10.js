function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector(`#controls > input`);
let findBoxEl = document.querySelector(`div#boxes`);
// let clone = findBoxEl.cloneNode(true);
let buttonCreate = document.querySelector(`button[data-create]`);
let buttonDestroy = document.querySelector(`button[data-destroy]`);

  // buttonCreate.addEventListener('click', () =>{
  //   let test = document.querySelector('input').value;
  //   // console.log(test);
  //   return test;
  //   // return document.querySelector('input').value;  
  // });
  const input = document.querySelector('input');
    console.log(input.value);

 buttonCreate.addEventListener('click', () => {
   let amount = divEl.value;   
   createBoxes(amount);  
  });
 
function createBoxes(amount) {
  console.log(findBoxEl);
    let array = []; 
  for(let i = 0; i < amount; i+=1) {
    findBoxEl.style.width = '30';
    // clone.style.height = '30';
     array = findBoxEl;
   }
   console.log(array);
   
}