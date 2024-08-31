function fetchCategories() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => {
            const categoriesContainer = document.getElementById('categories-container');
            const categories = data.categories;

            categories.forEach(category => {
                const categoryDiv = document.createElement('div') ;
                categoryDiv.classList.add('category');

                const categoryImage = document.createElement('img');
                categoryImage.src = category.strCategoryThumb;
                categoryImage.alt = category.strCategory;
                categoryDiv.appendChild(categoryImage);

                const categoryName = document.createElement('h3');
                categoryName.textContent = category.strCategory;
                categoryDiv.appendChild(categoryName);

                categoriesContainer.appendChild(categoryDiv);
            });
        })
        
}
window.onload = fetchCategories;
