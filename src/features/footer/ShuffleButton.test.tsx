import { cleanup, render, fireEvent } from "@testing-library/react";
import ShuffleButton from './ShuffleButton';

afterEach(cleanup)

describe('ShuffleButton component', () => {

    it('should be clickable', () => {
        const onClick = jest.fn();

        const { getByTestId } = render(
            <ShuffleButton onClick={onClick}></ShuffleButton>
        )

        const shuffleButton = getByTestId('shuffle');

        fireEvent.click(shuffleButton);
        expect(onClick).toHaveBeenCalled();
    });

});