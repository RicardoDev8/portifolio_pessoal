import SectionTitle from "@/app/components/section-title";
import { TbBrandNextjs } from "react-icons/tb";
import KnowTech from "./know-tech";
import { KnownTech } from "@/app/types/projects";

type KnownTechsProps = {
    techs: KnownTech[]
}

const KnownTechs = ({techs}: KnownTechsProps) => {
    return ( 
        <section className="container py-16" >
            <SectionTitle title="Conhecimentos" subtitle="competências" />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]" >
                {techs?.map((tech) => (
                    <KnowTech
                    key={tech.name}
                    tech={tech}
                    />
                ))}
            </div>
        </section>
     );
}
 
export default KnownTechs;