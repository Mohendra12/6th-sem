document.addEventListener('DOMContentLoaded' , 
    function() {
        const coll = document.querySelectorAll('.collapsible');
        coll.forEach(function(item) {
            item.addEventListener('click', 
                function() {
                    this.classList.toggle('active');
                    const content = this.nextElementSibling;
                    if (content.style.display === 'block') {
                        content.style.display = 'none';
                    } else {
                        content.style.display = 'block';
                    }
                });
        });
    });