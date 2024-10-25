const images = document.querySelectorAll('.learning-imgs img')
let currentIndex = 0

function switchImage() {
  
    images.forEach((img) => img.classList.remove('active'))

    images[currentIndex].classList.add('active')

    currentIndex = (currentIndex + 1) % images.length
}
setInterval(switchImage, 5000)

images[currentIndex].classList.add('active')


document.getElementById("login-account").addEventListener("click", function () {
    const email = document.getElementById("email-login").value
    const password = document.getElementById("password-login").value
    
    const storedEmail = `${email}`
    const storedPassword = `${password}`
 
    if (email === storedEmail && password === storedPassword) {
        document.getElementById("login-form").classList.add("hidden")
        document.getElementById("user-profile").classList.remove("hidden")
        document.getElementById("login-message").textContent = ""
    } else {
        document.getElementById("login-message").textContent = "Invalid credentials, please try again."
    }
})
