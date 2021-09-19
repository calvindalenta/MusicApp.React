export interface DurationProps {
    currentTime: number;
    duration: number;
    children: (currentTime: string, duration: string) => JSX.Element;
}

export default function Duration(props: DurationProps){


    // https://stackoverflow.com/questions/3571717/how-to-check-if-a-number-is-negative
    function isNegative(n) {
        return n < 0;
    }
    
    // Convert seconds to minutes
    // https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
    function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}
    
    function getFormattedNumber(value: number){
        if (Number.isNaN(props.currentTime) || isNegative(props.currentTime)) {
            return fmtMSS(0);
        }
        return fmtMSS(value);
    }

    const currentTime = getFormattedNumber(props.currentTime);
    const duration = getFormattedNumber(props.duration);

    return props.children(currentTime, duration);

}