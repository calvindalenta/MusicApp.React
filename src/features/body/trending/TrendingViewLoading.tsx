import Skeleton from '@mui/material/Skeleton';

export default function TrendingViewLoading(){

    return (
        <div className="trending-container">
            <Skeleton variant="rectangular" className="trending-box"/>
            <Skeleton variant="rectangular" className="trending-box"/>
            <Skeleton variant="rectangular" className="trending-box"/>
        </div>
    );

}