//multiple empty string validation
function hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
      }
    //input keyword catch and show result

const getSearchResult = () =>{
    const searchKeyWord = document.getElementById('search-input').value;
    //empty search validation
    if (searchKeyWord === '' || !!hasWhiteSpace(searchKeyWord)) {
        window.alert('No Meal is Searched')
    }else{

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyWord}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('search-result').innerHTML = '';
            data.meals.forEach((eachMeal) => { 
                const mealId = eachMeal.idMeal
                const mealName = eachMeal.strMeal;
                const mealImage = eachMeal.strMealThumb;
                document.getElementById('search-result').innerHTML += `
                                                <div class="searched-meal my-5">
                                                    <div onclick="showMealInfo(${mealId})" class="single-meal card shadow rounded-3">
                                                        <img src="${mealImage}" class="card-img-top"></img>
                                                        <div class="meal-title text center">
                                                            <p>${mealName}</p>
                                                        </div>
                                                    </div>  
                                                </div>
                `;
            });
        })
    }
   
}

    //meal ingredients showing function

const showMealInfo = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(data =>
        displayMealInfo(data.meals[0]) 
    )
}

const displayMealInfo = info =>{
        const singleMealInfo = document.getElementById('single-meal');
        singleMealInfo.innerHTML=`<div class="modal-dialog  mb-5">
                                            <div class="class="modal-content shadow rounded">
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
