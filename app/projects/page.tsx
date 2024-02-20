import PageIntroduction from "../components/pages/projects/page-introduction";
import ProjectsList from "../components/pages/projects/projects-list";
import { ProjectsPageData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

const getPageData = async (): Promise<ProjectsPageData> => {

    const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `

    return fetchHygraphQuery(
        query,
        60 * 60 * 24 //24 hours don't have api's search
    )
}


const Projects = async () => {
    const { projects } = await getPageData()

    return ( 
        <>
            <PageIntroduction/>
            <ProjectsList projects={projects} />
        </>
     );
}
 
export default Projects;