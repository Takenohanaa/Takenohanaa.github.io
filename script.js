"use strict";

document.addEventListener('DOMContentLoaded', function() {
    const routes = document.querySelectorAll('.pages');

    const githubBtn = document.getElementById('githubBtn');
    const biliBtn = document.getElementById('biliBtn');
    const openBtn = document.getElementById('openBtn');
    const sidenav = document.getElementById('mainSidenav');
    const closeBtn = document.getElementById('closeBtn');

    function router() {
        let hash = window.location.hash;

        if (!hash) {
            window.location.replace('#home');
            return;
        }
        
        const pageId = hash.substring(1);
        
        routes.forEach(route => {
            route.classList.remove('active');
        });

        const targetpage = document.getElementById(pageId);

        if (targetpage) {
            targetpage.classList.add('active');
        }
        else {
            document.getElementById('home').classList.add('active');
        }
    }
    window.addEventListener('hashchange', router);
    router();

    const navLinks = sidenav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidenav.classList.remove('open');
        });
    });

    if (githubBtn) {
        githubBtn.addEventListener('click', function() {
            window.open('https://github.com/Takenohanaa', '_blank');
        });
    }
    if (biliBtn) {
        biliBtn.addEventListener('click', function() {
            window.open('https://space.bilibili.com/551484771?spm_id_from=333.1007.0.0', '_blank');
        });
    }
    if (openBtn && sidenav) {
        openBtn.addEventListener('click', function() {
            sidenav.classList.add('open');
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)"; 
        });
    }
    if (closeBtn && sidenav) {
        closeBtn.addEventListener('click', function() {
            sidenav.classList.remove('open');
            document.body.style.backgroundColor = "#ffffff";  
        });
    }
});