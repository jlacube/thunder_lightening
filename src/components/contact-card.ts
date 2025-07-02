export interface ContactCardProps {
    name: string;
    postKey: string;
    email: string;
}

export const contactCard = (props: ContactCardProps) => {
    return `
    <div class="contact-card">
        <div class="nj-avatar nj-avatar--default-icon">
            <p class="nj-sr-only">Profile picture</p>
        </div>
        <div class="contact-card__info">
            <span class="contact-card__name">${props.name}</span>
            <p class="contact-card__description" data-translate-key="${props.postKey}"></p>
        </div>
        <a href="mailto:${props.email}" class="nj-link contact-card__link">${props.email}</a>
    </div>
    `
}