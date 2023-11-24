document.addEventListener('DOMContentLoaded', function () {
    const receiptBody = document.getElementById('receipt-body');
    const totalAmountElement = document.getElementById('total-amount');
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            const selectedBooks = data.slice(0, 3); 
            selectedBooks.forEach(book => {
                const row = createReceiptRow(book);
                receiptBody.appendChild(row);
            });
            const totalAmount = selectedBooks.reduce((total, book) => total + book.price, 0);
            totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
        });

    function createReceiptRow(book) {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = book.title;

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${book.price.toFixed(2)}`;

        row.appendChild(titleCell);
        row.appendChild(priceCell);

        return row;
    }
});
