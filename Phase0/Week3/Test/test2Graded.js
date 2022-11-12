 function filterRecipes(ingredients) {
     let recipes = [
         ["Dimsum", "Udang", "Ayam", "Kepiting"],
         ["Ayam Geprek", "Ayam", "Sambal", "Bawang"],
         ["Chicken Katsu", "Ayam", "Tepung Roti", "Terigu"],
         ["Kebab", "Daging Sapi", "Tortilla"],
         ["Bakso", "Daging Sapi", "Terigu"],
     ];
     // write your code here
     let result = [];

     for (let i = 0; i < ingredients.length; i++) {
         //  console.log(ingredients[i]);
         for (let j = 0; j < recipes.length; j++) {
             //  console.log(recipes[j]);
             if (ingredients[i] === recipes[j][0]) {
                 result.push(recipes[j]);
             }
         }
     }
     return result;
 }

 function usersCanCook(users) {
     // write your code here
     if (!users) {
         return 'Invalid Data!';
     }

     let result = [];
     let str = '';

     for (let i = 0; i < users.menu.length + 1; i++) {
         //  console.log(users.menu[i]);
         if (users.menu[i] === '-' || users.menu[i] === undefined) {
             result.push(str);
             str = '';
         } else {
             str += users.menu[i]
         }
     }
     let filter = filterRecipes(result);

     if (filter.length === 0) {
         return 'Menu not found';
     }
     return filter;
 }

 console.log(usersCanCook({
     name: "Fajrin",
     resto: "Fajrin Food",
     menu: "Chicken Katsu-Kebab-Bakso"
 }));
 /*
 [
   [ "Chicken Katsu", "Ayam", "Tepung Roti", "Terigu" ],
   [ "Kebab", "Daging Sapi", "Tortilla" ],
   [ "Bakso", "Daging Sapi", "Terigu" ]
 ]
 */

 //  console.log(usersCanCook({
 //      name: "Rizka",
 //      resto: "Rizka Cafe",
 //      menu: "Mie-Pangsit"
 //  }));
 //  // "Menu not found"

 //  console.log(usersCanCook());
 //  // "Invalid Data!"