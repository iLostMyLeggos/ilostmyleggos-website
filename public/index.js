// JavaScript for index.html
// --- Star Generation ---
/**
    * Creates a single star element with random size, position, and animation properties.
    * @returns {HTMLElement} The created star div element.
    */
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 2 + 1; // Random size between 1px and 3px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`; // Random vertical position
    star.style.left = `${Math.random() * 100}%`; // Random horizontal position
    star.style.animationDelay = `${Math.random() * 5}s`; // Random start delay for twinkle
    star.style.animationDuration = `${Math.random() * 3 + 4}s`; // Random duration (4s to 7s) for twinkle
    return star;
}

// --- Constellation Data ---
// Array of SVG strings representing different constellations.
// Each SVG includes embedded <style> for twinkling dots and connector lines.
const constellationSVGs = [
    // Aries (Ram) - Includes internal CSS animation for dots
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><style>@keyframes twinkle-dot{0%,100%{opacity:0.4;r:1.8;}50%{opacity:1;r:2.2;}}.star-dot{fill:white;r:2;animation:twinkle-dot 4s infinite ease-in-out;}.connector{stroke:rgba(255,255,255,0.5);stroke-width:1;}</style><circle class="star-dot" cx="30" cy="70" style="animation-delay: 0.1s;"/><circle class="star-dot" cx="50" cy="50" style="animation-delay: 0.5s;"/><circle class="star-dot" cx="70" cy="60" style="animation-delay: 0.3s;"/><circle class="star-dot" cx="60" cy="80" style="animation-delay: 0.7s;"/><line class="connector" x1="30" y1="70" x2="50" y2="50"/><line class="connector" x1="50" y1="50" x2="70" y2="60"/><line class="connector" x1="70" y1="60" x2="60" y2="80"/></svg>`,
    // Taurus (Bull) - Includes internal CSS animation for dots
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><style>@keyframes twinkle-dot{0%,100%{opacity:0.4;r:1.8;}50%{opacity:1;r:2.2;}}.star-dot{fill:white;r:2;animation:twinkle-dot 4.2s infinite ease-in-out;}.connector{stroke:rgba(255,255,255,0.5);stroke-width:1;}</style><circle class="star-dot" cx="25" cy="40" style="animation-delay: 0.2s;"/><circle class="star-dot" cx="45" cy="30" style="animation-delay: 0.6s;"/><circle class="star-dot" cx="65" cy="30" style="animation-delay: 0.1s;"/><circle class="star-dot" cx="85" cy="40" style="animation-delay: 0.8s;"/><circle class="star-dot" cx="55" cy="60" style="animation-delay: 0.4s;"/><circle class="star-dot" cx="45" cy="80" style="animation-delay: 0.3s;"/><line class="connector" x1="25" y1="40" x2="45" y2="30"/><line class="connector" x1="45" y1="30" x2="55" y2="60"/><line class="connector" x1="65" y1="30" x2="55" y2="60"/><line class="connector" x1="85" y1="40" x2="65" y2="30"/><line class="connector" x1="55" y1="60" x2="45" y2="80"/></svg>`,
    // Gemini (Twins) - Includes internal CSS animation for dots
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><style>@keyframes twinkle-dot{0%,100%{opacity:0.4;r:1.8;}50%{opacity:1;r:2.2;}}.star-dot{fill:white;r:2;animation:twinkle-dot 3.8s infinite ease-in-out;}.connector{stroke:rgba(255,255,255,0.5);stroke-width:1;}</style><circle class="star-dot" cx="30" cy="30" style="animation-delay: 0.7s;"/><circle class="star-dot" cx="40" cy="70" style="animation-delay: 0.2s;"/><circle class="star-dot" cx="70" cy="30" style="animation-delay: 0.5s;"/><circle class="star-dot" cx="60" cy="70" style="animation-delay: 0.1s;"/><circle class="star-dot" cx="50" cy="50" style="animation-delay: 0.9s;"/><line class="connector" x1="30" y1="30" x2="40" y2="70"/><line class="connector" x1="70" y1="30" x2="60" y2="70"/><line class="connector" x1="30" y1="30" x2="50" y2="50"/><line class="connector" x1="70" y1="30" x2="50" y2="50"/></svg>`,
    // Cancer (Crab) - Includes internal CSS animation for dots
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><style>@keyframes twinkle-dot{0%,100%{opacity:0.4;r:1.8;}50%{opacity:1;r:2.2;}}.star-dot{fill:white;r:2;animation:twinkle-dot 4.5s infinite ease-in-out;}.connector{stroke:rgba(255,255,255,0.5);stroke-width:1;}</style><circle class="star-dot" cx="50" cy="50" style="animation-delay: 0.3s;"/><circle class="star-dot" cx="40" cy="40" style="animation-delay: 0.8s;"/><circle class="star-dot" cx="60" cy="40" style="animation-delay: 0.2s;"/><circle class="star-dot" cx="30" cy="60" style="animation-delay: 0.6s;"/><circle class="star-dot" cx="70" cy="60" style="animation-delay: 0.4s;"/><line class="connector" x1="40" y1="40" x2="50" y2="50"/><line class="connector" x1="60" y1="40" x2="50" y2="50"/><line class="connector" x1="30" y1="60" x2="50" y2="50"/><line class="connector" x1="70" y1="60" x2="50" y2="50"/><line class="connector" x1="40" y1="40" x2="30" y2="60"/><line class="connector" x1="60" y1="40" x2="70" y2="60"/></svg>`,
    // Leo (Lion/Sickle) - Includes internal CSS animation for dots
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><style>@keyframes twinkle-dot{0%,100%{opacity:0.4;r:1.8;}50%{opacity:1;r:2.2;}}.star-dot{fill:white;r:2;animation:twinkle-dot 4.1s infinite ease-in-out;}.connector{stroke:rgba(255,255,255,0.5);stroke-width:1;}</style><circle class="star-dot" cx="80" cy="70" style="animation-delay: 0.1s;"/><circle class="star-dot" cx="60" cy="60" style="animation-delay: 0.5s;"/><circle class="star-dot" cx="50" cy="40" style="animation-delay: 0.9s;"/><circle class="star-dot" cx="40" cy="30" style="animation-delay: 0.3s;"/><circle class="star-dot" cx="30" cy="40" style="animation-delay: 0.7s;"/><circle class="star-dot" cx="20" cy="55" style="animation-delay: 0.4s;"/><line class="connector" x1="80" y1="70" x2="60" y2="60"/><line class="connector" x1="60" y1="60" x2="50" y2="40"/><line class="connector" x1="50" y1="40" x2="40" y2="30"/><line class="connector" x1="40" y1="30" x2="30" y2="40"/><line class="connector" x1="30" y1="40" x2="20" y2="55"/></svg>`,
    // Virgo (Maiden) - Includes internal CSS animation for dots
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><style>@keyframes twinkle-dot{0%,100%{opacity:0.4;r:1.8;}50%{opacity:1;r:2.2;}}.star-dot{fill:white;r:2;animation:twinkle-dot 4.3s infinite ease-in-out;}.connector{stroke:rgba(255,255,255,0.5);stroke-width:1;}</style><circle class="star-dot" cx="30" cy="30" style="animation-delay: 0.6s;"/><circle class="star-dot" cx="50" cy="50" style="animation-delay: 0.2s;"/><circle class="star-dot" cx="70" cy="40" style="animation-delay: 0.8s;"/><circle class="star-dot" cx="60" cy="70" style="animation-delay: 0.1s;"/><circle class="star-dot" cx="40" cy="80" style="animation-delay: 0.5s;"/><line class="connector" x1="30" y1="30" x2="50" y2="50"/><line class="connector" x1="50" y1="50" x2="70" y2="40"/><line class="connector" x1="50" y1="50" x2="60" y2="70"/><line class="connector" x1="60" y1="70" x2="40" y2="80"/></svg>`,
    // Libra (Scales) - Includes internal CSS animation for dots
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><style>@keyframes twinkle-dot{0%,100%{opacity:0.4;r:1.8;}50%{opacity:1;r:2.2;}}.star-dot{fill:white;r:2;animation:twinkle-dot 3.9s infinite ease-in-out;}.connector{stroke:rgba(255,255,255,0.5);stroke-width:1;}</style><circle class="star-dot" cx="20" cy="50" style="animation-delay: 0.4s;"/><circle class="star-dot" cx="40" cy="40" style="animation-delay: 0.9s;"/><circle class="star-dot" cx="60" cy="40" style="animation-delay: 0.2s;"/><circle class="star-dot" cx="80" cy="50" style="animation-delay: 0.7s;"/><circle class="star-dot" cx="50" cy="70" style="animation-delay: 0.3s;"/><line class="connector" x1="20" y1="50" x2="40" y2="40"/><line class="connector" x1="40" y1="40" x2="60" y2="40"/><line class="connector" x1="60" y1="40" x2="80" y2="50"/><line class="connector" x1="40" y1="40" x2="50" y2="70"/><line class="connector" x1="60" y1="40" x2="50" y2="70"/></svg>`,
    // Scorpio (Scorpion) - Includes internal CSS animation for dots
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><style>@keyframes twinkle-dot{0%,100%{opacity:0.4;r:1.8;}50%{opacity:1;r:2.2;}}.star-dot{fill:white;r:2;animation:twinkle-dot 4.6s infinite ease-in-out;}.connector{stroke:rgba(255,255,255,0.5);stroke-width:1;}</style><circle class="star-dot" cx="30" cy="30" style="animation-delay: 0.1s;"/><circle class="star-dot" cx="50" cy="40" style="animation-delay: 0.6s;"/><circle class="star-dot" cx="70" cy="30" style="animation-delay: 0.3s;"/><circle class="star-dot" cx="50" cy="60" style="animation-delay: 0.9s;"/><circle class="star-dot" cx="60" cy="75" style="animation-delay: 0.2s;"/><circle class="star-dot" cx="75" cy="85" style="animation-delay: 0.7s;"/><line class="connector" x1="30" y1="30" x2="50" y2="40"/><line class="connector" x1="70" y1="30" x2="50" y2="40"/><line class="connector" x1="50" y1="40" x2="50" y2="60"/><line class="connector" x1="50" y1="60" x2="60" y2="75"/><line class="connector" x1="60" y1="75" x2="75" y2="85"/></svg>`,
    // Sagittarius (Archer) - Includes internal CSS animation for dots
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><style>@keyframes twinkle-dot{0%,100%{opacity:0.4;r:1.8;}50%{opacity:1;r:2.2;}}.star-dot{fill:white;r:2;animation:twinkle-dot 4.0s infinite ease-in-out;}.connector{stroke:rgba(255,255,255,0.5);stroke-width:1;}</style><circle class="star-dot" cx="20" cy="70" style="animation-delay: 0.5s;"/><circle class="star-dot" cx="40" cy="60" style="animation-delay: 0.1s;"/><circle class="star-dot" cx="60" cy="70" style="animation-delay: 0.8s;"/><circle class="star-dot" cx="50" cy="40" style="animation-delay: 0.4s;"/><circle class="star-dot" cx="70" cy="30" style="animation-delay: 0.9s;"/><circle class="star-dot" cx="90" cy="20" style="animation-delay: 0.2s;"/><line class="connector" x1="20" y1="70" x2="40" y2="60"/><line class="connector" x1="40" y1="60" x2="60" y2="70"/><line class="connector" x1="40" y1="60" x2="50" y2="40"/><line class="connector" x1="50" y1="40" x2="70" y2="30"/><line class="connector" x1="70" y1="30" x2="90" y2="20"/><line class="connector" x1="60" y1="70" x2="50" y2="40"/></svg>`,
    // Capricorn (Goat-Fish) - Includes internal CSS animation for dots
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><style>@keyframes twinkle-dot{0%,100%{opacity:0.4;r:1.8;}50%{opacity:1;r:2.2;}}.star-dot{fill:white;r:2;animation:twinkle-dot 4.4s infinite ease-in-out;}.connector{stroke:rgba(255,255,255,0.5);stroke-width:1;}</style><circle class="star-dot" cx="30" cy="40" style="animation-delay: 0.7s;"/><circle class="star-dot" cx="50" cy="30" style="animation-delay: 0.3s;"/><circle class="star-dot" cx="70" cy="40" style="animation-delay: 0.9s;"/><circle class="star-dot" cx="80" cy="60" style="animation-delay: 0.2s;"/><circle class="star-dot" cx="70" cy="80" style="animation-delay: 0.6s;"/><circle class="star-dot" cx="50" cy="70" style="animation-delay: 0.1s;"/><line class="connector" x1="30" y1="40" x2="50" y2="30"/><line class="connector" x1="50" y1="30" x2="70" y2="40"/><line class="connector" x1="70" y1="40" x2="80" y2="60"/><line class="connector" x1="80" y1="60" x2="70" y2="80"/><line class="connector" x1="70" y1="80" x2="50" y2="70"/><line class="connector" x1="50" y1="70" x2="30" y2="40"/></svg>`,
    // Aquarius (Water Bearer) - Includes internal CSS animation for dots
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><style>@keyframes twinkle-dot{0%,100%{opacity:0.4;r:1.8;}50%{opacity:1;r:2.2;}}.star-dot{fill:white;r:2;animation:twinkle-dot 3.7s infinite ease-in-out;}.connector{stroke:rgba(255,255,255,0.5);stroke-width:1;}</style><circle class="star-dot" cx="30" cy="30" style="animation-delay: 0.4s;"/><circle class="star-dot" cx="50" cy="40" style="animation-delay: 0.8s;"/><circle class="star-dot" cx="70" cy="30" style="animation-delay: 0.1s;"/><circle class="star-dot" cx="60" cy="60" style="animation-delay: 0.7s;"/><circle class="star-dot" cx="40" cy="70" style="animation-delay: 0.3s;"/><circle class="star-dot" cx="50" cy="85" style="animation-delay: 0.9s;"/><line class="connector" x1="30" y1="30" x2="50" y2="40"/><line class="connector" x1="70" y1="30" x2="50" y2="40"/><line class="connector" x1="50" y1="40" x2="60" y2="60"/><line class="connector" x1="60" y1="60" x2="40" y2="70"/><line class="connector" x1="40" y1="70" x2="50" y2="85"/></svg>`,
    // Pisces (Fish) - Includes internal CSS animation for dots
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><style>@keyframes twinkle-dot{0%,100%{opacity:0.4;r:1.8;}50%{opacity:1;r:2.2;}}.star-dot{fill:white;r:2;animation:twinkle-dot 4.7s infinite ease-in-out;}.connector{stroke:rgba(255,255,255,0.5);stroke-width:1;}</style><circle class="star-dot" cx="20" cy="70" style="animation-delay: 0.2s;"/><circle class="star-dot" cx="40" cy="60" style="animation-delay: 0.7s;"/><circle class="star-dot" cx="60" cy="50" style="animation-delay: 0.4s;"/><circle class="star-dot" cx="80" cy="40" style="animation-delay: 0.9s;"/><circle class="star-dot" cx="70" cy="70" style="animation-delay: 0.1s;"/><circle class="star-dot" cx="50" cy="80" style="animation-delay: 0.6s;"/><line class="connector" x1="20" y1="70" x2="40" y2="60"/><line class="connector" x1="40" y1="60" x2="60" y2="50"/><line class="connector" x1="60" y1="50" x2="80" y2="40"/><line class="connector" x1="80" y1="40" x2="70" y2="70"/><line class="connector" x1="70" y1="70" x2="50" y2="80"/><line class="connector" x1="50" y1="80" x2="20" y2="70"/></svg>`
];


// Approximate positions for constellations (top%, left%) - spread out across the screen
const constellationPositions = [
    { top: '10%', left: '10%' }, { top: '15%', left: '75%' },
    { top: '30%', left: '30%' }, { top: '25%', left: '90%' },
    { top: '50%', left: '5%' },  { top: '45%', left: '60%' },
    { top: '70%', left: '20%' }, { top: '65%', left: '85%' },
    { top: '85%', left: '50%' }, { top: '5%', left: '40%' },
    { top: '90%', left: '5%' },  { top: '80%', left: '70%' }
];

// --- Constellation Generation ---
/**
    * Creates a constellation element with the provided SVG, position, and index.
    * @param {string} svgString - The SVG markup for the constellation.
    * @param {object} position - An object with 'top' and 'left' percentage strings.
    * @param {number} index - The index of the constellation (used for animation staggering).
    * @returns {HTMLElement} The created constellation div element.
    */
function createConstellation(svgString, position, index) {
    const constellation = document.createElement('div');
    constellation.classList.add('constellation');
    constellation.innerHTML = svgString; // Embed the SVG string
    constellation.style.top = position.top;
    constellation.style.left = position.left;
    // Vary overall constellation pulse animation delay to stagger them
    constellation.style.animationDelay = `${(index % 6) * 0.5}s`;
    // Randomize pulse duration slightly for variation
    constellation.style.animationDuration = `${Math.random() * 2 + 5}s`; // Duration between 5s and 7s
    return constellation;
}


// --- Initialization ---
// Get the container element for stars and constellations
const starContainer = document.getElementById('star-container');
const numberOfStars = 300; // Adjust density as needed

// Check if the container exists before adding elements
if (starContainer) {
    // Generate and append stars to the container
    for (let i = 0; i < numberOfStars; i++) {
        starContainer.appendChild(createStar());
    }

    // Generate and append constellations to the container
    constellationSVGs.forEach((svg, index) => {
        // Ensure there's a corresponding position defined
        if (constellationPositions[index]) {
            starContainer.appendChild(createConstellation(svg, constellationPositions[index], index));
        }
    });

} else {
    console.error("Error: Star container element (#star-container) not found in the DOM.");
}

// --- Smooth Scrolling for Anchor Links ---
// Select all anchor links that start with '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add a click event listener to each anchor link
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default jump behavior

        // Get the target element's ID from the href attribute
        const targetId = this.getAttribute('href');
        try {
            const targetElement = document.querySelector(targetId);
            // If the target element exists, scroll to it smoothly
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Enable smooth scrolling
                });
            } else {
                    console.warn(`Smooth scroll target not found: ${targetId}`);
            }
        } catch (error) {
                console.error(`Error finding smooth scroll target: ${targetId}`, error);
        }
    });
});