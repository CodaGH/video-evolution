
var button = document.getElementById('copypasta');

// Add an event listener to the button to listen for clicks
button.addEventListener('click', function() {
// Get the text of the button
var text = this.innerText;

// Use the navigator.clipboard.writeText method to copy the text to the clipboard
navigator.clipboard.writeText(text).then(function() {
    // The text was successfully copied to the clipboard
    console.log('Text copied to clipboard: ' + text);
}, function(err) {
    // There was an error copying the text to the clipboard
    console.error('Error copying text to clipboard: ' + err);
});
});
