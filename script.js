const warningNotEmptyField = document.getElementById('warningNotEmptyField');
const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const tip = document.querySelectorAll("input[name='tip']");
const result_tipAmount = document.getElementById('result_tipAmount');
const result_tipTotal = document.getElementById('result_tipTotal');
const customBtnInput = document.querySelector('#customBtnInput');
const resetBtn = document.querySelector('.app__reset--button');

const calculateTip=(tip)=>{
    return Math.round(tip * Math.pow(10, 2)) / Math.pow(10, 2);
}

const findSelected = () => {
    const selected = document.querySelector("input[name='tip']:checked").value;
    let tipAmount;
    let tipTotal;
    let counter;
    if (customBtnInput.value !== '') {
        counter = Number(bill.value) * Number(customBtnInput.value);
        tipAmount = counter / 100 / Number(people.value);
        tipTotal = (counter / 100) + Number(bill.value) / Number(people.value);
    } else {
        counter = Number(bill.value) * Number(selected);
        tipAmount = counter / Number(people.value);
        tipTotal = (counter) + Number(bill.value) / Number(people.value);
    }
    result_tipAmount.innerHTML = `$${calculateTip(tipAmount)}`;
    result_tipTotal.innerHTML = `$${calculateTip(tipTotal)}`;
};

//validation
const startCount = () => {
    if (people.value === '' || people.value === '0') {
        document.getElementById('result_tipAmount').value = '$0.00';
        warningNotEmptyField.innerHTML = "Can't be zero";
        people.style.border = 'solid red';
    } else {
        findSelected();
        warningNotEmptyField.innerHTML = '';
    }
}

//bill
bill.addEventListener('input', startCount);

//people
people.addEventListener('input', startCount);

//tip
tip.forEach(radioBtn => {
    radioBtn.addEventListener('change', startCount);
});

//custom
customBtnInput.addEventListener('input', startCount);

const customValue = () => {
    document.querySelector('#customBtn').classList.add("notVisible");
    document.querySelector('#customBtnInput').classList.remove("notVisible");
    document.querySelector('#customBtnInput').classList.add("visible");
}

customBtnInput.addEventListener('click', customValue);
document.querySelector('#customBtn').addEventListener('click', customValue);

//reset
const resetAllValues = () => {
    document.querySelector('#bill').value = '';
    document.querySelector('#people').value = '';
    document.querySelector('#customBtnInput').value = '';
    warningNotEmptyField.innerHTML = '';
    people.style.border = '';
    document.getElementById('result_tipAmount').innerHTML = '$0.00';
    document.getElementById('result_tipTotal').innerHTML = '$0.00';
}

resetBtn.addEventListener('click', resetAllValues);