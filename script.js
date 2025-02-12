const myName = "chala gobena";
const header = document.querySelector('.heading-primary');
// console.log('myName');
console.log(header);
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
        document.body.classList.remove("sticky");
    }
}, {

    root: null,
    threshold: 0,
    rootMargin: "-80px"
})
obs.observe(sectionHeroEl);
// header.addEventListener('click', function() {
//     header.textContent = myName;
//     header.style.backgroundColor = "red";
//     header.style.padding = "5rem";
// });
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear)
yearEl.textContent = currentYear;
// make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener('click', function() {
    headerEl.classList.toggle("nav-open");
})
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        // scroll back to top
        if (href == "#") window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        if (href != "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open")
    });
});

function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();