const db = require(`../db`)
const {Mushrooms, Users, Recipes} = require(`../models`)


db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
    const mushroomList = [
            {
            name: "Reishi",
            scientificName: "Ganoderma lucidum",
            habitat: "Temperate and tropical regions, growing on dead or dying hardwood trees",
            growthCycle: "Spores germinate in hardwoods; takes months to mature; annual or perennial fruiting bodies",
            nutritionalValue: { "calories": 22, "protein": 3.1, "fiber": 1.1, "vitamins": ["B-complex", "D"] },
            cultivationDifficulty: 4,
            seasonality: "Summer to fall",
            geographicRange: "Asia, North America, Europe",
            uses: "Medicinal (boosts immune system, anti-inflammatory)",
            effects: "Immune booster, antioxidant, reduces fatigue",
            sporePrintColor: "Brown",
            pricePerPound: 45,
            type: "Medicinal",
            description: "Reishi is a hard, woody mushroom known for its immune-boosting properties and use in traditional medicine.",
            image: "https://s3.amazonaws.com/cdn.fieldforest.net/images/popup/reishi-logs-1.jpg"
            },

            {
                name: "Lion's Mane",
                scientificName: "Hericium erinaceus",
                habitat: "Grows on dead hardwood trees like oak, beech",
                growthCycle: "Mycelium grows in hardwoods, fruiting in late summer and fall",
                nutritionalValue: { "calories": 35, "protein": 2.4, "fiber": 0.8, "vitamins": ["B-complex", "D"] },
                cultivationDifficulty: 3,
                seasonality: "Late summer to fall",
                geographicRange: "North America, Asia, Europe",
                uses: "Culinary and medicinal (supports brain function)",
                effects: "Neuroprotective, cognitive enhancement",
                sporePrintColor: "White",
                pricePerPound: 20,
                type: "Edible, Medicinal",
                description: "Lion’s Mane is a delicious and medicinal mushroom that is believed to support cognitive health.",
                image: "https://farmfluence.co/cdn/shop/files/234036195_105965745061745_8175105233091342730_n_69ef21a5-3c53-4abd-8785-a038a40473c7.jpg?v=1711950894"
            },
            
            {
                name: "Shiitake",
                scientificName: "Lentinula edodes",
                habitat: "Decaying logs, mainly hardwoods like oak",
                growthCycle: "6-12 months on logs, or 7-10 weeks on sawdust blocks",
                nutritionalValue: { "calories": 34, "protein": 2.2, "fiber": 2.5, "vitamins": ["B-complex", "D"] },
                cultivationDifficulty: 3,
                seasonality: "Spring and fall",
                geographicRange: "East Asia, cultivated worldwide",
                uses: "Culinary, medicinal (boosts immune system)",
                effects: "Immune booster, supports heart health",
                sporePrintColor: "White",
                pricePerPound: 12,
                type: "Edible, Medicinal",
                description: "Shiitake mushrooms are known for their rich, savory flavor and wide use in Asian cuisine.",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Shiitakegrowing.jpg"
            },

            {
                name: "Cordyceps",
                scientificName: "Cordyceps militaris",
                habitat: "Parasitic fungus growing on insects",
                growthCycle: "Spore infects insect larvae, produces fruiting body",
                nutritionalValue: { "calories": 10, "protein": 1.7, "fiber": 0.2, "vitamins": ["B-complex", "D"] },
                cultivationDifficulty: 5,
                seasonality: "Year-round (cultivated)",
                geographicRange: "Asia, North America",
                uses: "Medicinal (boosts energy, athletic performance)",
                effects: "Energy booster, anti-aging, supports respiratory health",
                sporePrintColor: "Pale orange",
                pricePerPound: 150,
                type: "Medicinal",
                description: "Cordyceps is valued for its energy-enhancing properties and traditional use in Chinese medicine.",
                image: "https://freshcap.com/cdn/shop/files/shutterstock_695728252_f941f74f-6a06-462f-a860-35ee2f9674ee_1600x1672.jpg?v=1613619439"
            },

            {
                name: "Turkey Tail",
                scientificName: "Trametes versicolor",
                habitat: "Dead hardwood trees and logs",
                growthCycle: "Takes months to develop on decaying wood",
                nutritionalValue: { "calories": 20, "protein": 1.2, "fiber": 0.5, "vitamins": ["B-complex", "D"] },
                cultivationDifficulty: 3,
                seasonality: "Year-round",
                geographicRange: "Worldwide",
                uses: "Medicinal (immune-boosting, anti-cancer properties)",
                effects: "Boosts immune function, supports gut health",
                sporePrintColor: "White",
                pricePerPound: 25,
                type: "Medicinal",
                description: "Turkey Tail is used primarily for its immune-boosting properties and colorful, fan-shaped appearance.",
                image: "https://www.thesophisticatedcaveman.com/wp-content/uploads/2021/01/turkey-tail-mushroom.jpg"
            },

            {
                name: "Chicken of the Woods",
                scientificName: "Laetiporus sulphureus",
                habitat: "Decaying hardwood trees like oak",
                growthCycle: "Fruiting within 6-12 months on wood",
                nutritionalValue: { "calories": 20, "protein": 2.0, "fiber": 0.5, "vitamins": ["B-complex", "D"] },
                cultivationDifficulty: 3,
                seasonality: "Summer to fall",
                geographicRange: "North America, Europe",
                uses: "Culinary, meat substitute",
                effects: "High in antioxidants, immune support",
                sporePrintColor: "White",
                pricePerPound: 15,
                type: "Edible",
                description: "Chicken of the Woods is a brightly colored mushroom that is often used as a vegetarian chicken substitute.",
                image: "https://www.allrecipes.com/thmb/v77PonnagU4LkOW0p3fe8puczNg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-of-the-woods-3x2-1-16dcb7a3f1644eaa82fd6c8a17f1c1ef.jpg"
            },
            
            {
                name: "King Trumpet",
                scientificName: "Pleurotus eryngii",
                habitat: "Dead wood, particularly in Mediterranean climates",
                growthCycle: "Rapid growth, matures in about 1-2 weeks",
                nutritionalValue: { "calories": 35, "protein": 3.5, "fiber": 1.2, "vitamins": ["B-complex", "D"] },
                cultivationDifficulty: 2,
                seasonality: "Year-round (cultivated)",
                geographicRange: "Mediterranean, cultivated globally",
                uses: "Culinary, savory flavor with meaty texture",
                effects: "High in antioxidants, supports cardiovascular health",
                sporePrintColor: "White",
                pricePerPound: 10,
                type: "Edible",
                description: "King Trumpet mushrooms are known for their meaty stems and savory, umami-rich flavor.",
                image: "https://images.squarespace-cdn.com/content/v1/61f83f58cb89a36459cccfc8/1645226584734-BDVMIQO7EVVN05NKI6HQ/mushrooms_king_trumpet_row.jpeg"
            },

            {
                name: "Chestnut",
                scientificName: "Pholiota adiposa",
                habitat: "Hardwoods, especially oak and beech",
                growthCycle: "Fruits within 3-6 weeks",
                nutritionalValue: { "calories": 25, "protein": 2.1, "fiber": 1.0, "vitamins": ["B-complex", "D"] },
                cultivationDifficulty: 3,
                seasonality: "Fall",
                geographicRange: "North America, Europe",
                uses: "Culinary, popular in stir-fries and soups",
                effects: "Supports immune function",
                sporePrintColor: "Brown",
                pricePerPound: 15,
                type: "Edible",
                description: "Chestnut mushrooms have a nutty flavor and crunchy texture, making them a favorite in cooking.",
                image: "https://pacificwildpick.com/cdn/shop/products/fresh-chestnut-mushroom-279562.jpg?v=1695137209"
            },

            {
                name: "Pioppino",
                scientificName: "Agrocybe aegerita",
                habitat: "Dead wood, particularly poplar trees",
                growthCycle: "Fruiting within 4-6 weeks on sawdust or logs",
                nutritionalValue: { "calories": 35, "protein": 3.5, "fiber": 1.2, "vitamins": ["B-complex", "D"] },
                cultivationDifficulty: 2,
                seasonality: "Spring and fall",
                geographicRange: "Mediterranean, cultivated worldwide",
                uses: "Culinary, great for pasta and risotto",
                effects: "High in antioxidants, supports immune health",
                sporePrintColor: "Brown",
                pricePerPound: 12,
                type: "Edible",
                description: "Pioppino mushrooms have a rich, woodsy flavor and pair well with savory dishes.",
                image: "https://www.fieldforest.net/images/Strain_Library/pioppini-strain.jpg"
            },

            {
                name: "Black King",
                scientificName: "Pleurotus ostreatus var. columbinus",
                habitat: "Decaying wood and logs",
                growthCycle: "Fruiting within 7-10 days",
                nutritionalValue: { "calories": 30, "protein": 3.2, "fiber": 1.0, "vitamins": ["B-complex", "D"] },
                cultivationDifficulty: 2,
                seasonality: "Year-round",
                geographicRange: "Worldwide",
                uses: "Culinary, popular for soups and sautés",
                effects: "Supports cardiovascular health, high in antioxidants",
                sporePrintColor: "Lilac-gray",
                pricePerPound: 10,
                type: "Edible",
                description: "Black King mushrooms have a rich, earthy flavor and are a popular gourmet choice.",
                image: "https://mycophile.org/web/image/product.template/257/image_1024?unique=038aebf"
            }


        ]
    
        const recipesList = [
            {
                image: "../assets/Reishi tea.jpg",
                name: "Reishi Mushroom Tea",
                description:"Indulge in the soothing warmth of Reishi Mushroom Tea, a delightful beverage celebrated for its health benefits. This simple yet flavorful tea combines the earthy tones of dried Reishi mushrooms with the refreshing notes of lemon and a touch of sweetness from honey, making it perfect for relaxation or as a wellness tonic.",
                difficulty: "Easy",
                prep_time: 5, // minutes
                cook_time: 30, // minutes
                serving_size: 4,
                ingredients: [
                    { name: "Dried Reishi mushrooms", quantity: 2, unit: "Oz" },
                    { name: "Water", quantity: 4, unit: "Cups" },
                    { name: "Honey", quantity: 2, unit: "Tbs" }, // optional
                    { name: "Lemon", quantity: 1, unit: "Tsp" }  // optional
                ],
                oven_temperature: 0, // No oven used
                value: 212, // F (boiling point)
                unit: "F",
                preparation: [
                    "In a pot, bring the water to a boil.",
                    "Once boiling, add the dried Reishi mushrooms to the pot. Reduce the heat and let it simmer for 30 minutes.",
                    "After simmering, strain the tea into cups, discarding the mushroom pieces.",
                    "Stir in honey and lemon to taste, adjusting for sweetness and acidity as desired.",
                    "Serve warm and enjoy the soothing benefits of your Reishi Mushroom Tea."
                ],
                note: `This tea can be enjoyed at any time of the day and is especially soothing in the evening. Adjust the sweetness and lemon to your liking for a personalized touch.`
    
            },

            {
                image: "../assets/Lions mane crab cakes.jpg",
                name: "Lion's Mane Mushroom 'Crab' Cakes",
                description:"Delight your taste buds with these savory Lion's Mane Mushroom 'Crab' Cakes, a delectable vegetarian twist on the classic crab cake. Bursting with flavor and featuring the unique texture of Lion's Mane mushrooms, these cakes offer a satisfying, umami-packed alternative that's sure to impress both vegetarians and seafood lovers alike.",
                difficulty: "Medium",
                prep_time: 15, // minutes
                cook_time: 10, // minutes
                serving_size: 4,
                ingredients: [
                    { name: "Lion's Mane mushrooms", quantity: 2, unit: "Cups",},
                    { name: "Breadcrumbs", quantity: 1 / 4, unit: "Cups" },
                    { name: "Egg", quantity: 1, unit: "Unit" },
                    { name: "Mayonnaise", quantity: 1 / 4, unit: "Cups" },
                    { name: "Mustard", quantity: 1, unit: "Tsp" },
                    { name: "Old Bay seasoning", quantity: 1, unit: "Tsp" },
                    { name: "Lemon juice", quantity: 1, unit: "Tsp" },
                    { name: "Salt", quantity: 1, unit: "Tsp" },
                    { name: "Pepper", quantity: 1, unit: "Tsp" }
                ],
                
                oven_temperature: 0, // No oven used
                value: 0, // No oven temperature
                unit: "F",
                preparation: [
                    "Begin by finely chopping the Lion's Mane mushrooms and sautéing them in a skillet over medium heat until soft, about 5-7 minutes. Allow to cool slightly.",
                    "In a mixing bowl, combine the sautéed mushrooms, breadcrumbs, egg, mayonnaise, mustard, Old Bay seasoning, lemon juice, salt, and pepper. Mix until well combined.",
                    "Form the mixture into patties, about 2-3 inches in diameter.",
                    "In the same skillet, heat a little oil over medium heat and add the patties. Cook for about 4-5 minutes on each side, or until golden brown and crispy.",
                    "Remove from the skillet and drain on paper towels. Serve warm with your favorite dipping sauce."
                ],
                note: `These 'crab' cakes can be served as an appetizer or as a main dish alongside a fresh salad, making them a versatile and delicious addition to any meal.`

            },

            {
                image: "../assets/Shitake stir-fry.jpg",
                name: "Shiitake Stir-Fry",
                description: "Experience the vibrant flavors of this easy Shiitake Stir-Fry, a quick and satisfying dish perfect for weeknight dinners. This recipe highlights the rich umami taste of Shiitake mushrooms, complemented by the aromatic blend of ginger and garlic. Tossed in savory soy sauce and nutty sesame oil, this stir-fry is not only delicious but also healthy and packed with nutrients.",
                difficulty: "Easy",
                prep_time: 5, // minutes
                cook_time: 10, // minutes
                serving_size: 2,
                ingredients: [
                    { name: "Shiitake mushrooms", quantity: 1, unit: "Lbs" },
                    { name: "Soy sauce", quantity: 2, unit: "Tbs" },
                    { name: "Sesame oil", quantity: 1, unit: "Tbs" },
                    { name: "Ginger", quantity: 1, unit: "Tsp" },
                    { name: "Garlic", quantity: 2, unit: "Cloves" },
                    { name: "Sesame seeds", quantity: 1, unit: "Tsp" },
                    { name: "Green onion", quantity: 1, unit: "Unit" },
                    { name: "Broccoli", quantity: 1, unit: "Cup" } // Added broccoli
                ],
                oven_temperature: 0, // No oven used
                value: 0, // No oven temperature
                unit: "F",
                preparation: [
                    "Slice the Shiitake mushrooms and chop the green onion.",
                    "Cut the broccoli into small florets.",
                    "In a skillet, heat the sesame oil over medium heat.",
                    "Add minced garlic and ginger to the skillet and sauté until fragrant, about 1 minute.",
                    "Add the sliced Shiitake mushrooms and broccoli florets, cooking for about 5-7 minutes, or until tender.",
                    "Stir in the soy sauce and cook for an additional 1-2 minutes, mixing well.",
                    "Remove from heat and garnish with sesame seeds and chopped green onion before serving."
                ],
                note: `This stir-fry can be served over rice or noodles for a complete meal. Feel free to add other vegetables such as bell peppers or carrots for extra color and nutrition.`
            },
            
            {
                image: "../assets/Smoothie.jpg",
                name: "Cordyceps Energy Smoothie",
                description: "Kickstart your day with this invigorating Cordyceps Energy Smoothie, designed to boost your energy and support your overall wellness. This creamy and delicious smoothie combines the earthy notes of Cordyceps mushroom powder with the natural sweetness of banana and honey. Almond milk and almond butter add a rich, nutty flavor, while a dash of cinnamon brings warmth and depth. Perfect for a quick breakfast or an energizing snack!",
                difficulty: "Easy",
                prep_time: 5, // minutes
                cook_time: 0, // No cooking
                serving_size: 1,
                ingredients: [
                    { name: "Cordyceps mushroom powder", quantity: 1, unit: "Tsp" },
                    { name: "Banana", quantity: 1, unit: "Unit" },
                    { name: "Almond milk", quantity: 1, unit: "Cups" },
                    { name: "Almond butter", quantity: 1, unit: "Tbs" },
                    { name: "Honey", quantity: 1, unit: "Tsp" },
                    { name: "Cinnamon", quantity: 1 / 4, unit: "Tsp" }
                ],
                oven_temperature: 0, // No oven used
                value: 0, // No oven temperature
                unit: "F",
                preparation: [
                    "In a blender, combine the Cordyceps mushroom powder, banana, almond milk, almond butter, honey, and cinnamon.",
                    "Blend on high speed until smooth and creamy, about 30 seconds.",
                    "Taste and adjust sweetness if needed by adding more honey.",
                    "Pour into a glass and enjoy immediately, or chill for a refreshing treat."
                ],
                note: `Feel free to customize this smoothie by adding spinach or protein powder for an extra nutritional boost. This recipe is also delicious when served with a handful of ice for a refreshing chilled treat.`
            },
            {
                image: "../Turkey Tail Immune-Boosting Soup",
                name: "Turkey Tail Immune-Boosting Soup",
                difficulty: "Medium",
                prep_time: 5, // minutes
                cook_time: 30, // minutes
                serving_size: 4,
                ingredients: [
                    { name: "Dried Turkey Tail mushrooms", quantity: 1 / 2, unit: "Cups" },
                    { name: "Chicken or vegetable broth", quantity: 4, unit: "Cups" },
                    { name: "Garlic", quantity: 2, unit: "Cloves" },
                    { name: "Ginger", quantity: 1, unit: "Inches" },
                    { name: "Soy sauce", quantity: 1, unit: "Tbs" },
                    { name: "Salt", quantity: 1, unit: "Tsp" },
                    { name: "Pepper", quantity: 1, unit: "Tsp" },
                    { name: "Green onion", quantity: 1, unit: "Unit" }
                ],
                oven_temperature: 0, // No oven used
                value: 0, // No oven temperature
                unit: "F",
                preparation: [
                    "In a large pot, bring the chicken or vegetable broth to a simmer over medium heat.",
                    "Add the dried Turkey Tail mushrooms, minced garlic, and sliced ginger to the pot. Cook for about 20 minutes, allowing the flavors to meld.",
                    "Stir in the soy sauce, salt, and pepper. Adjust seasoning to taste.",
                    "Remove from heat and let the soup cool slightly before serving.",
                    "Garnish with chopped green onion before ladling into bowls. Enjoy hot!"
                ],
                note: "This soup is not only delicious but also packed with health benefits.",
            },
            {
                image: "../assets/chicken of the woods tacos.jpg",
                name: "Chicken of the Woods 'Chicken' Tacos",
                description: "Nourish your body with this hearty Turkey Tail Immune-Boosting Soup, designed to enhance your immune system while providing a comforting and flavorful meal. This soup features the unique, earthy flavor of dried Turkey Tail mushrooms, complemented by the warmth of garlic and ginger. Made with your choice of chicken or vegetable broth, this dish is not only delicious but also packed with nutrients, making it perfect for chilly days or when you need a little extra wellness boost.",
                difficulty: "Medium",
                prep_time: 10, // minutes
                cook_time: 10, // minutes
                serving_size: 4,
                ingredients: [
                    { name: "Chicken of the Woods mushrooms", quantity: 1, unit: "Lbs" },
                    { name: "Olive oil", quantity: 1, unit: "Tbs" },
                    { name: "Cumin", quantity: 1, unit: "Tsp" },
                    { name: "Smoked paprika", quantity: 1, unit: "Tsp" },
                    { name: "Chili powder", quantity: 1, unit: "Tsp" },
                    { name: "Garlic", quantity: 1, unit: "Cloves" },
                    { name: "Corn tortillas", quantity: 4, unit: "Unit" },
                    { name: "Avocado", quantity: 1, unit: "Unit" },
                    { name: "Salsa", quantity: 1 / 2, unit: "Cups" },
                    { name: "Lime", quantity: 1, unit: "Unit" },
                    { name: "Cilantro", quantity: 1, unit: "Unit" }
                ],
                oven_temperature: 0, // No oven used
                value: 0, // No oven temperature
                unit: "F",
                preparation: [
                    "In a skillet, heat the olive oil over medium heat. Add minced garlic and sauté until fragrant.",
                    "Add the diced Chicken of the Woods mushrooms to the skillet. Cook for about 5-7 minutes, stirring occasionally, until the mushrooms are tender and browned.",
                    "Stir in the cumin, smoked paprika, and chili powder. Cook for an additional 2 minutes to allow the spices to infuse.",
                    "Warm the corn tortillas in another skillet or directly over the flame until pliable.",
                    "Assemble the tacos by placing the mushroom mixture on the tortillas. Top with diced avocado, salsa, a squeeze of lime juice, and chopped cilantro.",
                    "Serve immediately and enjoy your delicious, nutrient-packed tacos!"
                ],
               
                note: `This soup can be made in advance and stored in the refrigerator for up to three days. It's a wonderful way to warm up and support your immune health during cold and flu season.`
            },
            {
                image: "../assets/king trumpet scallops.jpg",
                name: "King Trumpet Mushroom Scallops",
                description: "Elevate your dining experience with these King Trumpet Mushroom Scallops, a delightful plant-based dish that mimics the texture of traditional scallops. Sautéed to perfection, these meaty mushrooms are infused with the rich flavors of garlic, soy sauce, and a hint of lemon. Perfect as a main course or an impressive appetizer, this recipe is sure to impress both vegans and non-vegans alike!",
                difficulty: "Medium",
                prep_time: 5, // minutes
                cook_time: 10, // minutes
                serving_size: 2,
                ingredients: [
                    { name: "King Trumpet mushrooms", quantity: 4, unit: "Unit" },
                    { name: "Olive oil", quantity: 1, unit: "Tbs" },
                    { name: "Soy sauce", quantity: 2, unit: "Tbs" },
                    { name: "Vegan butter", quantity: 1, unit: "Tbs" },
                    { name: "Garlic", quantity: 1, unit: "Cloves" },
                    { name: "Lemon", quantity: 1, unit: "Tsp" }
                ],
                oven_temperature: 0, // No oven used
                value: 0, // No oven temperature
                unit: "F",
                preparation: [
                    "Begin by slicing the King Trumpet mushrooms into scallop-sized rounds.",
                    "In a skillet, heat the olive oil and vegan butter over medium heat.",
                    "Add minced garlic to the skillet and sauté until fragrant, about 1 minute.",
                    "Add the sliced mushrooms and cook for about 3-4 minutes on each side, or until golden brown and tender.",
                    "Drizzle the soy sauce and lemon juice over the mushrooms, stirring gently to coat.",
                    "Cook for an additional minute, then remove from heat and serve immediately."
                ],
                note: `These King Trumpet Mushroom Scallops pair beautifully with a fresh salad or can be served on a bed of rice or quinoa for a complete meal.`
            },
           
            {
                image: "../assets/pioppino mushroom pasta.jpg",
                name: "Pioppino Mushroom Pasta",
                description: "Savor the delightful flavors of Pioppino Mushroom Pasta, a simple yet elegant dish that showcases the earthy richness of pioppino mushrooms. Combined with garlic, white wine, and a sprinkle of Parmesan cheese, this pasta is perfect for a quick weeknight dinner or a special occasion. Fresh parsley adds a pop of color and flavor, making this dish both visually appealing and delicious!",
                difficulty: "Easy",
                prep_time: 10, // minutes
                cook_time: 15, // minutes
                serving_size: 2,
                ingredients: [
                    { name: "Pioppino mushrooms", quantity: 2, unit: "Cups" },
                    { name: "Garlic", quantity: 3, unit: "Cloves" },
                    { name: "Olive oil", quantity: 2, unit: "Tbs" },
                    { name: "White wine", quantity: 1 / 2, unit: "Cups" },
                    { name: "Parmesan cheese", quantity: 1 / 4, unit: "Cups" },
                    { name: "Pasta", quantity: 8, unit: "Oz" },
                    { name: "Salt", quantity: 1, unit: "Tsp" },
                    { name: "Pepper", quantity: 1, unit: "Tsp" },
                    { name: "Fresh parsley", quantity: 1, unit: "Tbs" }
                ],
                oven_temperature: 0, // No oven used
                value: 0, // No oven temperature
                unit: "F",
                preparation:  [
                    "Cook the pasta according to package instructions until al dente. Drain and set aside.",
                    "In a large skillet, heat the olive oil over medium heat. Add minced garlic and sauté until fragrant, about 1 minute.",
                    "Add the sliced Pioppino mushrooms to the skillet and cook for 5-7 minutes, or until they are tender and golden brown.",
                    "Pour in the white wine and bring to a simmer, allowing it to reduce for about 2-3 minutes.",
                    "Add the cooked pasta to the skillet, tossing it with the mushrooms and wine. Season with salt and pepper to taste.",
                    "Remove from heat and stir in the Parmesan cheese. Garnish with fresh parsley before serving."
                ],
                    note: `This pasta pairs wonderfully with a light salad and a glass of white wine for a complete meal. Feel free to customize with additional vegetables or protein!`
            }
        ]
        const users= [
            {
                name: 'arassman',
                address: '123 fake street',
                email: 'austinrassman@gmail.com',
                phoneNumber: 5555555555,
                password:`123`
            },
            {
                name: 'username2',
                address: '124 fake street',
                email: 'fakeemail.com',
                phoneNumber: 5555555556,
                password:`123`
            },
            {
                name: 'username3',
                address: '125 fake street',
                email: 'fakeemail.com',
                phoneNumber: 5555555557,
                password:`123`
            }
        ]
        
        console.log(recipesList)

        await Mushrooms.insertMany(mushroomList)
        console.log('Mushrooms Saved')
  
        await Users.insertMany(users)
    console.log("Created some users!")

        await Recipes.insertMany(recipesList)
        console.log("Created some recipes!")
    }

    const run = async () => {
        await main()
        db.close()
    }
    
    run()