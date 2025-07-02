import '@engie-group/fluid-design-tokens/css'
import '@engie-group/fluid-design-system/css'
import './styles/style.css'
import './styles/components.css'
import contact from "./fragments/contact.ts";
import delivered from "./fragments/delivered.ts";
import footer from "./fragments/footer.ts";
import header from './fragments/header.ts';
import hero from "./fragments/hero.ts";
import post from "./fragments/post.ts";
import sites from "./fragments/sites.ts";
import {getLang, loadLanguage} from "./scripts/translate.ts";
import {initDarkModeToggle, initSiteCardNavigation} from "./scripts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header}
  <main>
    ${hero}
    ${post}
    ${delivered}
    ${sites}
    ${contact}
  </main>
  ${footer}
`

document.addEventListener('DOMContentLoaded', async () => {
  await loadLanguage(getLang());
  initSiteCardNavigation('previous-site', 'next-site');
  initDarkModeToggle();
})