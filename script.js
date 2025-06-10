// // Fix menu when scrolling past a certain width
// window.addEventListener("scroll", function () {
//     const navbar = document.querySelector(".navbar");
//     const header = document.querySelector(".image");
//     const headerHeight = header.offsetHeight;

//     if (window.scrollY > headerHeight) {
//         navbar.classList.add("sticky");

//         const tooltips = document.querySelectorAll(".shop-tooltip");
//         tooltips.forEach(tooltip => {
//             tooltip.style.display = "none";
//         });
//     } else {
//         navbar.classList.remove("sticky");

//         const tooltips = document.querySelectorAll(".shop-tooltip");
//         tooltips.forEach(tooltip => {
//             tooltip.style.display = "";
//         });
//     }
// });





// // Get the button
// let mybutton = document.getElementById("myBtn");

// if (mybutton) {
//     window.onscroll = function () { scrollFunction() };

//     function scrollFunction() {
//         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//             mybutton.style.display = "block";
//         } else {
//             mybutton.style.display = "none";
//         }
//     }

//     function topFunction() {
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//     }

//     mybutton.onclick = topFunction;
// };



// // Check if screen width is less than or equal to 768px
// function isMobileView() {
//     return window.matchMedia("(max-width: 768px)").matches;

// }


// // ایجاد دکمه همبرگری در حالت موبایل
// if (isMobileView()) {
//     const navbar = document.querySelector('.navbar');
//     const menu = document.querySelector('.menu');

//     const hamburger = document.createElement('div');
//     hamburger.className = 'hamburger';
//     hamburger.innerHTML = '<span></span><span></span><span></span>';

//     hamburger.addEventListener('click', function () {
//         menu.classList.toggle('active');
//     });

//     navbar.appendChild(hamburger);

//     // بستن منو هنگام کلیک روی آیتم
//     menu.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', () => {
//             menu.classList.remove('active');
//         });
//     });
// }



// // Fix menu when scrolling past a certain height
// window.addEventListener("scroll", function () {
//     const navbar = document.querySelector(".navbar");
//     const header = document.querySelector(".image");
//     const headerHeight = header.offsetHeight;

//     // حذف منو در حالت موبایل


//     if (window.scrollY > headerHeight) {
//         navbar.classList.add("sticky");

//         const tooltips = document.querySelectorAll(".shop-tooltip");
//         tooltips.forEach(tooltip => {
//             tooltip.style.display = "none";
//         });
//     } else {
//         navbar.classList.remove("sticky");

//         const tooltips = document.querySelectorAll(".shop-tooltip");
//         tooltips.forEach(tooltip => {
//             tooltip.style.display = "";
//         });
//     }
// });



















document.addEventListener('DOMContentLoaded', function () {
    // =============================================
    // متغیرهای全局
    // =============================================
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector(".image");
    const menu = document.querySelector(".menu");
    const myButton = document.getElementById("myBtn");
    const headerHeight = header.offsetHeight;

    // =============================================
    // توابع کمکی
    // =============================================
    function isMobileView() {
        return window.innerWidth <= 768;
    }

    // =============================================
    // 1. مدیریت منوی ناوبری و همبرگر
    // =============================================
    function setupMobileMenu() {
        if (!isMobileView()) return;

        // ایجاد دکمه همبرگر
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        navbar.appendChild(hamburger);

        // مدیریت کلیک روی همبرگر
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            menu.classList.toggle('active');

            // جلوگیری از اسکرول بدن هنگام باز بودن منو
            document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
        });

        // بستن منو هنگام کلیک روی لینک‌ها
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // =============================================
    // 2. مدیریت نوار ناوبری چسبنده
    // =============================================
    function handleStickyNavbar() {
        if (isMobileView()) {
            // در موبایل navbar را fixed می‌کنیم
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.width = '100%';
            document.querySelector('.image').style.paddingTop = navbar.offsetHeight + 'px';
            return;
        }

        // در دسکتاپ و تبلت رفتار sticky معمولی
        if (window.scrollY > headerHeight) {
            navbar.classList.add("sticky");

            // مخفی کردن tooltip ها هنگام sticky شدن
            document.querySelectorAll('.shop-tooltip').forEach(tooltip => {
                tooltip.style.display = 'none';
            });
        } else {
            navbar.classList.remove("sticky");

            // نمایش مجدد tooltip ها
            document.querySelectorAll('.shop-tooltip').forEach(tooltip => {
                tooltip.style.display = '';
            });
        }
    }

    // =============================================
    // 3. دکمه بازگشت به بالا
    // =============================================
    function setupBackToTopButton() {
        if (!myButton) return;

        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                myButton.style.display = "block";
            } else {
                myButton.style.display = "none";
            }
        };

        myButton.onclick = function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    }

    // =============================================
    // 4. مدیریت تغییر سایز پنجره
    // =============================================
    function handleResize() {
        // تنظیم مجدد ارتفاع هدر برای موبایل
        if (isMobileView()) {
            document.querySelector('.image').style.paddingTop = navbar.offsetHeight + 'px';
        } else {
            document.querySelector('.image').style.paddingTop = '0';
            document.body.style.overflow = '';
        }

        // بستن منو هنگام تغییر سایز به بزرگتر از موبایل
        if (!isMobileView()) {
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            }
        }
    }

    // =============================================
    // 5. مدیریت tooltip های سبد خرید و کاربر
    // =============================================
    function setupTooltips() {
        document.querySelectorAll('.shopping li').forEach(item => {
            item.addEventListener('mouseenter', function () {
                if (isMobileView()) return;

                const tooltip = this.querySelector('.shop-tooltip');
                if (tooltip) {
                    tooltip.style.opacity = '1';
                    tooltip.style.visibility = 'visible';
                    tooltip.style.top = '80px';
                }
            });

            item.addEventListener('mouseleave', function () {
                const tooltip = this.querySelector('.shop-tooltip');
                if (tooltip) {
                    tooltip.style.opacity = '0';
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.top = '10px';
                }
            });
        });
    }

    // =============================================
    // 6. مدیریت اسکرول نرم برای لینک‌های داخلی
    // =============================================
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - navbar.offsetHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // =============================================
    // مقداردهی اولیه و event listeners
    // =============================================
    setupMobileMenu();
    setupBackToTopButton();
    setupTooltips();
    setupSmoothScrolling();

    window.addEventListener('scroll', handleStickyNavbar);
    window.addEventListener('resize', handleResize);

    // اجرای اولیه
    handleStickyNavbar();
    handleResize();
});
