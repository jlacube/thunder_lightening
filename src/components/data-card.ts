export interface DataCardProps {
    value: string | number;
    labelKey: string;
}

export const dataCard = (props: DataCardProps) => {
    return `
<div class="data-card">
    <span class="data-card__value">${props.value}</span>
    <span class="data-card__label" data-translate-key="${props.labelKey}"></span>
</div>
`
}