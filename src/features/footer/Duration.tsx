export interface DurationProps {
    currentTime: number;
    duration: number;
}

export default function Duration(props: DurationProps){

    // Convert seconds to minutes
    // https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
    function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

    const currentTime = Number.isNaN(props.currentTime) ? 0 : fmtMSS(props.currentTime);
    const duration = Number.isNaN(props.duration) ? 0 : fmtMSS(props.duration);
    
    return (
        <p className="timestamp">
            {currentTime} - {duration}
        </p>   
    );
}