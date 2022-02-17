
// function for getting input field and get input field number.
function getInputValue(inputId){
   const inputField = document.getElementById( inputId + '-field');
   const inputValue = parseInt(inputField.value); 
   return inputValue
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
  const balance       =  myIncome - totalExpenses

   const myBalance = document.getElementById('income-field').value;

   // validation 1. if input field value is negative. 
   if( myIncome < 0 || foodCost < 0 || rentCost < 0 || clothesCost <0 ){
      alert('sorry! nagative number are not alowed ')
   } 
      // validation 2. if my expenses amount greater than my money
  else if(totalExpenses < myBalance){
     //   totalExpense update on html 
      document.getElementById('total-expenses').innerText = totalExpenses
      document.getElementById('balance').innerText = balance
   } else{
      alert("Sorry! you don't have enough balance. ")
   }
})