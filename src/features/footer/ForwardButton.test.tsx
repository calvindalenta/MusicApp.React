import { cleanup, render, fireEvent } from "@testing-library/react";
import ForwardButton from './ForwardButton';

afterEach(cleanup)

describe('ForwardButton component', () => {

    it('should be clickable', () => {
        const onClick = jest.fn();

        const { getByTestId } = render(
            <ForwardButton onClick={onClick}></ForwardButton>
        )

        const forwardButton = getByTestId('forward');

        fireEvent.click(forwardButton);
        expect(onClick).toHaveBeenCalled();
    });

});