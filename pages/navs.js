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



document.addEventListener("DOMContentLoaded", function () {
    function getTodayDateInPersian() {
        const now = moment().locale('fa'); // تنظیم زبان به فارسی
        return now.format('YYYY/MM/DD'); // قالب تاریخ شمسی
    }

    // قرار دادن تاریخ در المان HTML
    document.getElementById("date").textContent = getTodayDateInPersian();
});



