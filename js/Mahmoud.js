let MealsRow = document.getElementById("meals_row");
let mealCategory=[];
let allMeals=["Pasta","Chicken","Beef","Seafood","Dessert"]


        //category button
    $(".cat_btn").click( async function(category){

        category=category.delegateTarget.innerText;  
        let mealsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        mealCategory = await mealsResponse.json();
        mealCategory = mealCategory.meals;
        
        displayMeals()
    })



    function displayMeals(){

        let hasala=``;

        for (let i=0;i<mealCategory.length;i++) {

            hasala +=`
                    <div class="col-md-3 mt-5 text-center one_meal " >
                        <img src="${mealCategory[i].strMealThumb}" alt="item_image" class="img-fluid rounded">
                        <h4 class="meal_title pt-3">${mealCategory[i].strMeal}</h4>
                    </div>
                    `
        }

        MealsRow.innerHTML=hasala
    }




    

    //all categories button
    $(".all_btn").click(  async function displayAllMeals(){
        let allMealsResponse;
        let hasala=``;
        for( let i=0 ; i<allMeals.length;i++){
            
            let mealsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${allMeals[i]}`)
            allMealsResponse = await mealsResponse.json();
            allMealsResponse =  allMealsResponse.meals;
            
            for(let x=0;x<allMealsResponse.length;x++){
                
                hasala += `
                <div class="col-md-3 mt-5 text-center one_meal " >
                    <img src="${allMealsResponse[x].strMealThumb}" alt="item_image" class="img-fluid rounded">
                    <h4 class="meal_title pt-3">${allMealsResponse[x].strMeal}</h4>
                </div>
                `
                }
        
        }
        MealsRow.innerHTML=hasala;
    }
    )




