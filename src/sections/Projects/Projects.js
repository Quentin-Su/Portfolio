import { projects } from '../../utils/context/constants';
import { Tag } from '../../components/Tag/Tag';
import { Link } from 'react-router-dom';
import './Projects.css';

export const Projects = () => {
    return (
        <>
            {
                projects.map((value, index) => (
                    <div key={index} className='project_container'>
                        <div className='project_type'>
                            <h2>{value.title}</h2>
                        </div>

                        <div className='project_context'>
                            <div className='project_capture'>
                                <img src={value.image} al={value.alt_Image} />
                            </div>

                            <div className='project_content'>
                                <h3>{value.project.subtitle}</h3>
                                <p className='project_description'>{value.project.description}</p>

                                <div className='project_tags_container'>
                                    {
                                        value.project.tags.map((tag, tag_index) => (
                                            <Tag key={tag_index} content={tag.name} color={tag.color} />
                                        ))
                                    }
                                </div>

                                <Link className='project_content_link' to={value.project.projectUrl} target='_blank' aria-label='Project GitHub link'>View Project</Link>
                            </div>
                        </div>

                        <div className='project_technical_points'>
                            {
                                value.technical_Description.map((td, td_index) => (
                                    <div key={td_index} className='project_point_item'>
                                        <div className='point_icon'>
                                            <span className='material-icons'>{td.icon}</span>
                                        </div>

                                        <div className='point_content'>
                                            <span>{td.description}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    );
};