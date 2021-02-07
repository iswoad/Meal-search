function getSearchResult(){
    
    const searchKeyWord = document.getElementById('search-input').value;
    console.log(searchKeyWord)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyWord}`)
    .then(response => response.json())
    .then(data => {
    console.log(data)
})
}


// const displayMeals = meals => {
//     const mealsDiv = document.getElementById('search-results');
//     meals.forEach( meal => {
//         const mealDiv = document.createElement('div');
//         mealDiv.className = 'single-meal'
//         const mealInfo = `
//             <h3 class="meal-name">${meals.strMeal}</h3>
//         `
//         mealDiv.innerHTML = mealInfo;

//         mealsDiv.appendChild(mealDiv);
//     });
// }