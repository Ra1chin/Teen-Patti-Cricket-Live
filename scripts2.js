// Script for toggling content visibility, and ensuring only one container is open at a time
const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        
        // Close all toggle contents first
        const allContents = document.querySelectorAll('.toggle-content');
        allContents.forEach(c => {
            if (c !== content) {
                c.style.display = 'none';
            }
        });

        // Toggle the clicked content
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    });
});
