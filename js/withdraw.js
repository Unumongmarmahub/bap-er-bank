/*
 
1. add event handler with the withdraw btn
2. get the withdraw amount form the withdraw input field
2-5 also make sure to convert the input into a number by using parseFolt
3. get previous withdraw total 
4. calculate total withdraw amount
4-5. set total withdraw amount 
5. get the previous balance total 
6. calculate new balnce total
6-5. set the new balance total 
7. clear the input feild
*/
// Step 1
document.getElementById('btn_withdraw').addEventListener('click', function () {
  // Step 2
  const withdrawField = document.getElementById('withdraw_field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // Step 7
  withdrawField.value = '';

  if (isNaN(newWithdrawAmount)) {
    alert('Please porvide a valid number');
    return;
  }
  // Step 3
  const WithdrawTotalElement = document.getElementById('withdraw_total');
  const previousWithdrawTotalString = WithdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


  // Step 5 
  const ballanceTotalElement = document.getElementById('balance_total');
  const previousBalanceTotalString = ballanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);



  if (newWithdrawAmount > previousBalanceTotal) {
    alert('WannuChing Marama Tomar Bank a ato Tk nai');
    return;
  }
  // Step 4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  WithdrawTotalElement.innerText = currentWithdrawTotal;

  // Step 6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  ballanceTotalElement.innerText = newBalanceTotal;



})