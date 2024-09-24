// Check for user's preferred color scheme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply dark mode if preferred
if (prefersDarkScheme) {
    document.body.classList.toggle("dark-mode");
}

// Listen for changes in the user's preference
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', event => {
    if (event.matches) {
        document.body.classList.add("dark-mode");
//        document.body.style.
    } else {
        document.body.classList.remove("dark-mode");
    }
});

// Fetch GitHub repositories
/*async function fetchGitHubRepos() {
    const response = await fetch('https://api.github.com/users/javadrahmani2003/repos');
    const repos = await response.json();
    const repoContainer = document.getElementById('github-repos');

    repos.forEach(repo => {
        const repoDiv = document.createElement('div');
        repoDiv.classList.add('repo');
        repoDiv.innerHTML = `
            <h4>${repo.name}</h4>
            <p>${repo.description || 'No description available.'}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        repoContainer.appendChild(repoDiv);
    });
}

// Call the function to fetch repos
fetchGitHubRepos();*/