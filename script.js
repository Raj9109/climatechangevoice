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