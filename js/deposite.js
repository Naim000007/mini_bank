// step-1 add event listener to the deposit button 
document.getElementById('btn-deposite').addEventListener('click', function(){
    // step-2 get the deposit amounnt from the deposit input fild 
    // for input field use .value to the value inside the input field
    const depositeField = document.getElementById('deposit-field');
    const newDepositAmountString = depositeField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)

    // setp-3: get the current deposit total 
    const depositeTotalElement = document.getElementById('deposit-total')
    
    const previousDepositTotalString = depositeTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    const currentDepositeTotal = previousDepositTotal + newDepositAmount;

    depositeTotalElement.innerText = currentDepositeTotal;

    //step 5 get balance current total 
    const blacneTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = blacneTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step -6 calculate current  total blacne 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total 
    blacneTotalElement.innerText = currentBalanceTotal;

    

    //step-7 clear the deposit field
    depositeField.value =''
})