// Step-1 add event listener to deposit button

document.getElementById('btn_dposit').addEventListener('click', function () {
  // Step-2 get the deposit amount from the deposit field 
  // for input field use.value to the value inside input field

  const depoistField = document.getElementById('deposit-field');
  const newDepositAmountString = depoistField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  //  Step-3 get to current deposit total amount
  // for non input (element other input textarea), use inner text get the text  

  // Step-7 clear the deposit feild 
  depoistField.value = '';

  if (isNaN(newDepositAmount)) {
    alert('Please porvide a valid number');
    return;
  }

  const depositTotalElement = document.getElementById('deposit_total');
  const previousDepositTotaString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotaString);
  // Step-4 add numbers to set the total deposit 
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  // set the deposit total 
  depositTotalElement.innerText = currentDepositTotal;
  // Step-5 get ballance current total
  const ballanceTotalElement = document.getElementById('balance_total');
  const previousBalanceTotalString = ballanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // Step-6 calculate current total balance 
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // set the balance total 
  ballanceTotalElement.innerText = currentBalanceTotal;


})