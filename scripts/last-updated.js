document.addEventListener('DOMContentLoaded', function() {
    const repoOwner = 'treshanappuhamy'; // The GitHub username of the repository owner
    const repoName = 'portfolio'; // The name of the repository
    
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const lastUpdated = data.pushed_at;
            const formattedDate = new Date(lastUpdated).toLocaleString();
            document.getElementById('last-updated').textContent = `Last Updated: ${formattedDate}`;
        })
        .catch(error => {
            document.getElementById('last-updated').textContent = 'Error fetching the last updated date.';
            console.error('Error fetching GitHub data:', error);
        });
});