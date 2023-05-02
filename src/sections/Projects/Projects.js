import { Project } from "../../components/Project/Project";
import { projects } from "../../utils/context/constants";

export const Projects = () => {

    return (
        <>
            {
                projects.map((value, index) => (
                    <Project key={index} props={value} leftText={(index % 2 === 0) ? true : false} />
                ))
            }
        </>
    );
};