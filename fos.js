const back = document.querySelector('#bg'),
      w1 = document.querySelector('#w1'),
      w2 = document.querySelector('#w2'),
      w3 = document.querySelector('#w3'),
      bArr = [w1,w2,w3],
      girl = document.querySelector('#girl'),
      intro = document.querySelector('.intro'),
      control = document.querySelector('.scroll-text'),
      stageArr = control.querySelectorAll('p'),
      range = intro.getBoundingClientRect();

control.addEventListener('scroll', triggerEffect);
//console.log(range);

function triggerEffect(){
  //console.log('event');
  stageArr.forEach((item) => {
    let coords = item.getBoundingClientRect();

    if(coords.top < range.bottom && coords.top > (range.top - 5)) applyEfect(item.id);

  });
}

function applyEfect(id){
  switch(id) {

  case '':
    blurEl(back);
    blurEl(girl);
    break;
  case 'f':
    focusEl(girl);
    show(girl);
    break;
  case 'p1':
    focusEl(back);
    show(w1);
    break;
  case 'p2':
    show(w2);
    break;
  case 'p3':
    show(w3);
    break;
}
}

function focusEl(el){
  el.style.filter = 'none';
}

function blurEl(el){
  el.style.filter = 'blur(3px)';
}

function show(el){
  el.classList.remove('hidden');
  bArr.forEach((item) => {
    if(el !== item) item.classList.add('hidden');
  });
}

window.onload = function(){
  //console.log('loaded');
  triggerEffect();
}
