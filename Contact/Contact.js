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
    window.location.href = 'Contact.html';
});
document.getElementById('home_button').addEventListener('click', function () {
    window.location.href = '../Home/home_page.html';
});
document.getElementById('blogs_page').addEventListener('click', function () {
    window.location.href = '../Blogs/Blogs.html';
});
function executeSafeCode() {
    console.log("This is safe code!");
}

// Call the function directly
setTimeout(executeSafeCode, 1000);

// Or use anonymous functions
setTimeout(() => {
    console.log("Safe code without eval!");
}, 1000);