class Carousel {
    constructor(carousel) {
        // Grab a reference to our caroussel
        this.carousel = carousel;
        // console.log(this.carousel);
        // And a reference to the left button
        this.leftButton = document.querySelector('.left-button');
        // console.log(this.leftButton);
        // Likewise the right button
        this.rightButton = document.querySelector('.right-button');
        // console.log(this.rightButton);
        // And a reference to all our carousel images
        this.images = document.querySelectorAll('.carousel img');
        // console.log(this.images)
        if (this.images.length > 0) {
            // console.log(this.images);
            // Get the active slide from the data-active-slide attribute on the carousel element
            this.index = this.carousel.dataset.activeSlide - 1; // Convert for zero indexing
            // Make sure our slide number is within range
            if (!this.index || this.index < 0) this.index = 0;
            if (this.index > this.images.length - 1) this.index = this.images.length - 1;
            // console.log(this.index);
            this.images[this.index].classList.add('active-slide');
        } else {
            // If no images were found, log an error and hide the carousel
            this.carousel.style.display = 'none';
            throw new Error('No carousel images found. Hiding the carousel');
        }
        this.leftButton.addEventListener('click', () => {
            this.advanceSlide(this.index - 1);
        });
        this.rightButton.addEventListener('click', () => {
            this.advanceSlide(this.index + 1);
        });
    }
    advanceSlide(next) {
        if (next < 0) next = this.images.length - 1;
        if (next === this.images.length) next = 0;
        this.images[this.index].classList.remove('active-slide');
        this.images[next].classList.add('active-slide');
        this.index = next;
    }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
