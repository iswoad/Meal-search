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
            
            const mealName = eachMeal.strMeal;
            const mealImage = eachMeal.strMealThumb;

            document.getElementById('search-result').innerHTML += `
            <div class="searched-meal my-5">
                <div onclick="showMealInfo(${eachMeal.idMeal})" class="single-meal">
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
    // const mealId = mealList.idMeal
    console.log(mealId)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        // data.meals.forEach((id) => {
        //     if (storedData.data[i].idMeal == id) {
        //         const measure = id.stringredient
        //     }
        // });
        document.getElementById('search-result').innerHTML = `
        <div class="single-meal-info">
                <div class="single-meal">
                    <img src="${data.meals[0].strMealThumb}"></img>
                    <h1>${data.meals[0].strMeal}</h1>
                    <div class="ingredients">
                        <ol>
                            <li>${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}</li>
                            <li>${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}</li>
                            <li>${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}</li>
                            <li>${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}</li>
                            <li>${data.meals[0].strMeasure5} ${data.meals[0].strIngredient5}</li>
                            <li>${data.meals[0].strMeasure6} ${data.meals[0].strIngredient6}</li>
                            <li>${data.meals[0].strMeasure7} ${data.meals[0].strIngredient7}</li>
                            <li>${data.meals[0].strMeasure8} ${data.meals[0].strIngredient8}</li>
                            <li>${data.meals[0].strMeasure9} ${data.meals[0].strIngredient9}</li>
                        </ol>
                    </div>
                </div>  
            </div>`;
    })
}



