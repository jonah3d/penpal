function scrollText() {
    const texts = document.querySelectorAll('#text-container .text');
    let currentIndex = -1;

    texts.forEach((text, index) => {
        if (text.style.display !== 'none') {
            text.style.display = 'none';
            currentIndex = index;
        }
    });

    const nextIndex = (currentIndex + 1) % texts.length;
    texts[nextIndex].style.display = 'block';
}
