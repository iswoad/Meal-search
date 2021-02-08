let storedData;
const getSearchResult = () =>{
    const searchKeyWOrd = document.getElementById('search-input').value;
   
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyWOrd}`)
    .then(res => res.json())
    .then(data => {
        
        console.log(data);

        document.getElementById('search-result').innerHTML = '';

        data.meals.forEach((eachMeal) => {
            console.log(eachMeal);
            storedData = eachMeal;
            
            const mealId = eachMeal.idMeal
            const mealName = eachMeal.strMeal;
            const mealImage = eachMeal.strMealThumb;

            document.getElementById('search-result').innerHTML += `
            <div class="searched-meal my-5">
                <div onclick="showMealInfo(${mealId})" class="single-meal">
                    <img src="${mealImage}"></img>
                    <div class="meal-title">
                        <p>${mealName}</p>
                    </div>
                </div>  
            </div>
            `;
        });
    })
}

const showMealInfo = (mealId) => {
    console.log(mealId)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(data =>
        displayMealInfo(data.meals[0]) 
    )
}

const displayMealInfo = info =>{
        const singleMealInfo = document.getElementById('single-meal');
        singleMealInfo.innerHTML=`<div class="modal-dialog  mb-5 bg-light">
        <div class="class="modal-content shadow rounded">
            <div class="modal-header border-0">
            <h5 class="modal-title">Food Details</h5>
        </div>
            <div class="modal-body p-4">
            <img src="${info.strMealThumb}" class="card-img-top">
                <div>
                    <h1 class="mb-4">${info.strMeal}</h1>
                    <h5 class="card-text mb-4">Ingredients</h5>
                    <div id="ingredients">
                    
                </div>
                </div>
            </div>
    </div>
</div>
`;
const ingredientsList = document.getElementById('ingredients');
        for (let i = 1; i <= 10; i++) {
            if (info['strIngredient' + i]) {
                const ingredient = document.createElement('li');
                ingredient.innerText = `${info['strMeasure' + i]} ${info['strIngredient' + i]}`;
                ingredientsList.appendChild(ingredient);
            }
        }
}

// document.getElementById('single-meal').innerHTML = `
// <div class="single-meal-info">
//         <div class="single-meal">
//             <div class="single-meal-img">
//             <img src="${data.meals[0].strMealThumb}"></img>
//             </div>
//             <h1>${data.meals[0].strMeal}</h1>
//             <div class="ingredients">
//                 <ol>
//                     <li>${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}</li>
//                     <li>${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}</li>
//                     <li>${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}</li>
//                     <li>${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}</li>
//                     <li>${data.meals[0].strMeasure5} ${data.meals[0].strIngredient5}</li>
//                     <li>${data.meals[0].strMeasure6} ${data.meals[0].strIngredient6}</li>
//                     <li>${data.meals[0].strMeasure7} ${data.meals[0].strIngredient7}</li>
//                     <li>${data.meals[0].strMeasure8} ${data.meals[0].strIngredient8}</li>
//                     <li>${data.meals[0].strMeasure9} ${data.meals[0].strIngredient9}</li>
//                 </ol>
//             </div>
//         </div>  
//     </div>`;
