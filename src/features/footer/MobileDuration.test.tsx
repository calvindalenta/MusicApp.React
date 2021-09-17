import { cleanup, render } from "@testing-library/react";
import MobileDuration from './MobileDuration';

afterEach(cleanup)

describe('MobileDuration component', () => {

    it('should render zero', () => {
        render(<MobileDuration currentTime={0} duration={0}></MobileDuration>)

        const mobileDuration = document.querySelectorAll('p');

        expect(mobileDuration[0].textContent).toBe('0:00');
        expect(mobileDuration[1].textContent).toBe('0:00');
    });
    
    it('should render duration information', () => {
        render(<MobileDuration currentTime={87} duration={254}></MobileDuration>)

        const mobileDuration = document.querySelectorAll('p');

        expect(mobileDuration[0].textContent).toBe('1:27');
        expect(mobileDuration[1].textContent).toBe('4:14');
    });

    it('should render zero if given minus values', () => {
        render(<MobileDuration currentTime={-87} duration={-254}></MobileDuration>)

        const mobileDuration = document.querySelectorAll('p');

        expect(mobileDuration[0].textContent).toBe('0:00');
        expect(mobileDuration[1].textContent).toBe('0:00');
    });


});