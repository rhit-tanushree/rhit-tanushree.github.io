// insertAdjacentHTML
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML


const topbar = `
<nav>
    <a href="index.html">Home</a>
    <a href="resume.html">Resume</a>
    <a href="portfolio.html">Portfolio</a>
</nav>
`;

const bottombar = `
<footer>
    <p>
        <a href="https://www.linkedin.com/in/tanushree-subramanian-7b4817375/">LinkedIn</a> 
    </p>
    <p>&copy; 2026 Tanushree Subramanian</p>
</footer>
`;

document.body.insertAdjacentHTML("afterbegin", topbar);
document.body.insertAdjacentHTML("beforeend", bottombar);