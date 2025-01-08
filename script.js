const modal = document.querySelector('.access-modal');
const input = document.querySelector('.password');
const action = document.querySelector('.submit');
const span = document.querySelector('.check-again');
modal.style.display = 'flex';
modal.showModal();
action.addEventListener('click', (e)=>{
 let val = input.value;
 let password = '19092024.time';

 if (val === password){
  modal.style.display = 'none';
  modal.close();
 }else if(val !== password){
  span.style.color = 'red';
 }
})