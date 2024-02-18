import Link from "next/link";
import ProjectListCard from "./project-list-card";

const ProjectsList = () => {
    return ( 
        <section className="container w-full py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6" >
            <Link href="/projects/pizzaria" >
                <ProjectListCard/>
            </Link>
        </section>
     );
}
 
export default ProjectsList;