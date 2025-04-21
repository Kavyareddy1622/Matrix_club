document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});

document.getElementById('show-more').addEventListener('click', () => {
    const hiddenNotices = document.querySelectorAll('.notice-card.hidden');
    hiddenNotices.forEach(notice => notice.classList.remove('hidden'));
    if (hiddenNotices.length === 0) {
        document.getElementById('show-more').style.display = 'none';
    }
});