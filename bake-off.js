const ingredientCheck = function (bakery, recipes) {
  let possibleRecipes = []; //empty array to list all possible recipes with ingredients on hand
  for (let recipe of recipes) {
    for (let i = 0; i < recipe['ingredients'].length; i++) {
      if (bakery.includes(recipe['ingredients'][i])) {
        possibleRecipes.push(recipe['name']);
      }
    }
  }
  return possibleRecipes;
}

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  //Find recipes for A and B respectively
  let possibleRecipesA = ingredientCheck(bakeryA, recipes);
  let possibleRecipesB = ingredientCheck(bakeryB, recipes);

  //find the matching recipe between both bakeries
  for (let recipe of recipes) {
    if (possibleRecipesA.includes(recipe['name']) && possibleRecipesB.includes(recipe['name'])) {
      return recipe['name'];
    }
  }
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));