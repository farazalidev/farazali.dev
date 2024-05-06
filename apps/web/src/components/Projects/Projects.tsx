import React from 'react';
import { Project } from '../Project/Project';
import { projectsData } from './projects.data';

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
    return projectsData.map((project, i) => {
        return <Project index={i} {...project} key={project.name} />;
    });
};
