import Skeleton from '@mui/material/Skeleton';

export default function CardViewLoading(){

    return (
        <div className="card-container">
            <Skeleton variant="rectangular" className="card"/>
            <Skeleton variant="rectangular" className="card"/>
            <Skeleton variant="rectangular" className="card"/>
        </div>
    );

}