export interface CardProps {
    src: string;
    title: string;
    author: string;
}

export default function Card(props: CardProps) {

    return (
    <div className="card">
        <div className="card-image">
            <img src={props.src} alt={props.author + ' - ' + props.title}/>
        </div>
        <div className="card-footer">
            <div className="card-text">
                <p className="track-title">{props.title}</p>
                <p className="track-author">{props.author}</p>
            </div>
            <div className="card-control">
                <i className="fas fa-ellipsis-v fa-2x"></i>
            </div>
        </div>
    </div>
    );
}