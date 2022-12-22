window.addEventListener('DOMContentLoaded', () => {
    try {
        const screenWidth = window.screen.width;
        const hamburger = document.querySelector('.hamburger');
        const closeBtn = document.querySelector('.burger-menu__close-btn');
        const burgerMenu = document.querySelector('.burger-menu');
        const burgerMenuWrapper = document.querySelector('.burger-menu__wrapper');
        const menuOverlay = document.querySelector('.burger-menu__overlay');
        const menuCloseBtn = document.querySelector('.burger-menu__close-btn');
        const menuLists = document.querySelectorAll('.burger-menu__list');
        const menuFirsts = document.querySelectorAll('.burger-menu__first');
        const menuSeconds = document.querySelectorAll('.burger-menu__second');

        function openMenu() {
            if(!hamburger.classList.contains('active')) {
                burgerMenu.classList.add('active');
                menuOverlay.classList.add('active');
                menuCloseBtn.classList.add('active');
                burgerMenuWrapper.classList.add('active');
            }
        }

        function closeMenu() {
            if(!hamburger.classList.contains('active')) {
                burgerMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                menuCloseBtn.classList.remove('active');
                burgerMenuWrapper.classList.remove('active');
                menuFirsts.forEach(first => first.classList.remove('active'));
                menuSeconds.forEach(second => second.classList.remove('active'));
                closeBtn.style.left = '310px';
            }
        }

        hamburger.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);

        if(screenWidth > 1024) {
            burgerMenu.addEventListener('mouseover', (e) => {
                let target = e.target;
                if(target.classList.contains('burger-menu__link')) {
                    menuLists.forEach(list => {
                        list.classList.remove('active');
                    });
                    menuFirsts.forEach(first => {
                        first.classList.remove('active');
                    });
                    menuSeconds.forEach(second => {
                        second.classList.remove('active')
                    });
                    let menuList = target.parentNode;
                    let listNum = menuList.getAttribute('data-list');
                    let menuFirst = document.querySelector(`.burger-menu__first-${listNum}`);
    
                    menuList.classList.add('active');
                    if(menuFirst !== null) {
                        menuFirst.classList.add('active');
                        closeBtn.style.left = '610px';
                    } else {
                        closeBtn.style.left = '310px';
                        return menuFirst;
                    }
                }
            });
    
            menuFirsts.forEach(first => {
                first.addEventListener('mouseover', (e) => {
                    let target = e.target;
                    if(target.classList.contains('burger-menu__first-link')) {
                        let menuList = target.parentNode;
                        let listNum = menuList.getAttribute('data-list');
                        let menuSecond = document.querySelector(`.burger-menu__second-${listNum}`);
                        if(menuSecond !== null) {
                            menuList.classList.add('hover');
                        } else {
                            return menuSecond;
                        }
                    }
                });
                first.addEventListener('mouseout', (e) => {
                    let target = e.target;
                    if(target.classList.contains('burger-menu__first-link')) {
                        let menuList = target.parentNode;
                        let listNum = menuList.getAttribute('data-list');
                        let menuSecond = document.querySelector(`.burger-menu__second-${listNum}`);
                        if(menuSecond !== null) {
                            menuList.classList.remove('hover');
                        } else {
                            return menuSecond;
                        }
                        if(menuSecond.classList.contains('active')) {
                            menuList.classList.add('hover');
                        }
                    }
                });
                first.addEventListener('click', (e) => {
                    let target = e.target;
                    if(target.classList.contains('burger-menu__first-link')) {
                        menuSeconds.forEach(second => {
                            second.classList.remove('active');
                        });
                        let menuFirstLists = document.querySelectorAll('.burger-menu__first-list');
                        menuFirstLists.forEach(firstList => {
                            firstList.classList.remove('hover');
                        });
                        let menuList = target.parentNode;
                        let listNum = menuList.getAttribute('data-list');
                        let menuSecond = document.querySelector(`.burger-menu__second-${listNum}`);
                        if(menuSecond !== null) {
                            menuList.classList.add('hover');
                            menuSecond.classList.add('active');
                            closeBtn.style.left = '910px';
                        } else {
                            closeBtn.style.left = '610px';
                            return menuSecond;
                        }
                    }
                });
            });
        }
    } catch(e){}

    try {
        const menuBtn = document.querySelector('.navbar-mobile__menu');
        const navBarLinks = document.querySelectorAll('.navbar-mobile__link');
        const burgerMenu = document.querySelector('.burger-menu');
        const burgerMenuWrapper = document.querySelector('.burger-menu__wrapper');
        const menuLists = document.querySelectorAll('.burger-menu__list');
        const menuFirsts = document.querySelectorAll('.burger-menu__first');
        const menuSeconds = document.querySelectorAll('.burger-menu__second');
        const menuFirstLinks = document.querySelectorAll('.burger-menu__first-link');
        const arrowPrev = burgerMenuWrapper.querySelectorAll('.arrow-prev');

        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            burgerMenu.classList.toggle('active');
            burgerMenuWrapper.classList.toggle('active');
        });

        burgerMenu.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList.contains('burger-menu__link')) {
                event.preventDefault();
                let menuList = target.parentNode;
                let listNum = menuList.getAttribute('data-list');
                let menuFirst = document.querySelector(`.burger-menu__first-${listNum}`);

                menuList.classList.add('active');
                if(menuFirst !== null) {
                    menuFirst.classList.add('active');
                } else {
                    return menuFirst;
                }
            }
        });

        menuFirstLinks.forEach(link => {
            let menuList = link.parentNode;
            let listNum = menuList.getAttribute('data-list');
            let menuSecond = document.querySelector(`.burger-menu__second-${listNum}`);
            if(menuSecond !== null) {
                menuList.classList.add('hover');
                link.addEventListener('click', (e) => e.preventDefault());
            } else {
                return menuSecond;
            }
        });

        menuFirsts.forEach(first => {
            first.addEventListener('click', (e) => {
                let target = e.target;
                if(target.classList.contains('burger-menu__first-link')) {
                    menuSeconds.forEach(second => {
                        second.classList.remove('active');
                    });
                    let menuFirstLists = document.querySelectorAll('.burger-menu__first-list');
                    menuFirstLists.forEach(firstList => {
                        firstList.classList.remove('hover');
                    });
                    let menuList = target.parentNode;
                    let listNum = menuList.getAttribute('data-list');
                    let menuSecond = document.querySelector(`.burger-menu__second-${listNum}`);
                    if(menuSecond !== null) {
                        menuList.classList.add('hover');
                        menuSecond.classList.add('active');
                    } else {
                        return menuSecond;
                    }
                }
            });
        });

        arrowPrev.forEach(prevBtn => {
            prevBtn.addEventListener('click', () => {
                prevBtn.parentNode.parentNode.classList.remove('active');
            });
        });      
    } catch(e){}

    try {
        const swiper = new Swiper(".banner__slider", {
            slidesPerView: 1,
            fadeEffect: { crossFade: true },
            virtualTranslate: true,
            speed: 800,
            autoplayDisableOnInteraction: true,
            slidersPerView: 1,
            effect: "fade",
            pagination: {
              el: ".swiper-pagination",
              dynamicBullets: true,
            },
            navigation: {
                nextEl: ".banner__slider-btn-next",
                prevEl: ".banner__slider-btn-prev",
            }
        });
    } catch(e){}

    try {
        const footerItem = document.querySelectorAll('.footer__item-title');
        footerItem.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
                let menu = item.nextElementSibling;
                let btn = item.lastChild;
                if(item.classList.contains('active')) {
                    menu.style.height = `${menu.scrollHeight}px`;
                } else {
                    menu.style.height = `0px`;
                }
            });
        });
    } catch(e) {}
});