document.querySelectorAll('.tab-button')[0].addEventListener('click', function(){
  const buttons = document.querySelectorAll('.tab-button');
  for(let i = 0; i < buttons.length; i++){
    buttons[i].classList.remove('orange');
  }
  document.querySelectorAll('.tab-button')[0].classList.add('orange');
  const buttons_div = document.querySelectorAll('.tab-content');
  for(let i = 0; i < buttons.length; i++){
    buttons_div[i].classList.remove('show');
  }
  document.querySelectorAll('.tab-content')[0].classList.add('show');
});

document.querySelectorAll('.tab-button')[1].addEventListener('click', function(){
  const buttons = document.querySelectorAll('.tab-button');
  for(let i = 0; i < buttons.length; i++){
    buttons[i].classList.remove('orange');
  }
  document.querySelectorAll('.tab-button')[1].classList.add('orange');
  const buttons_div = document.querySelectorAll('.tab-content');
  for(let i = 0; i < buttons.length; i++){
    buttons_div[i].classList.remove('show');
  }
  document.querySelectorAll('.tab-content')[1].classList.add('show');
});

document.querySelectorAll('.tab-button')[2].addEventListener('click', function(){
  const buttons = document.querySelectorAll('.tab-button');
  for(let i = 0; i < buttons.length; i++){
    buttons[i].classList.remove('orange');
  }
  document.querySelectorAll('.tab-button')[2].classList.add('orange');
  const buttons_div = document.querySelectorAll('.tab-content');
  for(let i = 0; i < buttons.length; i++){
    buttons_div[i].classList.remove('show');
  }
  document.querySelectorAll('.tab-content')[2].classList.add('show');
});