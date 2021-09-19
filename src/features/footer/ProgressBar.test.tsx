import { cleanup, render, fireEvent } from "@testing-library/react";
import { makeProgressBar } from "../overrides/makeProgressBar";
import ProgressBar from './ProgressBar';

jest.mock('./ProgressBar', () => (props) => {
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
            data-testid="progress-bar"
        />
    );
});

const bar = makeProgressBar({
    root: {
        color: '#ffcb19',
        height: 0,
        zIndex: 1,
    },
})

afterEach(cleanup)

describe('ProgressBar component', () => {

    it('should change value when onchange fired', () => {
        const onChange = jest.fn(
            (event: React.ChangeEvent<{}>, value: number | number[]) => {progress = event.target.value}
        );
        let progress = 0;
        const { getByTestId, rerender } = render(
            <ProgressBar Bar={bar} onChange={onChange} progress={progress}></ProgressBar>
        )

        let volume = getByTestId('progress-bar') as HTMLInputElement;
        expect(volume.value).toBe(progress.toString());
        
        fireEvent.change(volume, { target: { value: 76 } });
        expect(onChange).toHaveBeenCalled();

        rerender(<ProgressBar Bar={bar} onChange={onChange} progress={progress}></ProgressBar>)
        volume = getByTestId('progress-bar') as HTMLInputElement;
        expect(volume.value).toBe(progress.toString());
    });

});