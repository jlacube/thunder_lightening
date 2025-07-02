import {contactCard, ContactCardProps} from "../components/contact-card.ts";

const contacts: ContactCardProps[] = [
    {
        name: "Billy Hana",
        postKey: "contact.cards.job1",
        email: "billy.hana@thunder-lightning.com"
    },
    {
        name: "Alec Lair",
        postKey: "contact.cards.job2",
        email: "alec.lair@thunder-lightning.com"
    },
    {
        name: "Gilbert B'Ko",
        postKey: "contact.cards.job3",
        email: "gilbert.bko@thunder-lightning.com"
    }
]

const contact = `
<section class="contact">
    <h2 data-translate-key="contact.title"></h2>
    <h3 data-translate-key="contact.subtitle"></h3>
    <p data-translate-key="contact.content"></p>
    <div class="contact__cards">
        ${contacts.map(contactCard).join('\n')}
    </div>
</section>
`;

export default contact;