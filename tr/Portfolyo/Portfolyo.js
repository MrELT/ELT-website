document.getElementById('info_page').addEventListener('click', function () {
    window.location.href = '/tr/Hakkimda/Hakkimda.html';
});
document.getElementById('name_link').addEventListener('click', function () {
    window.location.href = '/tr/Hakkimda/Hakkimda.html';
});
document.getElementById('contact_page').addEventListener('click', function () {
    window.location.href = '/tr/Iletisim/Iletisim.html';
});
document.getElementById('portfolio_page').addEventListener('click', function () {
    window.location.href = 'Portfolyo.html';
});
document.getElementById('home_button').addEventListener('click', function () {
    window.location.href = '/tr/AnaSayfa/ana_sayfa.html';
});
document.getElementById('blogs_page').addEventListener('click', function () {
    window.location.href = '/tr/Bloglar/Bloglar.html';
});
document.getElementById('tars_button').addEventListener('click', function () {
    window.location.href = 'Tars/Tars.html';
});
document.getElementById('turkish').addEventListener('click', function () {
    window.location.href = '/tr/Portfolyo/Portfolyo.html';
});
document.getElementById('english').addEventListener('click', function () {
    window.location.href = '/Portfolio/Portfolio.html';
});
function executeSafeCode() {
    console.log("This is safe code!");
}
setTimeout(executeSafeCode, 1000);
setTimeout(() => {
    console.log("Safe code without eval!");
}, 1000);