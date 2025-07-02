export interface PostPartProps {
    titleKey: string;
    contentKey: string;
}

export const postPart = (props: PostPartProps) => {
    return `
<h3 data-translate-key="${props.titleKey}"></h3>
<p data-translate-key="${props.contentKey}"></p>
`
}