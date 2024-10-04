
const recipes = [
    {recipe_name: 'Chicken and Broccoli Fettuccine Alfredo'},
    {recipe_name: 'Spicy Shrimp Tacos'},
    {recipe_name: 'Matcha Smoothie Bowl'}
]

const ingredients = [
    {ingredient_name: 'Chicken', ingredient_unit: 'lbs'},
    {ingredient_name: 'Broccoli', ingredient_unit: 'lbs'},
    {ingredient_name: 'Fettuccine', ingredient_unit: 'lbs'},
    {ingredient_name: 'Alfredo Sauce', ingredient_unit: 'oz'},
    {ingredient_name: 'Shrimp', ingredient_unit: 'lbs'},
    {ingredient_name: 'Tortilla', ingredient_unit: 'lbs'},
    {ingredient_name: 'Cayenne Pepper', ingredient_unit: 'tsp'},
    {ingredient_name: 'Cabbage', ingredient_unit: 'lbs'},
    {ingredient_name: 'Cilantro Lime Sauce', ingredient_unit: 'oz'},
    {ingredient_name: 'Matcha Powder', ingredient_unit: 'tsp'},
    {ingredient_name: 'Almond Milk', ingredient_unit: 'oz'},
    {ingredient_name: 'Spinach', ingredient_unit: 'grams'},
    {ingredient_name: 'Frozen Banana', ingredient_unit: 'grams'}
]

const step_ingredients = [
    // Chicken and Broccoli Fettuccine Alfredo
        {step_id: 2, ingredient_id: 3, quantity: 2},
        {step_id: 4, ingredient_id: 2, quantity: 1},
        {step_id: 4, ingredient_id: 1, quantity: 3},
        {step_id: 5, ingredient_id: 4, quantity: 15},
    // Spicy Shrimp Tacos
        {step_id: 8,  ingredient_id: 5, quantity: 4},
        {step_id: 8,  ingredient_id: 7, quantity: 2},
        {step_id: 9,  ingredient_id: 6, quantity: 1},
        {step_id: 10, ingredient_id: 8, quantity: 1},
        {step_id: 11, ingredient_id: 9, quantity: 10},
    // Matcha Smoothie Bowl
        {step_id: 12, ingredient_id: 10, quantity: 3},
        {step_id: 12, ingredient_id: 11, quantity: 8},
        {step_id: 12, ingredient_id: 13, quantity: 240},
        {step_id: 12, ingredient_id: 12, quantity: 300}
    ]

const steps = [
// Chicken and Broccoli Fettuccine Alfredo
    {step_number: 1, step_instructions: 'Boil water', recipe_id: 1},
    {step_number: 2, step_instructions: 'Add Fettuccine and cook till al dente', recipe_id: 1},
    {step_number: 3, step_instructions: 'Heat skillet to medium high', recipe_id: 1},
    {step_number: 4, step_instructions: 'Cook Broccoli first and then add Chicken', recipe_id: 1},
    {step_number: 5, step_instructions: 'Add Alfredo Sauce to skillet, then turn to low heat', recipe_id: 1},
    {step_number: 6, step_instructions: 'Add Fettuccine to skillet', recipe_id: 1},
// Spicy Shrimp Tacos
    {step_number: 1, step_instructions: 'Heat pan', recipe_id: 2},
    {step_number: 2, step_instructions: 'Lightly coat Shrimp in Cayenne Pepper and cook in pan till done', recipe_id: 2},
    {step_number: 3, step_instructions: 'Put Tortilla in pan till lightly browned on each side', recipe_id: 2},
    {step_number: 4, step_instructions: 'Put Shrimp and Cabbage in the Tortilla', recipe_id: 2},
    {step_number: 5, step_instructions: 'Pour as much Cilantro Lime Sauce as you want over tacos', recipe_id: 2},
// Matcha Smoothie Bowl
    {step_number: 1, step_instructions: 'Put Matcha Powder, Almond Milk, Frozen Banana and Spinach in blender', recipe_id: 3},
    {step_number: 2, step_instructions: 'Turn blender on high and mix till texture is smooth', recipe_id: 3},
    {step_number: 3, step_instructions: 'Pour into a bowl and enjoy!', recipe_id: 3}
]

exports.seed = async function(knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}