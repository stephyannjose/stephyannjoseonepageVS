document.addEventListener("DOMContentLoaded", function () {
    // JavaScript Animation Example
    const elementToAnimate = document.querySelector('h1');

    elementToAnimate.addEventListener('mouseover', function () {
        this.style.color = 'red';
    });

    elementToAnimate.addEventListener('mouseout', function () {
        this.style.color = '#333';
    });
});
