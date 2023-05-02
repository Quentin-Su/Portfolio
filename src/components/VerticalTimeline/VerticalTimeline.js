import './VerticalTimeline.css';

export const VerticalTimeline = (props) => {
    return (
        <div className='vertical-timeline vertical-timeline--animate vertical-timeline--two-columns'>
            {props.children}
        </div>
    );
};