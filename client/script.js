const images = document.querySelectorAll('.learning-imgs img')
let currentIndex = 0

function switchImage() {
  
    images.forEach((img) => img.classList.remove('active'))

    images[currentIndex].classList.add('active')

    currentIndex = (currentIndex + 1) % images.length
}


setInterval(switchImage, 5000)

images[currentIndex].classList.add('active')

const loginBtn = document.getElementById('login-account')
const loginContainer = document.querySelector('#login-form')
const accountBtn = document.querySelector('#myAccount-btn')
const loginMessage = document.querySelector('#login-message')
const userProfile = document.querySelector('#user-profile')
const welcomeMain = document.querySelector('main')

const userName = document.querySelector('#nameText')
const userAddress = document.querySelector('#addressText')
const userEmail = document.querySelector('#emailText')
const userPhone = document.querySelector('#phoneText')
const profileTexts = document.querySelectorAll('.profile-text')

const inputName = document.querySelector('#name')
const inputAddress = document.querySelector('#address')
const inputEmail = document.querySelector('#email')
const inputPhone = document.querySelector('#phone')
const profileInputs = document.querySelectorAll('.profile-input')

const editBtn = document.querySelector('#profile-edit')
const updateBtn = document.querySelector('#profile-save')

let userAccount = {}


const myAccount = () => {
    welcomeMain.style.display = 'none'
    userProfile.style.display = 'flex'

   
    userName.innerHTML = userAccount.name || "Unknown User"
    inputName.value = userAccount.name || ""

    userAddress.innerHTML = userAccount.address || "No Address"
    inputAddress.value = userAccount.address || ""

    userEmail.innerHTML = userAccount.email || "No Email"
    inputEmail.value = userAccount.email || ""

    userPhone.innerHTML = userAccount.phoneNumber || "No Phone"
    inputPhone.value = userAccount.phoneNumber || ""
}


loginBtn.addEventListener('click', async (event) => {
    event.preventDefault()
    const email = document.getElementById('email-login').value
    const password = document.getElementById('password-login').value

    try {
        const response = await axios.get(`http://localhost:3001/users`)
        const data = response.data

        if (response.status === 200) {
            const user = data.find(user => user.email === email)

            
            if (user && user.password === password) {
                userAccount = user
                loginMessage.innerHTML = `Hello ${user.name}`
                loginContainer.style.display = 'none'
                accountBtn.style.display = 'block'
                myAccount()
            } else {
                loginMessage.innerHTML = 'Invalid email or password.'
            }
        } else {
            loginMessage.innerHTML = response.data.message || 'Login failed.'
        }
    } catch (error) {
        console.error('Error logging in:', error)
        loginMessage.innerHTML = 'Email not found. Please try again.'
    }
})