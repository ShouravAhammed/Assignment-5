const seatClicks = document.querySelectorAll('.seat-position');
let seat = 1;
let busSeat = 1;
let totalPrice = 0;
let orderSeatList = [];
for (const seatClick of seatClicks) {
    seatClick.addEventListener('click', function () {

        if (orderSeatList.includes(seatClick.innerText) === false) {


            // count validation 
            if (busSeat <= 4) {
                seatClick.style.backgroundColor = '#1DD100';
                seatClick.style.color = 'white';
                // seat-positive-count
                document.getElementById('seat-positive-count').innerText = seat;
                // set seatCount
                const seatCount = document.getElementById('seatCount').innerText;
                const convertSeatCount = parseInt(seatCount);
                document.getElementById('seatCount').innerText = convertSeatCount - 1

                // add seat name and price
                const price = 550;
                const seatName = seatClick.innerText
                const titleContainer = document.getElementById('title-container');
                console.log(titleContainer);
                const li = document.createElement('li')
                li.innerText = busSeat + ' . ' + seatName;
                titleContainer.appendChild(li);
                const p = document.createElement('p')
                p.innerText = 'Economy'
                li.appendChild(p)
                const p2 = document.createElement('p')
                p2.innerText = price
                li.appendChild(p2);

                // total-price
                totalPrice += price
                console.log(totalPrice);
                document.getElementById('total-price').innerText = totalPrice;
                document.getElementById('grand-price').innerText = totalPrice;

                const perSeatName = seatClick.innerText;
                orderSeatList.push(perSeatName);
            } else {
                alert('Already 4 seat selected !!')
            }
            busSeat++
            seat++
        } else {
            alert('Already this seat are selected!!')
        }
    })
}

// input filed related part
const inputField = document.getElementById('input-field');
inputField.addEventListener('keyup', function (e) {
    const text = e.target.value;
    const inputBtn = document.getElementById('input-btn');
    if (text === 'NEW15' || text === 'Couple 20') {
        inputBtn.removeAttribute('disabled')
    }
    else {
        inputBtn.setAttribute('disabled', true)
    }
})

const couponCodeBtn = document.getElementById('input-btn');
couponCodeBtn.addEventListener('click', function () {
    const inputField2 = document.getElementById('input-field').value;
    document.getElementById('input-field').value = ''
    if (inputField2 === 'NEW15') {
        const discount = document.getElementById('grand-price').innerText;
        const totalDiscount = discount * 0.15;
        document.getElementById('grand-price').innerText = discount - totalDiscount
    }
    else if (inputField2 === 'Couple 20') {
        const discount = document.getElementById('grand-price').innerText;
        const totalDiscount = discount * 0.2;
        document.getElementById('grand-price').innerText = discount - totalDiscount
    }
})
const inputFiledNumber = document.getElementById('input-field-number');
inputFiledNumber.addEventListener('keyup', function (e) {
    const inputFiledText = parseInt(e.target.value);
    const purchaseBtn = document.getElementById('purchase-btn');
    if (!isNaN(inputFiledText)) {
        purchaseBtn.removeAttribute('disabled');
    } else {
        purchaseBtn.setAttribute('disabled', true)
    }


})