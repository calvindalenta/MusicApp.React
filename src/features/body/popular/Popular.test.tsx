import { cleanup, render } from "@testing-library/react";
import { Track } from "../../../slices/trackSlice";
import Popular from './Popular';

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

describe('Popular component', () => {

    it('should render author name, image and follower count', () => {

        const { getByTestId } = render(
            <Popular track={track}></Popular>
        )

        const img = document.querySelector('img');
        const author = document.querySelector('.popular-author');
        const followers = document.querySelector('.popular-followers');

        expect(img.src).toMatch(new RegExp(track.imageUrl + '$'));
        expect(img.alt).toBe(track.author);
        expect(author.textContent).toBe(track.author);
        expect(followers.textContent).toMatch(new RegExp('...M Followers'));
    });

});