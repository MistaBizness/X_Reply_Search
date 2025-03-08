document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const keywordInput = document.getElementById('keyword');
    const statusDiv = document.getElementById('status');

    // Automatically focus the input field when popup opens
    keywordInput.focus();

    // Function to perform the search
    function performSearch() {
        const keyword = keywordInput.value.trim();
        if (!keyword) {
            statusDiv.textContent = 'Please enter a keyword';
            return;
        }

        // Get the current tab URL
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const tab = tabs[0];
            const url = tab.url;

            // Check if we're on an X post page
            const postMatch = url.match(/x\.com\/[^/]+\/status\/(\d+)/);
            if (!postMatch) {
                statusDiv.textContent = 'Please open an X post page first';
                return;
            }

            const conversationId = postMatch[1];
            const searchQuery = `conversation_id:${conversationId} ${keyword}`;
            
            // Open new tab with search results
            const searchUrl = `https://x.com/search?q=${encodeURIComponent(searchQuery)}&src=typed_query`;
            chrome.tabs.create({ url: searchUrl });
            
            statusDiv.textContent = `Searching for "${keyword}" in replies to post ${conversationId}`;
        });
    }

    // Button click handler
    searchBtn.addEventListener('click', performSearch);

    // Enter key handler
    keywordInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});