document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
    
    // Change Language
    const langButton = document.getElementById('lang-toggle');
    const content = document.querySelector('.text-content');
    const heading = document.querySelector('h1');
    const subtitle = document.querySelector('h2');
    const description = document.querySelector('p');
    const contactLabel = document.querySelector('.contact-box span');
    const footer = document.querySelector('footer p');
    
    let isEnglish = false;
    
    langButton.addEventListener('click', () => {
        heading.classList.add('fade-out');
        subtitle.classList.add('fade-out');
        description.classList.add('fade-out');
        contactLabel.classList.add('fade-out');
        footer.classList.add('fade-out');
        
        setTimeout(() => {
            if (isEnglish) {
                heading.textContent = 'FIALA BIANCA';
                subtitle.textContent = 'ÇOK YAKINDA SİZLERLEYİZ';
                description.textContent = 'Seçkin çorap koleksiyonumuz için son hazırlıklar devam ediyor. Zarafet ve konforu bir araya getiren tasarımlarımızla yakında karşınızda olacağız.';
                contactLabel.textContent = 'İLETİŞİM';
                footer.textContent = '© 2025 Fiala Bianca. Tüm Hakları Saklıdır.';
                langButton.textContent = 'English';
                isEnglish = false;
            } else {
                heading.textContent = 'FIALA BIANCA';
                subtitle.textContent = 'COMING SOON';
                description.textContent = 'Final preparations for our premium sock collection are underway. We will soon be with you with our designs that combine elegance and comfort.';
                contactLabel.textContent = 'CONTACT';
                footer.textContent = '© 2025 Fiala Bianca. All Rights Reserved.';
                langButton.textContent = 'Türkçe';
                isEnglish = true;
            }
                        heading.classList.remove('fade-out');
            heading.classList.add('fade-in');
            subtitle.classList.remove('fade-out');
            subtitle.classList.add('fade-in');
            description.classList.remove('fade-out');
            description.classList.add('fade-in');
            contactLabel.classList.remove('fade-out');
            contactLabel.classList.add('fade-in');
            footer.classList.remove('fade-out');
            footer.classList.add('fade-in');
            
            setTimeout(() => {
                heading.classList.remove('fade-in');
                subtitle.classList.remove('fade-in');
                description.classList.remove('fade-in');
                contactLabel.classList.remove('fade-in');
                footer.classList.remove('fade-in');
            }, 500);
        }, 300);
    });
    
    // Contact Box Hover Effect
    const contactBox = document.querySelector('.contact-box');
    contactBox.addEventListener('mouseenter', () => {
        contactBox.style.transform = 'translateY(-5px)';
    });
    
    contactBox.addEventListener('mouseleave', () => {
        contactBox.style.transform = 'translateY(0)';
    });
});