export const formatPage = () => {
    setInterval(() => {
        const header = document.getElementById('header');
        const page = document.getElementById('page');
        if (header && page) {
            const width = header.offsetWidth;
            page.style['width'] = `${width}px`;
        }
    }, 200);
};

export const formatImagesToSquareContainer = () => {
    setInterval(() => {
        let pics = document.getElementsByClassName('not-resized');
        for (let i = 0; i < pics.length; i++) {
            if (pics[i].offsetHeight > pics[i].offsetWidth) {
                pics[i].style.width = '100%';
                pics[i].style.height = 'auto';
            } else {
                pics[i].style.height = '100%';
                pics[i].style.width = 'auto';
            }
        }
    }, 200);
}

