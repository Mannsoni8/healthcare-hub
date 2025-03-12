document.getElementById('searchBar').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const items = document.querySelectorAll('.searchable-item');
    
    items.forEach(function(item) {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
