function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.classList.add('description-btn');
    moreButtons = document.querySelectorAll('.description-btn');
    close.addEventListener('click', hideModal);

    for (let i = 0; i < moreButtons.length; i++) {
        moreButtons[i].addEventListener('click', openModal);
    }

    function openModal() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    function hideModal() {
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    }
}

module.exports = modal;