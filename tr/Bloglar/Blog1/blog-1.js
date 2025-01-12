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
          contentContainer.innerHTML = '';

          blog.paragraphs.forEach(paragraph => {
            let updatedContent = paragraph; // Start with the original paragraph text
          
            blog.links.forEach(link => {
              link.word.forEach((word, index) => {
                const url = link.url[index];
                const linkHTML = `<a href="${url}" target="_blank">${word}</a>`;
                
                // Replace only the first occurrence of the word using regex to prevent overwriting
                const regex = new RegExp(`\\b${word}\\b`, 'g'); // Match whole words only
                updatedContent = updatedContent.replace(regex, linkHTML);
              });
            });
          
            // Create and append the updated paragraph
            const p = document.createElement('p');
            p.className = 'content_blog';
            p.innerHTML = updatedContent;
            contentContainer.appendChild(p);
          });
      
          // Update date
          const dateElement = document.getElementById('blog-date');
          dateElement.querySelector('p').textContent = blog.date;
          if (blog.image2) {
            const videoId = blog.image2.split('v=')[1]; // Extract the YouTube video ID
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        
            const img = document.createElement('img');
            img.src = thumbnailUrl;
            img.alt = 'YouTube Video Thumbnail';
            img.style.cursor = 'pointer';
            img.onclick = () => window.open(blog.image2, '_blank');
            img.style.width = '100%';
        
            contentContainer.appendChild(img);
        }
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
    window.location.href = '../Bloglar.html';
});
document.getElementById('turkish').addEventListener('click', function () {
  window.location.href = '/tr/Bloglar/Bloglar.html';
});
document.getElementById('english').addEventListener('click', function () {
  window.location.href = '/Blogs/Blogs.html';
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

