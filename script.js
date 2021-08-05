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

function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    textBox.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
    toggleIcon.children[0].textContent = 'Dark Mode'
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    imageMode('dark_purple')
}

function lightMode() {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    textBox.style.backgroundColor = 'rgb(0, 0, 0, 0.5)'
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    imageMode('light_blue')
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        darkMode()
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        lightMode()
    }
}

toggleSwitch.addEventListener('change', switchTheme)