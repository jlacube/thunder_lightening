import {siteCard, SiteCardProps} from "../components/site-card.ts";

const otherSites: SiteCardProps[] = [
    {
        url: "https://tinywalnut.net/brussels-thunder",
        imageUrl: 'sites/brussels.jpg',
        nameKey: 'sites.cards.brussels.name',
        siteDescriptionKey: 'sites.cards.brussels.description',
    },
    {
        url: "https://tinywalnut.net/london-thunder",
        imageUrl: 'sites/london.jpg',
        nameKey: 'sites.cards.london.name',
        siteDescriptionKey: 'sites.cards.london.description',
    },
    {
        url: "https://tinywalnut.net/new-york-thunder",
        imageUrl: 'sites/new-york.jpg',
        nameKey: 'sites.cards.new-york.name',
        siteDescriptionKey: 'sites.cards.new-york.description',
    },
    {
        url: "https://tinywalnut.net/paris-thunder",
        imageUrl: 'sites/paris.jpg',
        nameKey: 'sites.cards.paris.name',
        siteDescriptionKey: 'sites.cards.paris.description',
    },
    {
        url: "https://tinywalnut.net/sydney-thunder",
        imageUrl: 'sites/sydney.jpg',
        nameKey: 'sites.cards.sydney.name',
        siteDescriptionKey: 'sites.cards.sydney.description',
    },
    {
        url: "https://tinywalnut.net/tokyo-thunder",
        imageUrl: 'sites/tokyo.jpg',
        nameKey: 'sites.cards.tokyo.name',
        siteDescriptionKey: 'sites.cards.tokyo.description',
    },
    {
        url: "https://tinywalnut.net/cairo-thunder",
        imageUrl: 'sites/cairo.jpg',
        nameKey: 'sites.cards.cairo.name',
        siteDescriptionKey: 'sites.cards.cairo.description',
    },
    {
        url: "https://tinywalnut.net/dubai-thunder",
        imageUrl: 'sites/dubai.jpg',
        nameKey: 'sites.cards.dubai.name',
        siteDescriptionKey: 'sites.cards.dubai.description',
    },
    {
        url: "https://tinywalnut.net/kuala-lumpur-thunder",
        imageUrl: 'sites/kuala-lumpur.jpg',
        nameKey: 'sites.cards.kuala-lumpur.name',
        siteDescriptionKey: 'sites.cards.kuala-lumpur.description',
    },
    {
        url: "https://tinywalnut.net/washington-thunder",
        imageUrl: 'sites/washington.jpg',
        nameKey: 'sites.cards.washington.name',
        siteDescriptionKey: 'sites.cards.washington.description',
    }
].filter(site => !site.imageUrl.includes(import.meta.env.VITE_SITE_NAME))

const sites = `
<section class="sites">
    <h3 data-translate-key="sites.title"></h3>
    <div class="sites__wrapper">
        <div class="sites__cards">
            ${otherSites.map(siteCard).join('\n')}
        </div>
    </div>
    <div class="sites__actions">
        <button type="button" id="previous-site" class="nj-icon-btn nj-icon-btn--tertiary nj-icon-btn--xl">
            <span class="nj-sr-only" data-translate-key="sites.alt.previous"></span>
            <span aria-hidden="true" class="material-icons nj-icon-material nj-icon-btn__icon">west</span>
        </button>
        <button type="button" id="next-site" class="nj-icon-btn nj-icon-btn--tertiary nj-icon-btn--xl">
            <span class="nj-sr-only" data-translate-key="sites.alt.next"></span>
            <span aria-hidden="true" class="material-icons nj-icon-material nj-icon-btn__icon">east</span>
        </button>
    </div>
</section>
`;

export default sites;