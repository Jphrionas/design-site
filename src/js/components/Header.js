export class Header {

    constructor(config = {}, ...components) {
        this._config = config;
        this._components = components;
    }

    render() {
        let header = document.createElement("header");
        header.classList.add('header');

        header.innerHTML = `
                <a href="#" class="header__logo">
                    <img src="images/logo.png" alt="Logo da Alluminox">    
                </a>

                <div class="header__hamburguer">
                    <span class="header__hamburguer-icon">Show Menu</span>
                </div>
                ${this._components.map(component => component.render()).join('')} `


        return header;
    }
}