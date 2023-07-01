

import './App.css';

const Modal = ({show,item,onClose}) => {
    if(!show)
    {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
    return (
        <>
            <div className="overlay">
                <div className="inner-overlay">
                    <button className="close"onClick={onClose}><i>Close</i></button>
                    <div className="inner-box">
                        <img className="modalimg" src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3>
                            <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br />
                            <a href={item.volumeInfo.previewLink}><button>More</button></a> 
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
export default Modal;