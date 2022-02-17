
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

  const totalExpenses = foodCost + rentCost + clothesCost;
  const balance       =  myIncome - totalExpenses
  console.log(totalExpenses);
//   totalExpense update on html 
document.getElementById('total-expenses').innerText = totalExpenses
document.getElementById('balance').innerText = balance


})