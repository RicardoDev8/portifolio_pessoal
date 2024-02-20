import SectionTitle from "../section-title";
import ExperienceItem from "./experience-item";
import { WorkExperience as IWorkExperience } from '../../types/work-experience'

type WorkExperienceProps = {
    experiences: IWorkExperience[]
}

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
    return ( 
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row" >
            <div className="max-w-[420px]" >
                <SectionTitle title="Experiência profissional" subtitle="experiências" />
                <p className="text-gray-400" >
                    Estou sempre aberto a novos desafios
                    e projetos emocionantes. Vamos trabalhar juntos
                    para criar soluções incríveis para sua empresa
                </p>
            </div>

            <div className="flex flex-col gap-4" >
                {experiences?.map(experience => (
                    <ExperienceItem 
                    key={experience.companyName} 
                    experience={experience}
                    />
                ))}

            </div>
        </section>
     );
}
 
export default WorkExperience;