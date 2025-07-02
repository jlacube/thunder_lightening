import {dataCard, DataCardProps} from "../components/data-card.ts";
import cities from '../data/cities.json';

// Calculate totals for all cities
const allCities = Object.values(cities);
const totals = allCities.reduce((acc, city) => ({
    electricity_generated_mwh: acc.electricity_generated_mwh + city.electricity_generated_mwh,
    households_connected_to_system: acc.households_connected_to_system + city.households_connected_to_system,
    carbon_footprint_reduced_tons: acc.carbon_footprint_reduced_tons + city.carbon_footprint_reduced_tons,
    lightning_strikes_this_year: acc.lightning_strikes_this_year + city.lightning_strikes_this_year
}), {
    electricity_generated_mwh: 0,
    households_connected_to_system: 0,
    carbon_footprint_reduced_tons: 0,
    lightning_strikes_this_year: 0
});

const data: DataCardProps[] = [
    {
        labelKey: 'delivered.data.label1',
        value: totals.electricity_generated_mwh
    },
    {
        labelKey: 'delivered.data.label2',
        value: totals.households_connected_to_system
    },
    {
        labelKey: 'delivered.data.label3',
        value: totals.carbon_footprint_reduced_tons
    },
    {
        labelKey: 'delivered.data.label4',
        value: totals.lightning_strikes_this_year
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