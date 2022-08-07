let tabs = document.querySelectorAll('.tab'), 
toggles = document.querySelectorAll('.toggle');

toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        let toggleId = toggle.id;

        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].id !== toggleId) {
                tabs[i].style.display = 'none';
            } else {
                tabs[i].style.display = 'flex';
            }
        }
        for (let i = 0; i < toggles.length; i++) {
            toggles[i].classList.remove('toggle-active');
        }
        toggle.classList.add('toggle-active');
    });
});