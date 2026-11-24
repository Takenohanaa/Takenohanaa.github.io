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
        });
    }
    if (closeBtn && sidenav) {
        closeBtn.addEventListener('click', function() {
            sidenav.classList.remove('open');
        });
    }

    // 背景图按设备加载：只下载当前设备需要的一张（index.html 中已 preload 预热）
    const bgQuery = window.matchMedia('(max-width: 768px)');
    function updateBackground() {
        const src = bgQuery.matches
            ? 'Resources/images/bg_phone.webp'
            : 'Resources/images/amiya.webp';
        document.body.style.backgroundImage = 'url("' + src + '")';
    }
    updateBackground();
    if (typeof bgQuery.addEventListener === 'function') {
        bgQuery.addEventListener('change', updateBackground);
    }
});