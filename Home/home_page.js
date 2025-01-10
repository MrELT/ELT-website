let currentIndex = 0; // Variable to track the current slide
let autoChangeTimer; // Variable to hold the timer

// Fetch the show.json file and use the data
fetch('show.json')
    .then(response => response.json())
    .then(data => {
        window.data = data; // Save the data globally so you can access it anywhere
        updateContent(); // Initialize content
        updateImage(); // Initialize the image
        startAutoChangeTimer(); // Start the auto-change timer
    })
    .catch(error => console.error('Error loading JSON:', error));

// Function to update the content (title and content) based on currentIndex
function updateContent() {
    const displayedTitle = document.getElementById('displayed-title');
    const displayedContent = document.getElementById('displayed-content');

    // Get the current slide data
    const currentSlide = window.data[currentIndex];

    // Update the title
    displayedTitle.textContent = currentSlide.title;

    // Clear previous content
    displayedContent.innerHTML = '';

    // Loop through each paragraph and create <p> elements
    currentSlide.content.forEach(paragraph => {
        const pElement = document.createElement('p');
        pElement.textContent = paragraph;
        displayedContent.appendChild(pElement);
    });
}

// Function to update the image based on currentIndex
function updateImage() {
    const imageContainer = document.querySelector('.image-container');
    const currentImage = document.getElementById('displayed-image');

    // Get the current slide data
    const currentSlide = window.data[currentIndex];

    // Set the image source and alt text
    currentImage.src = currentSlide.image;
    currentImage.alt = 'Image for ' + currentSlide.title;
}

// Function to change slides (next or previous)
function changeSlide(direction) {
    const imageContainer = document.querySelector('.image-container');
    const currentImage = document.getElementById('displayed-image');

    // Get the new slide index
    const nextIndex = (currentIndex + direction + window.data.length) % window.data.length;
    const nextSlide = window.data[nextIndex];

    // Create a new image for the next slide
    const newImage = document.createElement('img');
    newImage.src = nextSlide.image;
    newImage.alt = 'Image';
    newImage.classList.add('transitioning-image');
    if (direction === 1) {
        newImage.style.transform = 'translateX(100%)'; // Start next image off-screen (to the right)
    } else {
        newImage.style.transform = 'translateX(-100%)'; // Start next image off-screen (to the left)
    }

    // Add the new image to the container
    imageContainer.appendChild(newImage);

    // Start sliding the current and new images
    requestAnimationFrame(() => {
        if (direction === 1) {
            currentImage.style.transform = 'translateX(-100%)'; // Slide current image out to the left
            newImage.style.transform = 'translateX(0%)'; // Slide new image into view from the right
        } else {
            currentImage.style.transform = 'translateX(100%)'; // Slide current image out to the right
            newImage.style.transform = 'translateX(0%)'; // Slide new image into view from the left
        }
    });

    // Wait for the transition to complete
    setTimeout(() => {
        // Update the current index
        currentIndex = nextIndex;

        // Remove the old image and set the new image as the displayed image
        imageContainer.removeChild(currentImage);
        newImage.id = 'displayed-image'; // Set the ID for the new image

        // Update the title and content
        updateContent();
    }, 500); // Match the duration of the CSS transition
}

// Function to start the timer that auto-changes the slide
function startAutoChangeTimer() {
    // Clear any existing timer
    clearInterval(autoChangeTimer);

    // Set the timer to change slides every 5 seconds (5000 ms)
    autoChangeTimer = setInterval(() => {
        changeSlide(1); // Automatically move to the next slide
    }, 5000);
}

// Function to reset the auto-change timer (called on user interaction)
function resetAutoChangeTimer() {
    startAutoChangeTimer(); // Restart the timer when the user interacts
}

// Event listeners to reset the timer on user interaction
document.addEventListener('click', resetAutoChangeTimer);
document.addEventListener('keydown', resetAutoChangeTimer);
document.addEventListener('mousemove', resetAutoChangeTimer);
document.addEventListener('scroll', resetAutoChangeTimer);

document.addEventListener("DOMContentLoaded", () => {
    // Fetch the JSON file
    fetch('/Blogs/Blog1/blog-type1.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(blogs => {
            // Loop through the fetched blog data
            blogs.forEach(blog => {
                // Find the corresponding container by data-id
                const button = document.querySelector(`.blog_button[data-id="${blog.id}"]`);

                if (button) {
                    
                    // Populate title
                    const titleElement = button.querySelector(".title_blog");
                    if (titleElement) titleElement.textContent = blog.title;
                    
                    // Populate image
                    const imgageElement = button.querySelector(".blog-image");
                    if (imgageElement) imgageElement.src = blog.image;

                    // Populate content
                    const contentContainer = button.querySelector(".blog-content");
                    if (contentContainer) {
                        contentContainer.innerHTML = ""; // Clear existing content
                        blog.paragraphs.forEach(paragraphs => {
                            const p = document.createElement("p");
                            p.className = "content_blog";
                            p.textContent = paragraphs;
                            contentContainer.appendChild(p);
                        });
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error fetching the blog data:', error);
        });
});

document.querySelectorAll('.blog_button').forEach(button => {
    button.addEventListener('click', function () {
      const blogId = this.getAttribute('data-id'); // Get the blog ID
      window.location.href = `/Blogs/Blog1/blog-1.html?blogId=${blogId}`; // Redirect with the ID
    });
  });


document.getElementById('home_page').addEventListener('click', function () {
    window.location.href = 'home_page.html';
});
document.getElementById('info_page').addEventListener('click', function () {
    window.location.href = '../Information/Information.html';
});
document.getElementById('name_link').addEventListener('click', function () {
    window.location.href = '../Information/Information.html';
});
document.getElementById('portfolio_page').addEventListener('click', function () {
    window.location.href = '../Portfolio/Portfolio.html';
});
document.getElementById('contact_page').addEventListener('click', function () {
    window.location.href = '../Contact/Contact.html';
});
document.getElementById('blogs_page').addEventListener('click', function () {
    window.location.href = '../Blogs/Blogs.html';
});
function executeSafeCode() {
    console.log("This is safe code!");
}