import Skeleton from '@mui/material/Skeleton';

export default function PopularViewLoading(){

    return (
        <div className="popular-container">
            <Skeleton variant="rectangular" className="popular-box"/>
            <Skeleton variant="rectangular" className="popular-box"/>
            <Skeleton variant="rectangular" className="popular-box"/>
        </div>
    );

}