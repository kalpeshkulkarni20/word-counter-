function countWords() {
    var codeInput = document.getElementById('codeInput');
    var wordCount = document.getElementById('wordCount');
    
    var code = codeInput.value;
    
    // Remove HTML and CSS comments
    code = code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');

    // Remove JavaScript comments
    code = code.replace(/\/\/.*?(\r\n|\r|\n|$)|\/\*[\s\S]*?\*\//g, '');

    // Count words
    var words = code.split(/\s+/).filter(function (word) {
        return word.length > 0;
    });

    wordCount.innerHTML = 'Word count: ' + words.length;
}
