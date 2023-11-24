document.addEventListener('DOMContentLoaded', function () {
    const categoriesContainer = document.getElementById('categories');
    const booksContainer = document.getElementById('books');

    fetch('books.json')
        .then(response => response.json())
        .then(data => {
          
            const categories = [...new Set(data.map(book => book.category))];
            categories.forEach(category => {
                const btn = document.createElement('button');
                btn.classList.add('category-btn');
                btn.textContent = category;
                btn.addEventListener('click', () => displayBooksByCategory(category, data));
                categoriesContainer.appendChild(btn);
            });
            displayBooksByCategory('All', data);
        });

    function displayBooksByCategory(category, data) {
        booksContainer.innerHTML = '';
        const filteredBooks = (category === 'All') ? data : data.filter(book => book.category === category);
        filteredBooks.forEach(book => {
            const card = document.createElement('div');
            card.classList.add('book-card');

            const img = document.createElement('img');
            img.src = book.cover_image;
            img.alt = book.title;

            const title = document.createElement('h3');
            title.textContent = book.title;

            const author = document.createElement('p');
            author.textContent = `Author: ${book.author}`;

            const price = document.createElement('p');
            price.textContent = `Price: $${book.price}`;

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(author);
            card.appendChild(price);

            booksContainer.appendChild(card);
        });
    }
});
