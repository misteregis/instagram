window.onload = () => {
    setTimeout(()=>{
        var current = 1,
            img_pos = ['-299px', '-549px', '-799px'],
            element = document.querySelector('main>div:nth-child(1)>div')

        setInterval(()=>{
            if (window.getComputedStyle(element.parentElement).display !== 'none') {
                current++;
                element.style.backgroundPosition = img_pos[current] + ' -5px'
                //element.style.backgroundImage = 'url(images/img' + current + '.jpg)'
                current = current === 3 ? 0 : current;
            }
        }, 3000)

        document.querySelector('body>span').style.display = 'none'
        document.querySelector('main').style.display = ''
    }, 500)
}