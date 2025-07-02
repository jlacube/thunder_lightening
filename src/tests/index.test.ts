import {describe, expect, it} from 'vitest';
import {initSiteCardNavigation} from '../scripts';

describe('initSiteCardNavigation', () => {
    it('should add click event listener to nextId element', () => {
        document.body.innerHTML = `
        <div class="sites__cards"></div>
      <button id="next">Next</button>
      <button id="previous">Previous</button>
    `;

        const nextButton = document.getElementById('next')!;
        const previousButton = document.getElementById('previous')!;
        const carousel = document.querySelector('.sites__cards')!;

        initSiteCardNavigation('previous', 'next');

        nextButton.click();
        expect(carousel.scrollLeft).toBeGreaterThan(0);

        previousButton.click();
        expect(carousel.scrollLeft).toBe(0);
    });
});