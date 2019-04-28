let budget = document.getElementsByClassName('budget-value')[0],


    //Получаем кнопку по id
    getBudget = document.getElementById('start'),

    daybudget = document.getElementsByClassName('daybudget-value')[0],

    levelValue = document.getElementsByClassName('level-value')[0],

    expensesValue = document.getElementsByClassName('expenses-value')[0],

    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],

    incomeValue = document.getElementsByClassName('income-value')[0],

    monthSavingValue = document.getElementsByClassName('monthsavings-value')[0],

    yearSavingValue = document.getElementsByClassName('yearsavings-value')[0],

    //Левый верхний блок
    
    
    //Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    //optionalExpenses = document.querySelectorAll("optionalexpenses_1,optionalexpenses_2,optionalexpenses_3");
    optionalExpenses = document.querySelectorAll(".optionalexpenses-item"),
    expensesItem = document.querySelectorAll(".expenses-item"),
    

    btnEquals = document.getElementsByTagName("button")[2],

    optionalexpensesBtn = document.getElementsByClassName('optionalexpenses-btn')[0],
    //кнопка рассчитать
    countBtn = document.getElementsByClassName('count-budget-btn')[0],

    leftBlock = document.getElementsByClassName('data')[0],

    //Статья возможного расхода
    incomeItem = document.querySelector('#income'),

    //Чек бокс
    chechSavings = document.querySelector('#savings'),

    //Поле сумма
    sumValue = document.querySelector('#sum'),

    //Поле процент
    percentValue= document.querySelector('#percent'),

    //Поле год
    yearNow= document.querySelector('.year-value'),

    //Поле месяц
    monthNow= document.querySelector('.month-value'),

    //Поле день
    dayNow= document.querySelector('.day-value');

    

    
let money = 0,
    time = 0;
    
    i = 0;

    countBtn.disabled = true;
    
    optionalexpensesBtn.disabled = true;
    sumValue.disabled = true;
    //expensesBtn.disabled = true;
    leftBlock.style.visibility= "hidden";
    getBudget.style.visibility= "visible";
    


    let exm = document.querySelectorAll('.expenses-item'),
    wbtn = document.querySelector('.expenses-item-btn');

wbtn.style.opacity = 0.5;
wbtn.disabled = true;

for (let i = 0; i < exm.length; i++) {
    exm[i].addEventListener('change', () => {
        let ff = document.querySelector('#expenses_1'),
            gg = document.querySelector('#expenses_2'),
            hh = document.querySelector('#expenses_3'),
            jj = document.querySelector('#expenses_4');
        if (ff.value.length != 0 && gg.value.length != 0 && hh.value.length != 0 && jj.value.length != 0) {
            wbtn.style.opacity = 1;
            wbtn.disabled = false;
        }
    });
}
    
let optExp = document.querySelectorAll('.optionalexpenses-item'),
    wbtn1 = document.querySelector('.optionalexpenses-btn');

    wbtn1.style.opacity = 0.5;
    wbtn1.disabled = true;
    for (let i = 0; i < optExp.length; i++) {
        optExp[i].addEventListener('change', () => {
            let ff = document.querySelector('#optionalexpenses_1'),
                gg = document.querySelector('#optionalexpenses_2'),
                hh = document.querySelector('#optionalexpenses_3');
            if (ff.value.length != 0 && gg.value.length != 0 && hh.value.length != 0) {
                wbtn1.style.opacity = 1;
                wbtn1.disabled = false;
            }
        });
    }


    getBudget.addEventListener('click', function(){
        money = prompt ("Ваш бюджет на месяц", ''),
        time  = prompt('введите дату в формате YYYY-MM-DD', '');
        while(isNaN(money)||money==''||money==null){
            money = +prompt("Ваш бюджет?");
        }
        appData.budget = money;
        appData.timeData = time;
        budget.textContent = money;
        
        yearNow.value = new Date(Date.parse(time)).getFullYear();
        monthNow.value = new Date(Date.parse(time)).getMonth()+1;
        dayNow.value = new Date(Date.parse(time)).getDate();
    
        countBtn.disabled = false;
        
        optionalexpensesBtn.disabled = false;
        sumValue.disabled = false;
        leftBlock.style.visibility= "visible";
    });

  

    

    optionalExpenses[0].addEventListener('input',function() {
        optionalExpenses[0].value = optionalExpenses[0].value.replace(/[^а-я]/,'');
    });

    optionalExpenses[1].addEventListener('input',function() {
        optionalExpenses[1].value = optionalExpenses[1].value.replace(/[^а-я]/,'');
    });

    optionalExpenses[2].addEventListener('input',function() {
        optionalExpenses[2].value = optionalExpenses[2].value.replace(/[^а-я]/,'');
    });

    expensesItem[1].addEventListener('input',function () {
        
        if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
    return false;
        
        });
        
    countBtn.addEventListener('click', function(){
 

        if (money == null || money == ''){
            alert('Вначале нажмите на кнопку Начать рассчёт');
            
        }else{
            let nowTest = expensesValue.textContent;
            console.log(nowTest);
        daybudget.textContent = appData.budgetPerDar = ((money-nowTest)/30).toFixed();
        
        if(appData.maneyPerDay < 100) {
            levelValue.textContent="Минимальный уровень достатка";
                } else if (appData.budgetPerDar > 100 && appData.budgetPerDar < 2000){
                    levelValue.textContent="Средний уровень достатка";
                } else if (appData.budgetPerDar > 2000){
                    levelValue.textContent="Высокий уровень достатка";
                } else {
                    levelValue.textContent="Здесь какая-то ошибка";
                }
        }
    });
    
    wbtn.addEventListener('click', function(){
        let sum = 0;
        let numQu = 1;
    
        for(let i=0; i < expensesItem.length; i++){
    
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
                if((typeof(a))==='string'){
                numQu ++;
                console.log('Это цикл номер '+ i);
                console.log('Это номер расхода '+ numQu);
                appData.expenses[a]=b;
                sum+= +b;
            console.log(sum);
            }else{
            i--;  
            }
            expensesValue.textContent = sum;
        }
    });


    

    optionalexpensesBtn.addEventListener('click', function(){
        for(let i=0;i<optionalExpenses.length;i++){

            let opt = optionalExpenses[i].value;
                
                appData.optionalExpenses[i]=opt;
                console.log('Зачение ' + i + appData.optionalExpenses[i]);
                optionalExpensesValue.textContent += appData.optionalExpenses[i]+ ' ';
            
        }
    });

    
    






incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(',');
    incomeValue.textContent = appData.income;
    //appData.income.sort();
});

chechSavings.addEventListener('click', function(){
    if(appData.savings==true){
        appData.savings=false; 
    }else{
        appData.savings=true; 
    }
});

sumValue.addEventListener('input', function(){
    if(appData.savings==true){
        let sum = +sumValue.value,
            percent = +percentValue.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
            monthSavingValue.textContent= appData.monthIncome.toFixed(1);
            yearSavingValue.textContent = appData.yearIncome.toFixed(1);
            console.log(percent);
    }
});

percentValue.addEventListener('input', function(){
    if(appData.savings==true){
        let sum = +sumValue.value,
        percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingValue.textContent= appData.monthIncome.toFixed(1);
        yearSavingValue.textContent = appData.yearIncome.toFixed(1);
        console.log(percent);
    }
});

appData = {
    budget:money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};