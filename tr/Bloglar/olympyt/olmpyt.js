document.addEventListener("scroll", updateScrollingItems);
document.addEventListener("DOMContentLoaded", updateScrollingItems); // Trigger on page load

function updateScrollingItems() {
    const scrollingItems = document.querySelectorAll(".scrolling-item");
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    scrollingItems.forEach((item, index) => {
        const itemOffset = index * windowHeight;
        const start = itemOffset - windowHeight;
        const end = itemOffset + windowHeight;

        const progress = (scrollY - start) / windowHeight;

        if (progress >= 0 && progress <= 2) {
            // Smooth opacity changes
            const opacity = Math.min(Math.max(1 - Math.abs(progress - 1), 0), 1); // Peak at progress = 1

            // Smooth translation
            const translateY = 100 - progress * 100;

            // Apply styles
            item.style.transform = `translate(-50%, ${translateY}%)`;
            item.style.opacity = opacity;
        } else {
            // Reset for items out of range
            item.style.opacity = 0;
        }
    });
}

const button = document.querySelector('.tbtk-bttn');
const imageContainer = document.querySelector('.image-container');
const scrollingContainer = document.querySelector('.scrolling-container');

// Show the image container on hover
button.addEventListener('mouseover', () => {
    imageContainer.style.opacity = '1';
    scrollingContainer.style.filter = 'blur(2px)'; 
});

// Hide the image container when not hovering
button.addEventListener('mouseout', () => {
    imageContainer.style.opacity = '0';
    scrollingContainer.style.filter = 'blur(0px)'; 
});

window.addEventListener('scroll', function () {
    const entrance = document.querySelector('.entrance');
    const programContainer = document.querySelector('.program-container');
    const programScrolling = document.querySelector('.program-scrolling');

    // Get the bounding rectangle of programScrolling
    const scrollingRect = programScrolling.getBoundingClientRect();

    if (scrollingRect.top <= 70 && scrollingRect.bottom > window.innerHeight) {
        // Make program-container fixed when within the scrolling bounds
        programContainer.style.position = 'fixed';
        programContainer.style.top = '70px';
    } else if (scrollingRect.bottom <= window.innerHeight) {
        // Allow program-container to scroll naturally when reaching the end
        programContainer.style.position = 'absolute';
        programContainer.style.top = 'auto';
        programContainer.style.bottom = '0'; // Pin it to the bottom of the parent
    } else {
        // Reset to relative when entrance is still in view
        programContainer.style.position = 'relative';
        programContainer.style.top = '0';
    }
});

const gradesButtons = document.querySelectorAll('.grades'); // Select all grade elements
const programScrolling = document.querySelector('.program-scrolling');
let isExpanded = false; // State variable

gradesButtons.forEach((button) => {
    button.addEventListener('click', () => {
        programScrolling.style.height = isExpanded ? '100vh' : '550vh';
        isExpanded = !isExpanded; // Toggle the state
    });
});

let isMoved = false; // Tracks the toggle state

const initialPositions = [];

window.addEventListener('load', () => {
    const allGrades = document.querySelectorAll('.grades');

    allGrades.forEach((grade) => {
        const rect = grade.getBoundingClientRect();
        const containerRect = grade.parentElement.getBoundingClientRect();

        // Store the initial positions relative to the container
        initialPositions.push({
            left: rect.left - containerRect.left,
            top: rect.top - containerRect.top,
        });
    });
});

document.querySelectorAll('.grades').forEach((gradeElement, index) => {
    gradeElement.addEventListener('click', () => {
        const allGrades = document.querySelectorAll('.grades');

        if (!isMoved) {
            // Move all buttons to the left and stack them
            allGrades.forEach((grade, i) => {
                const initial = initialPositions[i]; // Get initial position
                grade.style.position = 'absolute'; // Allow overlapping
                grade.style.transition = 'all 0.5s ease'; // Smooth animation

                // Set the initial positions explicitly before sliding
                grade.style.left = `${initial.left}px`;
                grade.style.top = `${initial.top}px`;

                // Trigger a reflow to ensure the positions are applied
                void grade.offsetHeight;

                // Slide to the left and stack
                grade.style.left = '5vw'; // Move to the left of the page
                grade.style.top = '50%'; // Stack vertically centered
                grade.style.transform = 'translateY(-50%)'; // Center vertically
                grade.style.zIndex = i === index ? '10' : '1'; // Bring clicked button to the top
                grade.style.background = i === index ? '#2c003eda' : ''; // Highlight clicked button
            });
        } else {
            // Reset all buttons to their original positions
            allGrades.forEach((grade, i) => {
                const initial = initialPositions[i]; // Get initial position
                grade.style.transition = 'all 0.5s ease'; // Smooth animation
                grade.style.left = `${initial.left}px`; // Reset left
                grade.style.top = `${initial.top}px`; // Reset top
                grade.style.transform = ''; // Remove transform
                grade.style.zIndex = ''; // Reset z-index
                grade.style.background = ''; // Reset background
            });
        }

        // Toggle the movement state
        isMoved = !isMoved;
    });
});
document.querySelectorAll('.grades').forEach((gradeElement) => {
    gradeElement.addEventListener('click', (e) => {
        const gradeNumber = e.currentTarget.getAttribute('data-grade'); // Get the grade number clicked
        
        // Find the program scroll container
        const programDetails = document.getElementById('program-details');
        
        // Get all grade-content divs inside the program scroll
        const allGradeContents = document.querySelectorAll('.grade-content');

        // Check if the programDetails is already visible
        if (programDetails.style.width && programDetails.style.width !== '0px') {
            // Hide program details by setting width, height, opacity back to initial state
            programDetails.style.width = '0';
            programDetails.style.height = '0';
            programDetails.style.opacity = '0';
            programDetails.style.right = '0';
            programDetails.style.padding = '0';
            
            // Hide all grade contents
            allGradeContents.forEach(content => {
                content.style.display = 'none'; // Hide all
            });
        } else {
            // Make program details visible and positioned correctly
            programDetails.style.width = '50%'; // Set the width to make it visible
            programDetails.style.height = '60%'; // Adjust height to fit content
            programDetails.style.opacity = '1'; // Make it visible
            programDetails.style.right = '0'; // Position to the right of the page
            programDetails.style.paddingLeft = '5%';
            programDetails.style.paddingRight = '5%';
            
            // Hide all grade content divs initially
            allGradeContents.forEach(content => {
                content.style.display = 'none'; // Hide all
            });

            // Ensure the clicked grade content is shown
            const clickedGradeContent = document.querySelector(`.grade-content[data-id="${gradeNumber}"]`);
            if (clickedGradeContent) {
                clickedGradeContent.style.display = 'block'; // Show the clicked grade content
            }
        }
    });
});


function updateScrollingBoxes() {
    const gradeContent = document.querySelector(".grade-content"); // Select the grade container
    const scrollingBoxes = document.querySelectorAll(".scrolling-box"); // Select all scrolling-box elements

    // Check if gradeContent and scrollingBoxes are found
    if (!gradeContent || scrollingBoxes.length === 0) return;

    const fixedOffset = window.innerHeight * 6; // 600vh (adjust this if necessary)
    const contentOffset = gradeContent.offsetTop; // Vertical offset of the container from the top of the page
    const scrollY = window.scrollY; // Current vertical scroll position

    // Calculate how much to scroll the content relative to the adjusted scroll position
    const contentScroll = scrollY - contentOffset - fixedOffset;

    // Apply translation to each scrolling-box
    scrollingBoxes.forEach((box) => {
        if (contentScroll >= 0) {
            box.style.transform = `translateY(${-contentScroll}px)`; // Scroll each box vertically
        } else {
            box.style.transform = `translateY(0px)`; // Reset if above the container
        }
    });
}

// Listen for scroll events to update the effect
window.addEventListener("scroll", updateScrollingBoxes);

// Call the function initially to set up the initial state
updateScrollingBoxes();

document.cookie = "name=value; SameSite=None; Secure";
document.cookie = "__ga=your_cookie_value; SameSite=None; Secure";

document.getElementById('info_page').addEventListener('click', function () {
    window.location.href = '/tr/Hakkimda/Hakkimda.html';
});
document.getElementById('name_link').addEventListener('click', function () {
    window.location.href = '/tr/Hakkimda/Hakkimda.html';
});
document.getElementById('portfolio_page').addEventListener('click', function () {
    window.location.href = '/tr/Portfolyo/Portfolyo.html';
});
document.getElementById('contact_page').addEventListener('click', function () {
    window.location.href = '/tr/Iletisim/Iletisim.html';
});
document.getElementById('home_button').addEventListener('click', function () {
    window.location.href = '/tr/AnaSayfa/ana_sayfa.html';
});
document.getElementById('blogs_page').addEventListener('click', function () {
    window.location.href = 'Bloglar.html';
});
document.getElementById('turkish').addEventListener('click', function () {
    window.location.href = '/tr/Bloglar/Bloglar.html';
});
document.getElementById('english').addEventListener('click', function () {
    window.location.href = '/Blogs/Blogs.html';
});