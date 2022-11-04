// var buttons = document.querySelectorAll('.tab-button');

// for(let i = 0; i < buttons.length; i++){
//   document.querySelectorAll('.tab-button')[i].addEventListener('click', function(){
//     const buttons = document.querySelectorAll('.tab-button');
//     for(let i = 0; i < buttons.length; i++){
//       buttons[i].classList.remove('orange');
//     }
//     document.querySelectorAll('.tab-button')[i].classList.add('orange');
//     const buttons_div = document.querySelectorAll('.tab-content');
//     for(let i = 0; i < buttons.length; i++){
//       buttons_div[i].classList.remove('show');
//     }
//     document.querySelectorAll('.tab-content')[i].classList.add('show');
//   });
// }

// for (let i = 0; i < $('.tab-button').length; i++){

//   $('.tab-button').eq(i).on('click', function(){
//     탭열기(i)
//   });

// };

// $('.list').click(function(e){
//   if(e.target == document.querySelectorAll('.tab-button')[0]){
//     탭열기(0)
//   }
//   if(e.target == document.querySelectorAll('.tab-button')[1]){
//     탭열기(1)
//   }
//   if(e.target == document.querySelectorAll('.tab-button')[2]){
//     탭열기(2)
//   }
// });

$('.list').click(function(e){
  탭열기(e.target.dataset.id)
});

function 탭열기(구멍){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(구멍).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(구멍).addClass('show');
}