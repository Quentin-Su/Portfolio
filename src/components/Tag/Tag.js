import './Tag.css';

export const Tag = ({ color, content }) => {
    return (
        <div className={`tag_element tag_${color}`}>
            <span>{content}</span>
        </div>
    )
};