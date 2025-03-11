# X Reply Search Chrome Extension

## Overview
X Reply Search is a Chrome browser extension that makes it easy to search replies to specific X posts using keywords. By leveraging X's `conversation_id` search syntax, this tool allows users to quickly find relevant replies without manually constructing search queries.

For example, if you're on a post like `https://x.com/elonmusk/status/1895582321136583162` and want to find replies containing "Tesla," the extension generates the search query `conversation_id:1895582321136583162 Tesla` and opens the results in a new tab.

## Features
- **Automatic Post Detection**: Extracts the post ID from the current X page URL.
- **Keyword Search**: Enter any keyword to search within replies.
- **Flexible Input**: Trigger searches by clicking the "Search Replies" button or pressing Enter.
- **Instant Focus**: The keyword input field is automatically selected when opening the extension.
- **Simple Interface**: Clean, user-friendly popup design.

### Manual Installation (For Development)
1. Clone or download this project folder.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right.
4. Click "Load unpacked" and select the folder containing these files:
   - `manifest.json`
   - `popup.html`
   - `popup.js`
   - `icon16.png`, `icon48.png`, `icon128.png`
5. The extension will appear in your toolbar.

## Usage
1. Navigate to an X post (e.g., `https://x.com/username/status/123456789`).
2. Click the X Reply Search icon in your Chrome toolbar.
3. Type a keyword into the input field (e.g., "awesome").
4. Press Enter or click "Search Replies."
5. A new tab will open with search results showing replies containing your keyword.

## Files
- `manifest.json`: Extension configuration file.
- `popup.html`: HTML structure and styling for the popup interface.
- `popup.js`: JavaScript logic for handling searches and user input.
- `icon*.png`: Icons in sizes 16x16, 48x48, and 128x128 pixels.

## Development
- Built with HTML, CSS, and JavaScript.
- Uses Chrome's `activeTab` permission to read the current page URL.
- No external dependencies or API calls—relies on X's native search functionality.

## Contributing
Feel free to fork this project and submit pull requests with improvements! Some ideas:
- Add support for multiple keywords.
- Include a history of recent searches.
- Enhance error handling for invalid URLs.

## License
This project is released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it as you see fit.

## Acknowledgments
- Created with assistance from Grok (xAI).
- Inspired by the need for quicker reply searching on X.

## Contact
For support or suggestions, [insert your preferred contact method, e.g., email or GitHub username].
