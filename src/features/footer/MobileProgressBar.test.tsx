import { cleanup, render, fireEvent } from "@testing-library/react";
import MobileProgressBar from './MobileProgressBar';

jest.mock('./MobileProgressBar', () => (props) => {
    const { progress, onChange } = props;

    return (
        <input
            id="progress-bar"
            value={progress}
            // onClick={test}
            onChange={onChange}
            // aria-label="current time"
            min={0}
            max={100}
            step={1}
            // defaultValue={0}
            data-testid="mobile-progress-bar"
        />
    );
});

afterEach(cleanup)

describe('MobileProgressBar component', () => {

    it('should change value when onchange fired', () => {
        const onChange = jest.fn(
            (event: React.ChangeEvent<{}>, value: number | number[]) => {progress = event.target.value}
        );
        let progress = 0;
        const { getByTestId, rerender } = render(
            <MobileProgressBar onChange={onChange} progress={progress}></MobileProgressBar>
        )

        let volume = getByTestId('mobile-progress-bar') as HTMLInputElement;
        expect(volume.value).toBe(progress.toString());
        
        fireEvent.change(volume, { target: { value: 76 } });
        expect(onChange).toHaveBeenCalled();

        rerender(<MobileProgressBar onChange={onChange} progress={progress}></MobileProgressBar>)
        volume = getByTestId('mobile-progress-bar') as HTMLInputElement;
        expect(volume.value).toBe(progress.toString());
    });

});