import { cleanup, render, fireEvent } from "@testing-library/react";
import RewindButton from './RewindButton';

afterEach(cleanup)

describe('RewindButton component', () => {

    it('should be clickable', () => {
        const onClick = jest.fn();

        const { getByTestId } = render(
            <RewindButton onClick={onClick}></RewindButton>
        )

        const rewindButton = getByTestId('rewind');

        fireEvent.click(rewindButton);
        expect(onClick).toHaveBeenCalled();
    });

});