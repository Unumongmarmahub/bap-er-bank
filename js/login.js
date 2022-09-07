
// step: 1 add click event handler with the submit button 
document.getElementById('btn_submit').addEventListener('click', function () {

  // step: 2 get the email address inside the email input feild 
  // always remamber to use (dot).value to get text form an input feild 
  const emailFild = document.getElementById('user_email');
  const email = emailFild.value;

  // step: 3 get passward 
  // 3.a: set id on the html element 
  // 3.b: get the element 
  // 3.c: get the value from the element 
  const passwarField = document.getElementById('user_passward');
  const passward = passwarField.value;
  
  // Danger: DO NOT VERYFY email passward on the clint side
  // step:4 veryfy email and passward and check whether valid user or not 
  if (email === 'sontan@gmail.com' && passward === 'secret') {
    window.location.href = 'bank.html';
  }
  else {
    alert('Tui Passward bule gesos!!! Toke ami tajjo sontan gosona dilam.')
  }
})