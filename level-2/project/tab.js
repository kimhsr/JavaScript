var buttons = document.querySelectorAll('.tab-button');

for(let i = 0; i < buttons.length; i++){
  document.querySelectorAll('.tab-button')[i].addEventListener('click', function(){
    const buttons = document.querySelectorAll('.tab-button');
    for(let i = 0; i < buttons.length; i++){
      buttons[i].classList.remove('orange');
    }
    document.querySelectorAll('.tab-button')[i].classList.add('orange');
    const buttons_div = document.querySelectorAll('.tab-content');
    for(let i = 0; i < buttons.length; i++){
      buttons_div[i].classList.remove('show');
    }
    document.querySelectorAll('.tab-content')[i].classList.add('show');
  });
}