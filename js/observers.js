window.onload = () => {
    const lista = document.querySelectorAll('.list');
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entradas, observer) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                if (entrada.target.id == "inicio" || entrada.target.id == "perfil") {
                    offButton()
                    document.getElementById('btn-inicio').classList.add('active')
                } else if (entrada.target.id == "nosotros") {
                    offButton()
                    document.getElementById('btn-nosotros').classList.add('active')
                } else if (entrada.target.id == "servicios") {
                    offButton()
                    document.getElementById('btn-servicios').classList.add('active')
                } else if (entrada.target.id == "proyectos") {
                    offButton()
                    document.getElementById('btn-proyectos').classList.add('active')
                } else if (entrada.target.id == "contacto") {
                    offButton()
                    document.getElementById('btn-contacto').classList.add('active')
                }
            }
        })
    }, { threshold: 0.5 });

    sections.forEach((section) => observer.observe(section));

    function offButton() {
        lista.forEach((item) =>
            item.classList.remove("active"));
    }
}