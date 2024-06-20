window.addEventListener('load', function() {
    document.querySelector('.loading').style.display = 'block'; // Display main content
    window.scrollTo(0, 0); // Scroll to top when the page is fully loaded
    window.scrollTo(0, 0); // Scroll to top when the page is fully loaded
    window.scrollTo(0, 0); // Scroll to top when the page is fully loaded
    setTimeout(function() {
        document.body.classList.remove('loading'); // Re-enable scrolling
        document.querySelector('.container').style.display = 'block'; // Display main content
        document.querySelector('.loading-page').style.display = 'none'; // Hide loading animation
    }, 1000); // Adjust the time delay as needed
});