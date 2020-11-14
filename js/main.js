const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    document.documentElement.style.overflow = 'scroll';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');        
    })
})

var app = new Vue({
    el: '#app',
    data: {
        message: '<eiio.dev/>'
    }
})

var app = new Vue({
    el:'#css',
    data: {
        prymarycolor: '9DFFF9'
    }
})

document.getElementById('button1').onclick = () => {
    // Set the variable on the document.documentElement, which is usually the <html> node
    document.documentElement.style.setProperty('--clr-accent', '#FFC312')
    document.body.classList.remove('nav-open');
    document.documentElement.style.overflow = 'scroll';
}

document.getElementById('button2').onclick = () => {
    // Set the variable on the document.documentElement, which is usually the <html> node
    document.documentElement.style.setProperty('--clr-accent', '#EE5A24')
    document.body.classList.remove('nav-open');
    document.documentElement.style.overflow = 'scroll';
}

document.getElementById('button3').onclick = () => {
    // Set the variable on the document.documentElement, which is usually the <html> node
    document.documentElement.style.setProperty('--clr-accent', '#ED4C67')
    document.body.classList.remove('nav-open');
    document.documentElement.style.overflow = 'scrol';
}   

document.getElementById('button4').onclick = () => {
    // Set the variable on the document.documentElement, which is usually the <html> node
    document.documentElement.style.setProperty('--clr-accent', '#5BC0EB')
    document.body.classList.remove('nav-open');
    document.documentElement.style.overflow = 'scroll';
}   