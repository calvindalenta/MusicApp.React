import { cleanup, render, fireEvent } from "@testing-library/react";
import FavoriteButton from './FavoriteButton';

afterEach(cleanup)

describe('FavoriteButton component', () => {

    it('should change color when clicked', () => {
        const onClick = jest.fn(() => active = !active);
        let active = false;

        const expectedColor = "rgb(255, 203, 25)";

        const { getByTestId, rerender } = render(
            <FavoriteButton onClick={onClick} active={active}></FavoriteButton>
        )

        let favoriteButton = getByTestId('favorite');
        expect(favoriteButton.style.color).not.toBe(expectedColor);

        fireEvent.click(favoriteButton);
        rerender(<FavoriteButton onClick={onClick} active={active}></FavoriteButton>);
        expect(favoriteButton.style.color).toBe(expectedColor);
    });

});