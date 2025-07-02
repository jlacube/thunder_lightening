const header = `<header class="nj-header">
    <div class="nj-header__group">
        <div class="nj-header__head">
            <div>
                <a href="?lang=en" id="lang-link-en" class="nj-link nj-link--contextual nj-header__head-link">EN</a> / <a href="?lang=el" id="lang-link-el" class="nj-link nj-link--contextual nj-header__head-link">EL</a>
            </div>
            <a href="#" class="nj-header__logo">
                <img src="./logo.svg" height="28" alt="Site logo">
            </a>
            <form>
                <div class="nj-toggle">
                    <label for="toggle-dark-mode">
                        <input type="checkbox" id="toggle-dark-mode" role="switch"/>
                        <span class="nj-toggle__track"></span>
                        <span class="material-icons nj-icon-material">dark_mode</span>
                    </label>
                </div>
            </form>
        </div>
    </div>
</header>`

export default header;