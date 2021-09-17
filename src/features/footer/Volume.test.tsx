import { cleanup, render, fireEvent } from "@testing-library/react";
import Volume from './Volume';

jest.mock('./Volume', () => (props) => {
    const { currentVolume, onVolumeChange } = props;

    return (
        <>
            <i className="fas fa-volume-down fa-2x volume-icon"></i>

            {/* <VolumeUpIcon color='disabled' className="volume-icon"/> */}
            <input
            className="volume-slider"
            type="range"
            value={currentVolume}
            onChange={onVolumeChange}
            min={0}
            max={1}
            step={0.01}
            data-testid="volume"
            />
        </>
    );
});

afterEach(cleanup)

describe('Volume component', () => {

    it('should change volume when onchange fired', () => {
        const onVolumeChange = jest.fn(
            (event: React.ChangeEvent<{}>, value: number | number[]) => {currentVolume = 0.9}
        );
        let currentVolume = 0.3;
        const { getByTestId, rerender } = render(<Volume onVolumeChange={onVolumeChange} currentVolume={currentVolume}></Volume>)

        let volume = getByTestId('volume') as HTMLInputElement;
        expect(volume.value).toBe(currentVolume.toString());
        
        fireEvent.change(volume, { target: { value: 0.9 } });
        expect(onVolumeChange).toHaveBeenCalled();

        rerender(<Volume onVolumeChange={onVolumeChange} currentVolume={currentVolume}></Volume>)
        volume = getByTestId('volume') as HTMLInputElement;
        expect(volume.value).toBe(currentVolume.toString());
    });

});