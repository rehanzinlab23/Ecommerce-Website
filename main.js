// Global Elements

const bar = document.getElementById('bar');

const close = document.getElementById('close');

const nav = document.getElementById('navbar');

const remove = document.querySelectorAll('.remove');

if (bar) {
     bar.addEventListener('click', () => {
          nav.classList.add('active')
     })
}

if (close) {
     close.addEventListener('click', () => {
          nav.classList.remove('active')
     })
}

remove.forEach((btn) => {
    btn.addEventListener('click', () => {
        // find the closest table row (tr) and remove it
        const row = btn.closest('tr');
        if (row) {
            row.remove();
        }
    });
});