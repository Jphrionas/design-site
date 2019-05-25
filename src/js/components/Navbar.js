export class Navbar {

    constructor(selector = null, items = []) {

    }

    render() {
        return `
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <a class="nav__link" href="#">
                        <i class="nav__icon material-icons">home</i>Início
                    </a>
                </li>

                <li class="nav__item">
                    <a class="nav__link" href="#">
                        <i class="nav__icon material-icons">border_inner</i>Projetos
                    </a>
                </li>

                <li class="nav__item">
                    <a class="nav__link" href="#">
                        <i class="nav__icon material-icons">grid_on</i>Galeria
                    </a>
                </li>

                <li class="nav__item">
                    <a class="nav__link" href="#">
                        <i class="nav__icon material-icons">ballot</i>Contato
                    </a>
                </li>

                <li class="nav__item">
                    <a class="nav__link" href="#">
                        <i class="nav__icon material-icons">ballot</i>Blog
                    </a>
                </li>

                <li class="nav__item">
                    <a class="nav__link" href="#">
                        <i class="nav__icon material-icons">help_outline</i>Sobre
                    </a>
                </li>

            </ul>
        </nav>
        `;
    }
}