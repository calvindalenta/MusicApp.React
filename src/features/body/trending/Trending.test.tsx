import { cleanup, fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Track } from "../../../slices/trackSlice";
import Trending from './Trending';
import mockStore from '../../../mocks/mockStore';

afterEach(cleanup)

const track: Track = {
    id: '123',
    title: 'My song',
    author: 'Me Gusta',
    source: 'website.com',
    genre: 'Pop',
    filename: 'mymusicfile.mp3',
    imageUrl: 'api/image/123',
    trackUrl: 'api/track/123',
}

describe('Trending component', () => {

    it('should render track title and author', () => {

        const { getByTestId } = render(
            <Provider store={mockStore}>
                <Trending track={track}></Trending>
            </Provider>
        )

        const title = document.querySelector('.trending-title');
        const author = document.querySelector('.trending-author');
        const duration = document.querySelector('.trending-duration');

        expect(title.textContent).toBe(track.title);
        expect(author.textContent).toBe(track.author);
        expect(duration.textContent).toBe('03:37');
    });

    it('should change current track when clicked', () => {

        const { getByTestId } = render(
            <Provider store={mockStore}>
                <Trending track={track}></Trending>
            </Provider>
        )

        const box = document.querySelector('.trending-box');
        fireEvent.click(box);

        expect(mockStore.getState().audioPlayer.value.currentTrack.id).toBe(track.id);
    });

});