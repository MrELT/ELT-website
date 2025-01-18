document.addEventListener("DOMContentLoaded", () => {
    // Fetch the JSON file
    fetch('Blog1/blog-type1.json')
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
document.querySelectorAll('.blog_button').forEach(button => {
    button.addEventListener('click', function () {
      const blogId = this.getAttribute('data-id'); // Get the blog ID
      window.location.href = `Blog1/blog-1.html?blogId=${blogId}`; // Redirect with the ID
    });
  });

  document.getElementById('olympyt').addEventListener('click', function () {
    window.location.href = 'olympyt/olmpyt.html';
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

