import {dataCard, DataCardProps} from "../components/data-card.ts";
import cities from '../data/cities.json';
import {Cities} from "../scripts/types.ts";

const city = cities[import.meta.env.VITE_SITE_NAME as Cities];

const data: DataCardProps[] = [
    {
        labelKey: 'delivered.data.label1',
        value: city.electricity_generated_mwh
    },
    {
        labelKey: 'delivered.data.label2',
        value: city.households_connected_to_system
    },
    {
        labelKey: 'delivered.data.label3',
        value: city.carbon_footprint_reduced_tons
    },
    {
        labelKey: 'delivered.data.label4',
        value: city.lightning_strikes_this_year
    }
]

const delivered = `
<section class="delivered">
    <div class="delivered__text">
        <h2 class="delivered__title" data-translate-key="delivered.title"></h2>
        <p class="delivered__subtitle" data-translate-key="delivered.subtitle"></p>
    </div>
    <div class="delivered__data">
        ${data.map(dataCard).join('\n')}
    </div>
</section>
`

export default delivered;