import { cleanup, render } from "@testing-library/react";
import MobilePlayPauseButton from './MobilePlayPauseButton';

afterEach(cleanup)

describe('MobilePlayPauseButton component', () => {

    it('should render play button when isPlaying is false', () => {
        const onClick = jest.fn();

        render(<MobilePlayPauseButton onClick={onClick} isPlaying={false}></MobilePlayPauseButton>)

        const playButton = document.querySelector('[data-testid="mobile-play"]');
        const pauseButton = document.querySelector('[data-testid="mobile-pause"]');

        expect(playButton).not.toBeNull();
        expect(pauseButton).toBeNull();
    });

    it('should render pause button when isPlaying is true', () => {
        const onClick = jest.fn();

        render(<MobilePlayPauseButton onClick={onClick} isPlaying={true}></MobilePlayPauseButton>)

        const playButton = document.querySelector('[data-testid="mobile-play"]');
        const pauseButton = document.querySelector('[data-testid="mobile-pause"]');
        
        expect(pauseButton).not.toBeNull();
        expect(playButton).toBeNull();
    });

    it('should change value when clicked', () => {
        const onClick = jest.fn(() => isPlaying = !isPlaying);
        let isPlaying = false;

        render(<MobilePlayPauseButton onClick={onClick} isPlaying={isPlaying}></MobilePlayPauseButton>)

        const playButton = document.querySelector('[data-testid="mobile-play"]');
        expect(playButton).not.toBeNull();

        for (let i = 0; i < 5; i++){
            playButton.dispatchEvent(new MouseEvent("click", { bubbles: true })); 
        }
        
        expect(isPlaying).toBe(true);
        expect(onClick).toHaveBeenCalledTimes(5);

        render(<MobilePlayPauseButton onClick={onClick} isPlaying={isPlaying}></MobilePlayPauseButton>)

        const pauseButton = document.querySelector('[data-testid="mobile-pause"]');
        expect(pauseButton).not.toBeNull();
    });

});