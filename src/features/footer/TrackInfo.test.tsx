import { cleanup, render } from "@testing-library/react";
import { Track } from '../../slices/trackSlice';
import TrackInfo from './TrackInfo';

afterEach(cleanup)

describe('TrackInfo component', () => {

    it('should render default value when track is null', () => {
        const track = null;

        render(<TrackInfo track={track}></TrackInfo>)

        const expected = 'No Title';
        expect(document.querySelector('.author').textContent)
        .toBe(expected);

        expect(document.querySelector('.description').textContent)
        .toBe(expected);

        expect(document.querySelector('img').src)
        .toMatch(new RegExp('/api/image/default$'));
    });

    it('should render track info', () => {
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

        render(<TrackInfo track={track}></TrackInfo>)

        expect(document.querySelector('.author').textContent)
        .toBe(track.title);

        expect(document.querySelector('.description').textContent)
        .toBe(track.author);

        expect(document.querySelector('img').src)
        .toMatch(new RegExp(track.imageUrl + '$'));
    });


});