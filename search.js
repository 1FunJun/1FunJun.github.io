function performClientSearch() {
    // Get the search term from the input field
    const searchTerm = document.getElementById("search-form-1").value.toLowerCase();

    // Get the container where search results will be displayed
    const searchResultsContainer = document.getElementById("search-results");

    // Clear previous search results
    searchResultsContainer.innerHTML = "";

    // Filter articles based on the search term
    const matchingArticles = articles.filter((article) => {
        const title = article.title.toLowerCase();
        const content = article.content.toLowerCase();
        return title.includes(searchTerm) || content.includes(searchTerm);
    });

    // Display search results
    if (matchingArticles.length === 0) {
        searchResultsContainer.innerHTML = "<p>No matching articles found.</p>";
    } else {
        matchingArticles.forEach((article) => {
            const articleDiv = document.createElement("div");
            articleDiv.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
            searchResultsContainer.appendChild(articleDiv);
        });
    }

    // Prevent the form from submitting and reloading the page
    return false;
}

// Define your articles data (replace with your data)
const articles = [
    {
        title: "Test",
        content: "Hello World",
    },
    {
        title: "Search for this",
        content: "Test Article 2.",
    },
    // Add more articles as needed
];