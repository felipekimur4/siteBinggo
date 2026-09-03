document.querySelector('.toggle').onclick = () => {
    document.querySelector('nav').classList.toggle('open');
};

document.querySelectorAll('nav a').forEach(a => {
    a.onclick = () => {
        document.querySelector('nav').classList.remove('open');
    };
});

document.getElementById('year').textContent = new Date().getFullYear();

function whatsapp() {
    alert('Me passe o WhatsApp comercial da Binggo e eu coloco o link direto.');
    return false;
}
