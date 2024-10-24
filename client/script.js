const loginBtn = document.getElementById('login-account')
const loginContainer = document.querySelector('#login-form')
const accountBtn = document.querySelector('#myAccount-btn')
const loginMessage = document.querySelector('#login-message')
const userProfile = document.querySelector('#user-profile')
const welcomeMain = document.querySelector('main')
const hoverSection = document.querySelector('hover-section')

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

let userAccount = ``

const hoverImg = () => {
  hoverSection.style.display = 'none'
}

const myAccount = () => {
  welcomeMain.style.display = 'none'
  userProfile.style.display = 'flex'

  userName.innerHTML = userAccount.name
  inputName.value = userAccount.name

  userAddress.innerHTML = userAccount.address
  inputAddress.value = userAccount.address

  userEmail.innerHTML = userAccount.email
  inputEmail.value = userAccount.email

  userPhone.innerHTML = userAccount.phoneNumber
  inputPhone.value = userAccount.phoneNumber
}

const editProfile = () => {
  profileTexts.forEach(item => {
    item.style.display = 'none'
  })
  profileInputs.forEach(item => {
    item.style.display = 'block'
  })

  editBtn.style.display = 'none'
  updateBtn.style.display = 'block'
}

const updateProfile = async () => {
  let id = userAccount._id
  let response = await axios({
    method: 'put',
    url: `http://localhost:3001/users/${id}`,
    data: {
      name: inputName.value,
      email: inputEmail.value,
      address: inputAddress.value,
      phoneNumber: inputPhone.value,
    }
  })
  if (response.status == 200) {
    loginMessage.innerHTML = `Hello ${response.data.name}`
    userName.innerHTML = response.data.name
    inputName.value = response.data.name
  
    userAddress.innerHTML = response.data.address
    inputAddress.value = response.data.address
  
    userEmail.innerHTML = response.data.email
    inputEmail.value = response.data.email
  
    userPhone.innerHTML = response.data.phoneNumber
    inputPhone.value = response.data.phoneNumber

    profileTexts.forEach(item => {
      item.style.display = 'block'
    })
    profileInputs.forEach(item => {
      item.style.display = 'none'
    })
    editBtn.style.display = 'block'
    updateBtn.style.display = 'none'
    alert("Profile Updated")

  } else {
    alert("An error has occurred")
  }
}

loginBtn.addEventListener('click', async (event) => {
  event.preventDefault()
  const email = document.getElementById('email-login').value
  const password = document.getElementById('password-login').value
  try {
    const response = await axios.get(`http://localhost:3001/users/${email}`)
    const data = response.data[0]
    if (response.status === 200) {
      if (data.password === password) {
        userAccount = data
        loginMessage.innerHTML = `Hello ${data.name}`
        loginContainer.style.display = 'none'
        accountBtn.style.display = 'block'

      } else {
        loginMessage.innerHTML = 'Cannot find User'
      }
    } else {
      document.getElementById('error').textContent = response.data.message
    }
  } catch (error) {
    console.error('Error:', error)
    document.getElementById('error').textContent = 'An error occurred. Please try again.'
  }
})

const images = document.querySelectorAll('.learning-imgs img');
let currentIndex = 0;

function switchImage() {
    // Remove 'active' class from all images
    images.forEach((img) => img.classList.remove('active'))

    // Add 'active' class to the current image
    images[currentIndex].classList.add('active')

    // Move to the next image, looping back to the start
    currentIndex = (currentIndex + 1) % images.length
}

// Change image in seconds
setInterval(switchImage, 7000)

// Initially set the first image as active
images[currentIndex].classList.add('active')
