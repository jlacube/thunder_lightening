const hero = `
<section class="hero">
    <div class="hero__text-wrapper">
        <h1 class="hero__title" data-translate-key="hero.title"></h1>
        <p class="hero__text" data-translate-key="hero.subtitle"></p>
    </div>
    <img class="hero__img" src="sites/${import.meta.env.VITE_SITE_NAME}.jpg" alt="Main illustration">
</section>
`;

export default hero;