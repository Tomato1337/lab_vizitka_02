document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu__btn')
    const menuList = document.querySelector('.menu__list')
    function toggleMenuVisibility() {
        menuList.classList.toggle('hide')
    }
    menuBtn.addEventListener('click', toggleMenuVisibility)
    // Скрипт для раскрытия блока portfolio

    const portfolioBtn = document.querySelectorAll('[data-portfolio]')
    const aboutBtn = document.querySelectorAll('[data-about]')
    const infoBlock = document.querySelector('.info')
    const portfolioBlock = document.querySelector('.portfolio')

    const elem = document.querySelector('.images')
    const msnry = new Masonry(elem, {
        // options
        itemSelector: '.images__item',
        columnWidth: 560,
        gutter: 10,
    })

    portfolioBtn.forEach((item) => {
        item.addEventListener('click', () => {
            infoBlock.style.display = 'none'
            portfolioBlock.style.display = 'block'
            menuList.classList.add('hide')
            msnry.layout()
        })
    })

    aboutBtn.forEach((item) => {
        item.addEventListener('click', () => {
            infoBlock.style.display = 'flex'
            portfolioBlock.style.display = 'none'
            menuList.classList.add('hide')
        })
    })

    const wrapper = document.querySelector('.wrapper')
    const wrapperImg = wrapper.querySelector('img')
    const portfolioImg = portfolioBlock.querySelectorAll('img')

    portfolioImg.forEach((item) => {
        item.addEventListener('click', (e) => {
            wrapper.style.display = 'flex'
            wrapperImg.src = item.src
            document.body.style.overflow = 'hidden'
        })
    })

    wrapper.addEventListener('click', (e) => {
        if (wrapper === e.target) {
            wrapper.style.display = 'none'
            document.body.style.overflow = ''
        }
    })
})
