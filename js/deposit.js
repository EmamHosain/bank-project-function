// console.clear();


// 1. get input value with number using getInputFieldById function

function getInputFieldById(inputId){
const inputFieldId = document.getElementById(inputId);
const inputFieldValueString = inputFieldId.value;
const inputFieldValueNumber = parseFloat(inputFieldValueString);
inputFieldId.value = '';
return inputFieldValueNumber;
}

// 2. get element text value with number using function

function getElementTextValueById(elementId){
    const elementsId = document.getElementById(elementId);
    const elementValueString = elementsId.innerText;
    const elementValueNumber = parseFloat(elementValueString);
    return elementValueNumber;
}


// 3. input field value put into the text elements


function getAdditionElementNumber(elementNumber,inputValue){
   
    const addition = elementNumber + inputValue;
    return addition;
}


function getSubElementNumber(elementNumber,inputValue){
   
    const sub = elementNumber - inputValue;
    return sub;
}


// --------------------------Push Deposit Money--------------------------------------
 document.getElementById('deposit_btn').addEventListener('click',function(){
   
 const getDepositInputNumber = getInputFieldById('deposit_inputField');
 const getDepositPrevNumber = getElementTextValueById('deposit_taka');
 const depositTotalAmount = getAdditionElementNumber(getDepositInputNumber,getDepositPrevNumber);
  document.getElementById('deposit_taka').innerText = depositTotalAmount;
  const getBalanceNumber = getElementTextValueById('balance');
  const getTotalBalance = getAdditionElementNumber(getBalanceNumber,getDepositInputNumber);
  document.getElementById('balance').innerText = getTotalBalance;

})


// ------- ------- ------- ------- -------Withdraw Money------ ------- ------- ------- ------- -------

document.getElementById('withdraw_btn').addEventListener('click',function(){
   const getWithdrawInputBalanceElementNumber = getInputFieldById('withdraw_inputField');
   const getWithdrawElementValue = getElementTextValueById('withdraw_balance');
   const getTotalWithdrawBalance = getAdditionElementNumber(getWithdrawElementValue,getWithdrawInputBalanceElementNumber);

   document.getElementById('withdraw_balance').innerText = getTotalWithdrawBalance;
   
   const getsBalanceElementNumber = getElementTextValueById('balance');
   const currentBalance = getSubElementNumber(getsBalanceElementNumber,getWithdrawInputBalanceElementNumber);
   document.getElementById('balance').innerText = currentBalance;

})