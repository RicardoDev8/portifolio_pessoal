import Link from "next/link";
import ProjectListCard from "./project-list-card";
import { Project } from "@/app/types/projects";

type ProjectsListProps = {
    projects: Project[]
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
    return ( 
        <section className="container w-full py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6" >
            {projects.map(project => (
            <Link key={project.title} href={`/projects/${project.slug}`}>
                <ProjectListCard project={project} />
            </Link>
            ))}
        </section>
     );
}
 
export default ProjectsList;