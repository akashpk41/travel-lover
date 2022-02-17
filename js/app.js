
// function for getting input field and get input field number.
function getInputValue(inputId){
   const inputField = document.getElementById( inputId + '-field');
   const inputValue = parseInt(inputField.value); 
   return inputValue
}

// get income input field for calculation.
function getIncomeAmount(){
   const incomeBalanceText = document.getElementById('income-field');
   const incomeBalance = parseInt(incomeBalanceText.value);
   return incomeBalance
}



// handler for calculate button
const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click',function(){
  const myIncome = getInputValue('income');
  const foodCost = getInputValue('food');
  const rentCost = getInputValue('rent');
  const clothesCost = getInputValue('clothes');
// debugger;
  const totalExpenses = foodCost + rentCost + clothesCost;
  const balance       =  myIncome - totalExpenses;

   const myBalance = getIncomeAmount();

   // validation 1. if input field value is negative. 
   if( myIncome < 0 || foodCost < 0 || rentCost < 0 || clothesCost <0 ){
      alert('sorry! nagative number are not allowed ')
   } 
      // validation 2. if my expenses amount greater than my money
  else if(totalExpenses < myBalance){
     //   totalExpense update on html 
      document.getElementById('total-expenses').innerText = totalExpenses
      document.getElementById('balance').innerText = balance
   } else{
      alert("Sorry! you don't have enough balance. ")
   }
});

// event handler for save amount button
const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click',function(){
   // debugger;
   const myBalance = getIncomeAmount();
  const saveSomeMoneyText = document.getElementById('save-field');
  const saveSomeMoney = parseInt(saveSomeMoneyText.value)
  const savingAmount = myBalance % saveSomeMoney    ;

  console.log(savingAmount);



})