import { cleanup, fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import mockStore from '../../../mocks/mockStore';
import Album from './Album';

afterEach(cleanup)

describe('Album component', () => {

    it('should render track title, author, image url, and image alt', () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <Album></Album>
            </Provider>
        )

        const tracks = mockStore.getState().track.value;
        const lastTrack = tracks[tracks.length - 1];

        const img = document.querySelector('img');
        const author = document.querySelector('.album-author');
        const description = document.querySelector('.album-description');

        expect(img.src).toMatch(new RegExp(lastTrack.imageUrl + '$'));
        expect(img.alt).toBe(lastTrack.author);
        expect(description.textContent).toBe('Three Pieces from Songbook, Andrius Zlabys, piano');
        expect(author.textContent).toBe(lastTrack.author);
    });

    it('should change current track when clicked', () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <Album></Album>
            </Provider>
        )

        const card = document.querySelector('.album-container');
        fireEvent.click(card);

        expect(mockStore.getState().audioPlayer.value).not.toBeNull();
    });

});