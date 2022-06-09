window.onload = () => {
    const list = document.querySelectorAll('.list');
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
    }, { threshold: 0.7 });

    sections.forEach((section) => observer.observe(section));

    list.forEach((item) => item.addEventListener('click', activeLink));

    function offButton() {
        list.forEach((item) =>
            item.classList.remove("active"));
    }

    function activeLink() {
        offButton()
        this.classList.add("active")
    };
}