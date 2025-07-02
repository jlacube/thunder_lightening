export interface SiteCardProps {
    url: string
    imageUrl: string
    nameKey: string
    siteDescriptionKey: string
}


export const siteCard = (props: SiteCardProps) => {
    return `
        <a href="${props.url}" target="_blank" class="site-card nj-card nj-card--cover" style="background-image:url(${props.imageUrl});">
        <div class="nj-card__body">
          <div class="nj-card__overlay">
            <h4 class="nj-card__title" data-translate-key="${props.nameKey}"></h4>
            <span class="material-icons" aria-hidden="true">arrow_forward</span>
            <p class="nj-card__description" data-translate-key="${props.siteDescriptionKey}"></p>
          </div>
        </div>
      </a>
    `
}