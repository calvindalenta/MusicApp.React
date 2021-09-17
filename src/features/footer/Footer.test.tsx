import { cleanup, fireEvent, render } from "@testing-library/react";
import Footer from './Footer';
import { store } from '../../app/store';
import { Provider } from 'react-redux';
import { fetchTracksAsync } from "../../slices/trackSlice";

const tracks =
[
  {
    "id": "4NIIXMiNGw",
    "title": "Pop 05",
    "author": "Grigoriy Nuzhny",
    "source": "mixkit.co",
    "genre": "Pop",
    "filename": "pop_05.mp3"
  },
  {
    "id": "Ry7XYFVHN3",
    "title": "Cat Walk",
    "author": "Arulo",
    "source": "mixkit.co",
    "genre": "Pop",
    "filename": "cat_walk.mp3"
  },
  {
    "id": "9YoEkBkYWw",
    "title": "Peenzee O'Traak",
    "author": "Eugenio Mininni",
    "source": "mixkit.co",
    "genre": "Pop",
    "filename": "peenzee_otraak.mp3"
  },
]
beforeEach(() => {
    jest.spyOn(global, "fetch");
    fetch.mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(tracks)
        })
    );
    store.dispatch(fetchTracksAsync);
});

afterEach(() => {
    global.fetch.mockRestore();
    cleanup();
});

describe('Footer component', () => {

    it('should render audio player', () => {
        
        render(
        <Provider store={store}>
            <Footer></Footer>
        </Provider>
        )

        expect(document.querySelector('#player')).not.toBeNull();
    });

});