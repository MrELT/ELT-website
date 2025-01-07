function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Fetch all blogs and display the selected one
  const blogId = getQueryParam('blogId'); // Get the blog ID from the URL
  if (blogId) {
    fetch('blog-type1.json') // Load the single JSON file with all blogs
      .then(response => response.json())
      .then(blogs => {
        // Find the blog with the matching ID
        const blog = blogs.find(b => b.id === blogId);
        if (blog) {
          // Update image
          const imageElement = document.getElementById('blog-image');
          imageElement.src = blog.image;
          imageElement.alt = blog.title;
          
          // Update title
          const titleElement = document.getElementById('blog-title');
          titleElement.querySelector('p').textContent = blog.title;
  
          // Update content
          const contentContainer = document.getElementById('blog-content');
          contentContainer.innerHTML = ''; // Clear previous content
          blog.paragraphs.forEach(paragraphs => {
            const p = document.createElement('p');
            p.className = 'content_blog';
            p.textContent = paragraphs;
            contentContainer.appendChild(p);
          });

          // Update date
          const dateElement = document.getElementById('blog-date');
          dateElement.querySelector('p').textContent = blog.date;
          console.log(blog);
        } 
        
        else {
          console.error('Blog not found!');
        }
      })
      .catch(error => console.error('Error loading blogs:', error));
  } else {
    console.error('No blog ID specified in the URL!');
  }

document.getElementById('info_page').addEventListener('click', function () {
    window.location.href = '../../Information/Information.html';
});
document.getElementById('name_link').addEventListener('click', function () {
    window.location.href = '../../Information/Information.html';
});
document.getElementById('portfolio_page').addEventListener('click', function () {
  window.location.href = '/Portfolio/Portfolio.html';
});
document.getElementById('contact_page').addEventListener('click', function () {
    window.location.href = '../../Contact/Contact.html';
});
document.getElementById('home_button').addEventListener('click', function () {
    window.location.href = '../../Home/home_page.html';
});
document.getElementById('blogs_page').addEventListener('click', function () {
    window.location.href = '../Blogs.html';
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

