import { cleanup, render } from "@testing-library/react";
import Duration from './Duration';

afterEach(cleanup)

describe('Duration component', () => {

    it('should render zero', () => {
        render(<Duration currentTime={0} duration={0}></Duration>)

        const duration = document.querySelector('[data-testid="duration"]');

        expect(duration.textContent).toBe('0:00 - 0:00');
    });

    it('should render duration information', () => {
        render(<Duration currentTime={87} duration={254}></Duration>)

        const duration = document.querySelector('[data-testid="duration"]');

        expect(duration.textContent).toBe('1:27 - 4:14');
    });

    it('should render zero if given minus values', () => {
        render(<Duration currentTime={-87} duration={-254}></Duration>)

        const duration = document.querySelector('[data-testid="duration"]');

        expect(duration.textContent).toBe('0:00 - 0:00');
    });

});