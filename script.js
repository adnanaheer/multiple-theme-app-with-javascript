const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const image4 = document.getElementById('image4')
const image5 = document.getElementById('image5')
const image6 = document.getElementById('image6')
const image7 = document.getElementById('image7')
const image8 = document.getElementById('image8')
const textBox = document.getElementById('text-box')
const dropDown = document.getElementById("dropdown");

function imageMode(color) {
    image1.src = `img/html_${color}.svg`
    image2.src = `img/programming_${color}.svg`
    image3.src = `img/developer_activity_${color}.svg`
    image4.src = `img/pair_programming_${color}.svg`
    image5.src = `img/JavaScript_frameworks_${color}.svg`
    image6.src = `img/mobile_application_${color}.svg`
    image7.src = `img/code_review_${color}.svg`
    image8.src = `img/feeling_proud_${color}.svg`
}

function toggleDarkLighteMode (isDark) {
    nav.style.backgroundColor = isDark ?  'rgb(0 0 0 / 50%)' : 'rgba(255, 255, 255, 0.6)'
    textBox.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgb(0, 0, 0, 0.5)'
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode'
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : 
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    isDark ?     imageMode('dark_purple') : imageMode('light_blue')
}

function yellowMode() {
    document.documentElement.setAttribute('data-theme', 'yellow')
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    textBox.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
    imageMode('yellow')
}

function pinkMode() {
    document.documentElement.setAttribute('data-theme', 'pink')
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    textBox.style.backgroundColor = 'rgb(0, 0, 0, 0.5)'
    imageMode('pink')
}

function greenMode() {
    document.documentElement.setAttribute('data-theme', 'green')
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    textBox.style.backgroundColor = 'rgb(0, 0, 0, 0.5)'
    imageMode('green')
}

function blueMode() {
    document.documentElement.setAttribute('data-theme', 'blue')
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    textBox.style.backgroundColor = 'rgb(0, 0, 0, 0.5)'
    imageMode('blue')
}

function show() {
    var as = document.forms[0].dropdown.value;
    var color = dropDown.options[dropDown.selectedIndex].value;
    console.log(as, color);
    if (color === 'light') {
        lightMode()
    } else if (color === 'yellow') {
        yellowMode()
    }else if (color === 'pink') {
        pinkMode()
    }else if (color === 'green') {
        greenMode()
    }else if (color === 'blue') {
        blueMode()
    }
}

dropDown.onchange = show;

show();

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        toggleDarkLighteMode(true)
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        toggleDarkLighteMode(false)
    }
}

toggleSwitch.addEventListener('change', switchTheme)

const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true
        toggleDarkLighteMode(true)
    }
}