// रैंडम बैकग्राउंड इमेज
const backgroundImages = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    'https://images.unsplash.com/photo-1472214103451-9374a3b58a12',
    'https://images.unsplash.com/photo-1501854140801-50d01698902b'
];

function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const heroSection = document.querySelector('.hero');
    heroSection.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;
}

// पेज लोड होने पर रैंडम बैकग्राउंड सेट करें
window.onload = function() {
    setRandomBackground();
};

// पहले से मौजूद भाषा बदलने का कोड
function changeLanguage() {
    const lang = document.getElementById('language').value;
    if (lang === 'hi') {
        document.querySelector('h1').textContent = 'जलवायु परिवर्तन';
        document.querySelector('.main-title').textContent = 'जलवायु परिवर्तन';
        document.querySelector('.tagline').textContent = 'जलवायु कार्रवाई के लिए एक साथ काम करना';
        document.querySelector('nav ul li:nth-child(1) a').textContent = 'होम';
        document.querySelector('nav ul li:nth-child(2) a').textContent = 'विषय';
        document.querySelector('nav ul li:nth-child(3) a').textContent = 'कैलेंडर';
        document.querySelector('nav ul li:nth-child(4) a').textContent = 'जलवायु कार्रवाई';
        document.querySelector('nav ul li:nth-child(5) a').textContent = 'हमारे बारे में';
        document.querySelector('nav ul li:nth-child(6) a').textContent = 'समाचार';
    } else {
        document.querySelector('h1').textContent = 'Climate Change';
        document.querySelector('.main-title').textContent = 'Climate Change';
        document.querySelector('.tagline').textContent = 'Working together for climate action';
        document.querySelector('nav ul li:nth-child(1) a').textContent = 'Home';
        document.querySelector('nav ul li:nth-child(2) a').textContent = 'Topics';
        document.querySelector('nav ul li:nth-child(3) a').textContent = 'Calendar';
        document.querySelector('nav ul li:nth-child(4) a').textContent = 'Climate Action';
        document.querySelector('nav ul li:nth-child(5) a').textContent = 'About Us';
        document.querySelector('nav ul li:nth-child(6) a').textContent = 'News';
    }
}