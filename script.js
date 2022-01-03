const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes');





function clock() {
    let time = new Date(),
        second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;

    sec.style = `transform: rotate(${second}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;


    hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

    setTimeout(() => clock(), 1000);
}

clock()

const tabsItem = document.querySelectorAll('.tabsItem '),
    tabsContent = document.querySelectorAll('.tabsContentItem');



tabsItem.forEach((item, i) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        removeActiveClass();
        this.classList.add('active')
        tabsContent[i].classList.add('active')
    })
})

function removeActiveClass() {
    tabsItem.forEach((item, i) => {
        item.classList.remove('active');
        tabsContent[i].classList.remove('active')
    })
}


const hourElement = document.querySelector('.stopwatch__hours')
const minuteElement = document.querySelector('.stopwatch__minutes')
const secondElement = document.querySelector('.stopwatch__seconds')

const buttonElement = document.querySelector('.stopwatch__btn')

let interval

buttonElement.addEventListener('click', () => {
    if (buttonElement.innerHTML == 'start') {
        buttonElement.innerHTML = 'stop'
        clearInterval(interval)
        interval = setInterval(() => Timer(), 1000)
    }else if (buttonElement.innerHTML == 'stop') {
        buttonElement.innerHTML = 'reset'
        clearInterval(interval)
    }else if (buttonElement.innerHTML == 'reset') {
        buttonElement.innerHTML = 'start'
        clearInterval(interval) 
        secondElement.innerHTML = '00'
        minuteElement.innerHTML = '00'
        hourElement.innerHTML = '00'
    }
    
})




function Timer() {
    secondElement.innerHTML++
    if (secondElement.innerHTML <= 9 ) { 
        secondElement.innerHTML = '0' + secondElement.innerHTML
    }
    if (secondElement.innerHTML > 9) {
        secondElement.innerHTML = secondElement.innerHTML
    }
    if (secondElement.innerHTML > 59) {
        minuteElement.innerHTML++
        secondElement.innerHTML = 00
    }
    if (minuteElement.innerHTML > 9) {
        minuteElement.innerHTML = minuteElement.innerHTML
    }
    if (minuteElement.innerHTML > 59) {
        hourElement.innerHTML++
        minuteElement.innerHTML = 00
    }

}


