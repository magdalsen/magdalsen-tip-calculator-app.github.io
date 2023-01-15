const findSelected = () => {
    const selected = document.querySelector("input[name='tip']:checked").value;
    if (customBtnInput.value !== '') {
        const tipAmount = Number(bill.value) * Number(customBtnInput.value) / 100 / Number(people.value);
        const tipTotal = ((Number(bill.value) * Number(customBtnInput.value) / 100) + Number(bill.value)) / Number(people.value);
    
        result_tipAmount.innerHTML = Math.round(tipAmount * Math.pow(10, 2)) / Math.pow(10, 2);
        result_tipTotal.innerHTML = Math.round(tipTotal * Math.pow(10, 2)) / Math.pow(10, 2);
    } else {
        const tipAmount = Number(bill.value) * Number(selected) / Number(people.value);
        const tipTotal = ((Number(bill.value) * Number(selected)) + Number(bill.value)) / Number(people.value);
    
        result_tipAmount.innerHTML = Math.round(tipAmount * Math.pow(10, 2)) / Math.pow(10, 2);
        result_tipTotal.innerHTML = Math.round(tipTotal * Math.pow(10, 2)) / Math.pow(10, 2);
    }
};

//validation
const warningNotEmptyField = document.getElementById('warningNotEmptyField');
const startCount = () => {
    if (people.value === '' || people.value === '0') {
        document.getElementById('result_tipAmount').value = 0;
        warningNotEmptyField.innerHTML = "Can't be zero";
        return
    } else {
        findSelected();
        warningNotEmptyField.innerHTML = '';
    }
}

//bill
const bill = document.querySelector('#bill');
bill.addEventListener('input', startCount);

//people
const people = document.querySelector('#people');
people.addEventListener('input', startCount);

//tip
const tip = document.querySelectorAll("input[name='tip']");
const result_tipAmount = document.getElementById('result_tipAmount');
const result_tipTotal = document.getElementById('result_tipTotal')
tip.forEach(radioBtn => {
    radioBtn.addEventListener('change', startCount);
});

//custom
const customBtnInput = document.querySelector('#customBtnInput');
customBtnInput.addEventListener('input', startCount);

const customValue = () => {
    document.querySelector('#customBtn').classList.add("notVisibile");
    document.querySelector('#customBtnInput').classList.remove("notVisibile");
    document.querySelector('#customBtnInput').classList.add("visibile");
}

//reset
const resetBtn = () => {
    document.querySelector('#bill').value = '';
    document.querySelector('#people').value = '';
}