import { Link } from 'react-router-dom';
import './Card.css';

export const Card = (props) => {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    }

    return (
        <>
            <Link to={props.mailto ? `mailto:Quentin.Susseto@outlook.fr` : ''} className={`card_item ${props.class}`} onClick={() => handleScroll(props.htmlId)}>
                <div className='card_content'>
                    <div className='card_icon'>
                        <span className='material-icons'>{props.icon}</span>
                    </div>
                    <div className='card_text'>{props.content}</div>
                </div>
            </Link>
        </>
    );
};