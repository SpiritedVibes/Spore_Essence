async function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const response = await fetch("http://localhost:5500/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json()

    if (data.success) {
        document.getElementById("login-form").style.display = "none"
        document.getElementById("create-thread").style.display = "block"
        loadPosts()
    } else {
        document.getElementById("message").innerText = data.error
    }
}

async function createPost() {
    const title = document.getElementById("title").value
    const content = document.getElementById("content").value

    const response = await fetch("http://localhost:5000/blog/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, authorId: ${} })
    })

    if (response.ok) {
        loadPosts()
    }
}

async function loadPosts() {
    const response = await fetch("http://localhost:5000/blog")
    const posts = await response.json()
    const container = document.getElementById("posts-container")
    container.innerHTML = ""

    posts.forEach(post => {
        const postDiv = document.createElement("div")
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><p>By: ${post.author.name}</p>`
        container.appendChild(postDiv)
    })
}
