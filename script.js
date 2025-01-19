// ثابت کردن منو هنگام اسکرول بعد از یه عرض خاصی
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector(".image");
    const headerHeight = header.offsetHeight;

    if (window.scrollY > headerHeight) {
        navbar.classList.add("sticky");

        // غیرفعال کردن shop-tooltip
        const tooltips = document.querySelectorAll(".shop-tooltip");
        tooltips.forEach(tooltip => {
            tooltip.style.display = "none";
        });
    } else {
        navbar.classList.remove("sticky");

        // فعال کردن دوباره shop-tooltip در صورت لزوم
        const tooltips = document.querySelectorAll(".shop-tooltip");
        tooltips.forEach(tooltip => {
            tooltip.style.display = ""; // بازگرداندن به حالت پیش‌فرض
        });
    }
});





// Get the button
document.addEventListener("DOMContentLoaded", function () {
    let mybutton = document.getElementById("myBtn");

    if (mybutton) {
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        mybutton.onclick = topFunction;
    }
});
