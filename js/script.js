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
        const screenWidth = window.screen.width;
        const menuBtn = document.querySelector('.navbar-mobile__menu');
        const menuHome = document.querySelector('.navbar-mobile__home');
        const navBarLinks = document.querySelectorAll('.navbar-mobile__link');
        const burgerMenu = document.querySelector('.burger-menu');
        const burgerMenuWrapper = document.querySelector('.burger-menu__wrapper');
        const menuLists = document.querySelectorAll('.burger-menu__list');
        const menuFirsts = document.querySelectorAll('.burger-menu__first');
        const menuSeconds = document.querySelectorAll('.burger-menu__second');
        const menuFirstLinks = document.querySelectorAll('.burger-menu__first-link');
        const arrowPrev = burgerMenuWrapper.querySelectorAll('.arrow-prev');

        if(screenWidth < 1024) {
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

            menuBtn.addEventListener('click', function() {
                if(!menuBtn.classList.contains('active')) {
                    navBarLinks.forEach(navBarLink => {
                        navBarLink.classList.remove('active');
                    });
                    this.classList.add('active');
                } else {
                    this.classList.remove('active');
                    this.previousElementSibling.classList.add('active');
                }
            });

            menuHome.addEventListener('click', function() {
                if(!menuHome.classList.contains('active')) {
                    burgerMenuWrapper.classList.remove('active');
                    burgerMenu.classList.remove('active');
                    navBarLinks.forEach(navBarLink => {
                        navBarLink.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        }
    } catch(e){}

    try {
        const currencyList = document.querySelectorAll('.header__top-current-list');
        const headerFlag = document.querySelector('.header__top-flag');
        const headerCurrency = document.querySelector('.header__top-currency');
        
        currencyList.forEach(list => {
            list.addEventListener('click', function() {
                currencyList.forEach(listt => {
                    listt.classList.remove('active');
                });
                this.classList.add('active');
                let srcImg = this.children[0].getAttribute('src');
                let currency = this.children[1];
                headerFlag.children[0].setAttribute('src', srcImg);
                headerCurrency.textContent = currency.textContent;
            });
        });
    } catch(e) {}

    try {
        const currencyChoose = document.querySelector('.header__bot-currency-choose');
        const currencyList = document.querySelectorAll('.popup-country__current-list');
        const headerFlag = document.querySelector('.header__bot-flag');
        const headerCurrency = document.querySelector('.header__bot-currency');
        const popupCountry = document.querySelector('.popup-country');
        const popupCountryClose = document.querySelector('.popup-country__close-btn');

        currencyChoose.addEventListener('click', () => {
            popupCountry.classList.add('active');
        });

        popupCountryClose.addEventListener('click', () => {
            popupCountry.classList.remove('active');
        });
        
        currencyList.forEach(list => {
            list.addEventListener('click', function() {
                currencyList.forEach(listt => {
                    listt.classList.remove('active');
                });
                this.classList.add('active');
                let srcImg = this.children[0].getAttribute('src');
                let currency = this.children[1];
                headerFlag.children[0].setAttribute('src', srcImg);
                headerCurrency.textContent = currency.textContent;
                popupCountry.classList.remove('active');
            });
        });
    } catch(e) {}

    try {
        const popupSearch = document.querySelector('.popup-search');
        const popupSearchClose = document.querySelector('.popup-search__close-btn');
        const headerSearchBtn = document.querySelector('.header__bot-search');

        headerSearchBtn.addEventListener('click', () => {
            popupSearch.classList.add('active');
        });

        popupSearchClose.addEventListener('click', () => {
            popupSearch.classList.remove('active');
        });
    } catch(e) {}

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
        const swiper = new Swiper(".catalog-goods__slider1", {
            slidesPerView: 5.5,
            speed: 800,
            slidesPerGroup: 5,
            spaceBetween: 32,
            navigation: {
                nextEl: ".catalog-goods__slider-btn-next1",
                prevEl: ".catalog-goods__slider-btn-prev1",
            }
        });
        const swiper2 = new Swiper(".catalog-goods__slider2", {
            slidesPerView: 5.5,
            speed: 800,
            slidesPerGroup: 5,
            spaceBetween: 32,
            navigation: {
                nextEl: ".catalog-goods__slider-btn-next2",
                prevEl: ".catalog-goods__slider-btn-prev2",
            }
        });
        const swiper3 = new Swiper(".catalog-goods__slider3", {
            slidesPerView: 5.5,
            speed: 800,
            slidesPerGroup: 5,
            spaceBetween: 32,
            navigation: {
                nextEl: ".catalog-goods__slider-btn-next3",
                prevEl: ".catalog-goods__slider-btn-prev3",
            }
        });
    } catch(e){}

    try {
        const screenWidth = window.screen.width;

        if(screenWidth < 960) {
            const swiper2 = new Swiper(".popular-categories__slider", {
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
            });
        }
    } catch(e) {}

    try {
        const screenWidth = window.screen.width;

        if(screenWidth < 960) {
            const swiper3 = new Swiper(".discounts__slider", {
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
            });
        }
    } catch(e) {}

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