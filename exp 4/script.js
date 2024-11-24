// script.js

// Add item to the list
document.getElementById('addItemButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value;
    if (itemText === '') return;

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
        <span class="item-text">${itemText}</span>
        <div>
            <button class="btn btn-success btn-sm move-up">Up</button>
            <button class="btn btn-warning btn-sm move-down">Down</button>
            <button class="btn btn-secondary btn-sm edit">Edit</button>
            <button class="btn btn-danger btn-sm delete">Delete</button>
        </div>
    `;

    document.getElementById('itemList').appendChild(li);
    itemInput.value = '';
});

// Handle click events for list items
document.getElementById('itemList').addEventListener('click', function(event) {
    const target = event.target;
    const li = target.closest('li');

    if (target.classList.contains('delete')) {
        li.remove();
    } else if (target.classList.contains('edit')) {
        const itemText = li.querySelector('.item-text');
        const newText = prompt('Edit item:', itemText.textContent);
        if (newText) {
            itemText.textContent = newText;
        }
    } else if (target.classList.contains('move-up')) {
        const previous = li.previousElementSibling;
        if (previous) {
            li.parentNode.insertBefore(li, previous);
        }
    } else if (target.classList.contains('move-down')) {
        const next = li.nextElementSibling;
        if (next) {
            li.parentNode.insertBefore(next, li);
        }
    }
});
