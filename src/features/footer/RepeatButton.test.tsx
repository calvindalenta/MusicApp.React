import { cleanup, render, fireEvent } from "@testing-library/react";
import RepeatButton from './RepeatButton';

afterEach(cleanup)

describe('RepeatButton component', () => {

    it('should be clickable', () => {
        const onClick = jest.fn();

        const { getByTestId } = render(
            <RepeatButton onClick={onClick}></RepeatButton>
        )

        const repeatButton = getByTestId('repeat');

        fireEvent.click(repeatButton);
        expect(onClick).toHaveBeenCalled();
    });

});