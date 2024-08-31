function fetchCategories() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => {
            const categoriesContainer = document.getElementById('categories-container');
            const categories = data.categories;
        });
        
}
window.onload = fetchCategories;
