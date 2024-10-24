async function fetchRecipes() {
    try {
        const response = await axios.get('http://localhost:3001/recipes')
        const recipes = response.data
         console.log(recipes)
        displayRecipes(recipes)
    
    } catch (error) {
        console.error('Error fetching recipes:', error)
    }
}
fetchRecipes()

function displayRecipes(recipes) {
    const recipeContainer = document.getElementById('recipe-container')
    recipeContainer.innerHTML = '' // Clear previous content

    for (let i = 0; i <  recipes.length; i++){
        console.log(recipes[i].ingredients)
        const card = document.createElement('div')
        card.classList.add('recipe-card')
        
        const image = document.createElement('img')
        image.src = `../assets/${recipes[i].image}`
        image.alt = recipes[i].name

        const name = document.createElement('h2')
        name.textContent = recipes[i].name

        const description = document.createElement('p')
        description.textContent = recipes[i].description

        const ingredients = document.createElement('ul')
        recipes[i].ingredients.forEach(ingredient => {
            const li = document.createElement('li')
            li.textContent = ingredient.name
            ingredients.appendChild(li)
        });

        const directions = document.createElement('ol')
        recipes[i].preparation.forEach(step => {
            const li = document.createElement('li')
            li.textContent = step
            directions.appendChild(li)
        })

        // Append elements to card
        card.appendChild(image)
        card.appendChild(name)
        card.appendChild(description)
        card.appendChild(ingredients)
        card.appendChild(directions)

        // Append card to container
        recipeContainer.appendChild(card)
    }
    }

    // recipes.forEach(recipe => {
    
    //     const card = document.createElement('div')
    //     card.classList.add('recipe-card')
        
    //     const image = document.createElement('img')
    //     image.src = `../assets/${recipe.image}`
    //     image.alt = recipe.name

    //     const name = document.createElement('h2')
    //     name.textContent = recipe.name

    //     const description = document.createElement('p')
    //     description.textContent = recipe.description

    //     const ingredients = document.createElement('ul')
    //     recipe.ingredients.forEach(ingredient => {
    //         const li = document.createElement('li')
    //         li.textContent = ingredient
    //         ingredients.appendChild(li)
    //     });

    //     const directions = document.createElement('ol')
    //     recipe.directions.forEach(step => {
    //         const li = document.createElement('li')
    //         li.textContent = step
    //         directions.appendChild(li)
    //     })

    //     // Append elements to card
    //     card.appendChild(image)
    //     card.appendChild(name)
    //     card.appendChild(description)
    //     card.appendChild(ingredients)
    //     card.appendChild(directions)

    //     // Append card to container
    //     recipeContainer.appendChild(card)
    // })

