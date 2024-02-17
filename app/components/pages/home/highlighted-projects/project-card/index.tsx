import Link from "@/app/components/link";
import TechBadge from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const ProjectCard = () => {
    return ( 
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row" >
            <div className="w-full h-full" >
                <Image
                width={420}
                height={304}
                src="/images/mapa-image.png"
                alt="projeto"
                className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50" >
                    <Image
                    width={20}
                    height={20}
                    alt=""
                    src="/images/icons/project-title-icon.svg"
                    />
                    Titulo do projeto
                </h3>

                <p className="text-gray-400 my-6" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iusto fugiat, ratione, incidunt voluptas et eligendi animi, quod necessitatibus vero rem cum pariatur dicta dignissimos ut soluta? Possimus, doloribus sapiente saepe alias officia deleniti illo assumenda id architecto quaerat fugiat aut totam, quasi porro ad ullam nostrum praesentium omnis obcaecati.
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]" >
                    <TechBadge name="Typescript" />
                    <TechBadge name="Typescript" />
                    <TechBadge name="Typescript" />
                    <TechBadge name="Typescript" />
                    <TechBadge name="Typescript" />
                </div>

                <Link href="/projects/book-wise" >
                    Ver projeto
                    <HiArrowNarrowRight/>
                </Link>
            </div>
        </div>
     );
}
 
export default ProjectCard;