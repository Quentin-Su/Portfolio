import { Tag } from '../../components/Tag/Tag';
import { works } from '../../utils/context/constants';
import { VerticalTimeline } from '../../components/VerticalTimeline/VerticalTimeline';
import { VerticalTimelineElement } from '../../components/VerticalTimeline/VerticalTimelineElement';
import './Works.css';

export const Works = () => {
    return (
        <>
            <h2 className='work_container_title'>Work Experience</h2>
            <VerticalTimeline lineColor='var(--yellow)'>
                {
                    works.map((value, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={value.date}
                            iconStyle={{ backgroundColor: 'var(--yellow)', fill: 'var(--bg-color)', boxShadow: '0 0 0 4px var(--bg-color), inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)' }}
                            icon={value.icon}
                        >
                            <h3>{value.title}</h3>
                            <h4>{value.subtitle}</h4>
                            <p>{value.description}</p>

                            <div className='vertical-timeline-element-content-tags'>
                                {
                                    value.tags.map((tag, tag_index) => (
                                        <Tag key={tag_index} content={tag.name} color={tag.color} />
                                    ))
                                }
                            </div>
                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
        </>
    )
};