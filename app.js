const form_1 = document.querySelector('.form-1');
const form_2 = document.querySelector('.form-2');
const form_3 = document.querySelector('.form-3');
const form_4 = document.querySelector('.form-4');
const message = document.querySelector('.message');
const switch_1 = document.querySelector('.switch_1');
const switch_2 = document.querySelector('.switch_2');
const switch_3 = document.querySelector('.switch_3');
const switch_4 = document.querySelector('.switch_4');

function formOne(){
   form_1.style.opacity = '0';
   form_2.style.opacity= '1';
   form_1.style.zIndex = 0;
   form_2.style.zIndex = 1;
  switch_1.style.background = 'none'
  switch_2.style.background='hsl(206, 94%, 87%)';
}

function formTow(){
   form_2.style.opacity = '0';
   form_2.style.zIndex = 0;
   form_3.style.opacity= '1';
   form_3.style.zIndex= 1;
   switch_2.style.background='none';
   switch_3.style.background='hsl(206, 94%, 87%)';
}
function formThree(){
    form_3.style.opacity = '0';
    form_3.style.zIndex = 0;
    form_4.style.opacity= '1';
    form_4.style.zIndex= 1;
    switch_3.style.background='';
    switch_4.style.background='hsl(206, 94%, 87%)';
  
}

function formFour(){
    message.style.opacity = '1';
    message.style.zIndex = 3;
    message.style.marginTop = '-400px';
    form_4.style.opacity= '0';
    form_4.style.zIndex= 0;
}

// backs
function backTow(){
    form_1.style.opacity = '1';
    form_2.style.opacity= '0';
    form_1.style.zIndex = 1;
    form_2.style.zIndex = 0;
    switch_1.style.background='hsl(206, 94%, 87%)';
    switch_2.style.background='none';
}

function  backThree(){
    form_2.style.opacity = '1';
    form_2.style.zIndex = 1;
    form_3.style.opacity= '0';
    form_3.style.zIndex= 0;
    switch_2.style.background='hsl(206, 94%, 87%)';
    switch_3.style.background='none';
}

function  backFour(){
    form_3.style.opacity = '1';
    form_3.style.zIndex = 1;
    form_4.style.opacity= '0';
    form_4.style.zIndex= 0;
    switch_3.style.background='hsl(206, 94%, 87%)';
    switch_4.style.background='none';
}






