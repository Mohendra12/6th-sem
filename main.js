document.addEventListener('DOMContentLoaded', 
function() {
    const coll = document.querySelectorAll('.collapsible');
    coll.forEach(function(item) {
        item.addEventListener('click', function()
        {
            this.classList.toggle('acitve');
            const content = this.nextElementSibling;
            if (content.style.display === 'block')
            {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const coll = doucment.querySelectorAll('.collapse');
    coll.forEach(function(item){
        item.addEventListener('click', function()
    {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'block')
        {
            content.style.display = 'none';

        } else {
            content.style.display = 'block';
        }

    });
    });
});
/*mobile menu*/
document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  });

  document.getElementById('syllabus-submenu-toggle').addEventListener('click', function () {
    const submenu = document.getElementById('syllabus-submenu');
    submenu.classList.toggle('hidden');
  });

  document.getElementById('notes-submenu-toggle').addEventListener('click', function () {
    const submenu = document.getElementById('notes-submenu');
    submenu.classList.toggle('hidden');
  });

  document.getElementById('pyqs-submenu-toggle').addEventListener('click', function () {
    const submenu = document.getElementById('pyqs-submenu');
    submenu.classList.toggle('hidden');
  });