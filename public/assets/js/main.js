document.addEventListener("DOMContentLoaded", function () {
    let isMobile = window.matchMedia("(max-width: 767px)").matches;
    console.log('js ready')

    const customSelectElement = document.getElementById('contact-select')

    if (typeof customSelect !== undefined && customSelectElement) {
        console.log('slect ready')
        const mySelects = customSelect(customSelectElement);
        const root = document.querySelector(':root');

        // set css variable
        const options = document.querySelectorAll(".custom-select-option");
        if (options.length > 0) {
            root.style.setProperty('--custom_select_count', options.length);
        }
    }

    const variantSelect = document.getElementById('variant-select')

    if (typeof customSelect !== undefined && variantSelect) {
        console.log('slect variant ready')
        const mySelects = customSelect(variantSelect);
        const root = document.querySelector(':root');

        // set css variable
        const options = document.querySelectorAll(".custom-select-option");
        if (options.length > 0) {
            root.style.setProperty('--custom_select_count', options.length);
        }
    }

    function headerEffect() {
        const e = document.querySelector(".header");
        let t = e.offsetHeight;
        // const s = document.querySelector(".top-bar-padd")
        const i = document.querySelector(".mobile-content");
        //s.style.paddingTop = t + "px",
        /* window.addEventListener("resize", (() => {
            t = e.offsetHeight,
                console.log(t),
                s.style.paddingTop = t + "px"
        }
        )) */
        console.log(t);
        const o = document.body
            , a = "scroll-up"
            , r = "scroll-down";
        let n = 0;
        window.addEventListener("scroll", (() => {
            //if (!i.classList.contains("mobile-content--active")) {
            if (t < window.scrollY) { e.classList.add("st-bg") }
            else {
                e.classList.remove("st-bg");

            };
            const s = window.scrollY;
            if (s <= 0)
                return void o.classList.remove(a);
            s > n && !o.classList.contains(r) ? (o.classList.remove(a),
                o.classList.add(r), document.querySelector('.submenu-container').classList.remove('open')) : s < n && o.classList.contains(r) && (o.classList.remove(r),
                    o.classList.add(a)),
                n = s
            //}
        }
        ))
    }
    headerEffect();


    function submenuHandler() {
        const desctopLink = document.querySelector('.submenu-link')
        const submenuLink = document.querySelector('.submenu-link button');
        const closeSubmenu = document.querySelector('.close-submenu')
        const o = document.body;
        if (desctopLink && !isMobile) {
            desctopLink.addEventListener('mouseover', (e) => {
                e.currentTarget.querySelector('.submenu-container').classList.add('open')
                o.classList.add('menu-hovered')
            });
            desctopLink.addEventListener('mouseleave', (e) => {
                e.currentTarget.querySelector('.submenu-container').classList.remove('open')
                o.classList.remove('menu-hovered')
            })
        }
        if (submenuLink && isMobile) {
            submenuLink.addEventListener('click', (e) => {
                e.preventDefault()
                e.currentTarget.parentNode.querySelector('.submenu-container').classList.toggle('open')
            })
            closeSubmenu.addEventListener('click', (e) => {
                e.preventDefault()
                e.currentTarget.parentNode.parentNode.parentNode.classList.toggle('open')
                console.log('parent node ', e.currentTarget.parentNode.parentNode.parentNode)
            })
        }
    }
    submenuHandler()
    /**
   * body overflow if mobile menu is open
   */
    function bodyOverflow() {
        const openMenu = document.getElementById("open-menu");
        const closeMenu = document.getElementById("close-menu");
        const menu = document.querySelector(".main-menu");
        if (openMenu) {
            openMenu.addEventListener("click", () => {
                menu.classList.add("is-open");
                document.body.classList.add("overflow-hidden");
            });
        }
        if (closeMenu) {
            closeMenu.addEventListener("click", () => {
                menu.classList.remove("is-open");
                document.body.classList.remove("overflow-hidden");
            });
        }
    }
    bodyOverflow()

    /**
     * tabs
     */
    function tabsHandler() {
        const tabNav = document.querySelectorAll('.tab-section .tab');
        const tabContentList = document.querySelectorAll('.tab-section .tab-content')
        console.log(tabNav, tabContentList)
        if (tabNav.length > 0 && tabContentList.length > 0) {
            tabNav.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    let nextTab = e.currentTarget.dataset.tab_target;
                    console.log(e.currentTarget.dataset.tab_target)
                    tabNavEvent(tabNav, nextTab)
                    tabcontentEvent(tabContentList, nextTab)
                })
            })
        }

        function tabNavEvent(tabNav, nextTab) {
            tabNav.forEach(tab => {
                tab.dataset.tab_target === nextTab
                    ? tab.classList.add('active')
                    : tab.classList.contains('active') && tab.classList.remove('active')
            })
        }
        function tabcontentEvent(tabContentList, nextTab) {
            tabContentList.forEach(tabContent => {
                tabContent.dataset.tab_content === nextTab
                    ? tabContent.classList.add('show')
                    : tabContent.classList.contains('show') && tabContent.classList.remove('show')
            })
        }
    }
    tabsHandler()

    if (typeof Swiper !== 'undefined') {
        var swiper = new Swiper(".product_thumb_slider", {
            spaceBetween: 24,
            slidesPerView: 4,

            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".product_swiper", {

            thumbs: {
                swiper: swiper,
            },
        });

        var swiperArticles = new Swiper('.swiper_articles', {
            slidesPerView: 1,
            spaceBetween: 40,
            navigation: {
                nextEl: '.swiper-articles-next',
                prevEl: '.swiper-articles-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3
                }
            }
    
        })
        const heroSlider = new Swiper('.hero-slider',{
            slidesPerView: 1,
            speed: 2500,
            effect: "fade",
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
        })
    }

    

    /**
  * modals
  */
    const modals = document.getElementsByClassName("modal");
    if(modals.length > 0){
        const triggers = document.getElementsByClassName("modal-trigger");
        const triggerArray = Array.from(triggers).entries();
    
        const closeButtons = document.getElementsByClassName("modal-close");
        for (let [index, trigger] of triggerArray) {
            const toggleModal = () => {
                modals[index].classList.toggle("modal--is-open");
                document.body.classList.toggle("overflow-hidden")
            };
            trigger.addEventListener("click", toggleModal);
            closeButtons[index].addEventListener("click", toggleModal);
        }
    }
    let counterTargets = document.querySelectorAll(".counterUp");

    let observerCounter = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is_visible");
                setTimeout(() => {
                    letCount();
                }, 1000);
            }
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
            }
        });
    });

    if (counterTargets.length > 0) {
        counterTargets.forEach((target) => {
            observerCounter.observe(target);
        });
    }
    function letCount() {
        const counters = document.querySelectorAll(".counterUp");
        const speed = 100; // The lower the slower
    
        counters.forEach((counter) => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
    
                const count = +counter.innerText;
    
                // Lower inc to slow and higher to slow
    
                const inc = target > speed ? target / speed : 1;
    
                // Check if target is reached
                if (count < target) {
                    // Add inc to count and output in counter
                    let num = Math.round(count + inc);
                    counter.innerText = num;
                    // Call function every ms
                    setTimeout(updateCount, 50);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
    
            updateCount();
        });
    
    
    }
    /**
   * Intersection Observer
   */
  let options = {
    threshold: 0.25,
  };
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.25) {
        entry.target.classList.add("is_visible");
      } else {
        entry.target.classList.remove("is_visible");
      }
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);
  const inViews = document.querySelectorAll(".inView");
  if (inViews.length > 0) {
    inViews.forEach((inView) => {
      observer.observe(inView);
    });
  }

})