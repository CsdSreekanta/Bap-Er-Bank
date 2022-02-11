// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount= parseFloat(depositInput.value);
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotal.innerText);
   const  newDepositTotal = newDepositAmount + previousDepositTotal;
  depositTotal.innerText = newDepositTotal;

  /// update balance account
  const totalBalance = document.getElementById('total-balance');
  const previousBalance = parseFloat(totalBalance.innerText);
  const updatedTotalBalace = previousBalance + newDepositAmount;
  totalBalance.innerText= updatedTotalBalace;
   
    depositInput.value = '';
  })
  //withdraw portion
  document.getElementById('withdraw-btn').addEventListener('click', function(){
      const withdrawInput = document.getElementById('withdraw-input');
      const withdrawAmount = parseFloat(withdrawInput.value);
      const totalWithdraw = document.getElementById('total-withdraw');
      const previousWithdraw = parseFloat(totalWithdraw.innerText);
      newTotalWithdraw = withdrawAmount + previousWithdraw;
      totalWithdraw.innerText= newTotalWithdraw;
      //clear
      withdrawInput.value= '';

      // updated balance
      const totalBalance = document.getElementById('total-balance');
      const previousBalance = parseFloat(totalBalance.innerText);
      const updateTotalBalance = previousBalance - withdrawAmount;
      totalBalance.innerText= updateTotalBalance;

  })