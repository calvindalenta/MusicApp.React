import { cleanup, render } from "@testing-library/react";
import { makePlayPauseButton } from "../overrides/makePlayPauseButton";
import PlayPauseButton from './PlayPauseButton';

afterEach(cleanup)

const { play, pause } = makePlayPauseButton({
    root: {
        color: '#ffcb19',
        cursor: 'pointer',
        fontSize: '6vh',
    },
})

describe('PlayPauseButton component', () => {

    it('should render play button when isPlaying is false', () => {
        const onClick = jest.fn();

        render(<PlayPauseButton PlayButton={play} PauseButton={pause} onClick={onClick} isPlaying={false}></PlayPauseButton>)

        const playButton = document.querySelector('[data-testid="play"]');
        const pauseButton = document.querySelector('[data-testid="pause"]');

        expect(playButton).not.toBeNull();
        expect(pauseButton).toBeNull();
    });

    it('should render pause button when isPlaying is true', () => {
        const onClick = jest.fn();

        render(<PlayPauseButton PlayButton={play} PauseButton={pause} onClick={onClick} isPlaying={true}></PlayPauseButton>)

        const playButton = document.querySelector('[data-testid="play"]');
        const pauseButton = document.querySelector('[data-testid="pause"]');
        
        expect(pauseButton).not.toBeNull();
        expect(playButton).toBeNull();
    });

    it('should change value when clicked', () => {
        const onClick = jest.fn(() => isPlaying = !isPlaying);
        let isPlaying = false;

        render(<PlayPauseButton PlayButton={play} PauseButton={pause} onClick={onClick} isPlaying={isPlaying}></PlayPauseButton>)

        const playButton = document.querySelector('[data-testid="play"]');
        expect(playButton).not.toBeNull();

        for (let i = 0; i < 5; i++){
            playButton.dispatchEvent(new MouseEvent("click", { bubbles: true })); 
        }
        
        expect(isPlaying).toBe(true);
        expect(onClick).toHaveBeenCalledTimes(5);

        render(<PlayPauseButton PlayButton={play} PauseButton={pause} onClick={onClick} isPlaying={isPlaying}></PlayPauseButton>)

        const pauseButton = document.querySelector('[data-testid="pause"]');
        expect(pauseButton).not.toBeNull();
    });

});