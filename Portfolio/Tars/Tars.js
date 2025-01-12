document.getElementById('info_page').addEventListener('click', function () {
    window.location.href = '/Information/Information.html';
});
document.getElementById('name_link').addEventListener('click', function () {
    window.location.href = '/Information/Information.html';
});
document.getElementById('contact_page').addEventListener('click', function () {
    window.location.href = '/Contact/Contact.html';
});
document.getElementById('portfolio_page').addEventListener('click', function () {
    window.location.href = '/Portfolio/Portfolio.html';
});
document.getElementById('home_button').addEventListener('click', function () {
    window.location.href = '/Home/home_page.html';
});
document.getElementById('blogs_page').addEventListener('click', function () {
    window.location.href = '/Blogs/Blogs.html';
});
document.getElementById('turkish').addEventListener('click', function () {
    window.location.href = '/tr/Portfolyo/Tars/Tars.html';
});
document.getElementById('english').addEventListener('click', function () {
    window.location.href = '/Portfolio/Tars/Tars.html';
});
function executeSafeCode() {
    console.log("This is safe code!");
}
setTimeout(executeSafeCode, 1000);
setTimeout(() => {
    console.log("Safe code without eval!");
}, 1000);