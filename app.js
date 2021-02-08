const getSearchResult = () =>{
    const searchKeyWOrd = document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyWOrd}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        data.meals.forEach((mealList) => {
            console.log(mealList);
            const mealName = mealList.strMeal;
            const mealImage = mealList.strMealThumb;

            document.getElementById('search-result').innerHTML += `
            <div class="searched-meal">
                <div class="single-meal">
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



