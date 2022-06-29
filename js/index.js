window.onload = () => {
    const lista = document.querySelectorAll('.list');
    const sections = document.querySelectorAll('section');
    const button = document.getElementById('menu-responsive-button');
    const icon = document.getElementsByClassName('menu-responsive')
    const menu = document.getElementById('asideMenuList');
    const header = document.getElementById('inicio');
    const content = document.getElementById('body-content');
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
    }, { threshold: 0.55 });

    sections.forEach((section) => observer.observe(section));

    button.addEventListener('click', () => {
        if (icon[0].classList.item(1) != "menu-active") {
            openMenu();
        } else if (icon[0].classList.item(1) == "menu-active") {
            closMenu();
        }
    });

    header.addEventListener('click', () => {
        closMenu();
    });

    content.addEventListener('click', () => {
        closMenu();
    });

    function offButton() {
        lista.forEach((item) =>
            item.classList.remove("active"));
    }

    function openMenu() {
        icon[0].classList.add('menu-active');
        menu.classList.add('menu-open');
        menu.classList.remove('menu-close');
    }

    function closMenu() {
        icon[0].classList.remove('menu-active');
        menu.classList.remove('menu-open');
        menu.classList.add('menu-close');
    }
}