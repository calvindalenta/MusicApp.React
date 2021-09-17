import { cleanup, render } from "@testing-library/react";
import { Track } from "../../../slices/trackSlice";
import Card from './Card';

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

describe('Card component', () => {

    it('should render track title, author, image url, and image alt', () => {

        const { getByTestId } = render(
            <Card src={track.imageUrl} title={track.title} author={track.author}></Card>
        )

        const img = document.querySelector('img');
        const title = document.querySelector('.track-title');
        const author = document.querySelector('.track-author');

        expect(img.src).toMatch(new RegExp(track.imageUrl + '$'));
        expect(img.alt).toBe(track.author + ' - ' + track.title);
        expect(title.textContent).toBe(track.title);
        expect(author.textContent).toBe(track.author);
    });

});