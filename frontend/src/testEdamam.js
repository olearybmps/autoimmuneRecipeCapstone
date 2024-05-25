// const APP_ID = import.meta.env.VITE_EDAMAM_API_ID;
// const APP_KEY = import.meta.env.VITE_EDAMAM_API_KEY;
// const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

// const searchRecipes = async (query) => {
//     try {
//         const response = await fetch(
//             `${BASE_URL}?type=public&q=${encodeURIComponent(
//                 query
//             )}&app_id=${APP_ID}&app_key=${APP_KEY}`
//         );
//         const data = await response.json();

//         const recipes = data.hits;
//         console.log('Search Results:');
//         recipes.forEach((recipe, index) => {
//             console.log(`${index + 1}. ${recipe.recipe.label}`);
//         });
//     } catch (error) {
//         console.error('Error searching recipes:', error);
//     }
// };

// // Test the API by searching for a specific recipe
// const searchQuery = 'chicken curry';
// searchRecipes(searchQuery);
