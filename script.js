"use strict";

var request = indexedDB.open("userData", 1);


document.addEventListener('DOMContentLoaded', function() {
    const githubBtn = document.getElementById('githubBtn');
    if (githubBtn) {
        githubBtn.addEventListener('click', function() {
            window.open('https://github.com/Takenohanaa', '_blank');
        });
    }
});