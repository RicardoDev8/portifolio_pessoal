"use client"

import Image from "next/image";
import TechBadge from "../tech-badge";
import { WorkExperience } from "@/app/types/work-experience";
import { RichText } from "../rich-text";
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";

type ExperienceItemProps = {
    experience: WorkExperience
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {

    const {
        startDate,
        endDate,
        description,
        companyUrl,
        companyName,
        companyLogo,
        role,
        technologies
    } = experience

    const dateStart = new Date(experience.startDate)

    const formattedDateStart = format(dateStart, 'MMM yyyy', {locale: ptBR} )

    const formattedDateEnd = endDate ? format(new Date(endDate), 'MMM yyyy', {locale: ptBR} ) : 'o momento'

    const endJob = endDate ? new Date(endDate) : new Date()

    const monthsInjob = differenceInMonths(endJob, startDate)
    const yearsInJob = differenceInYears(endJob, startDate)
    const monthsRemaining = monthsInjob % 12

    const formattedDuration =
    yearsInJob > 0
      ? `${yearsInJob} ano${yearsInJob > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${monthsInjob} mes${monthsInjob > 1 ? 'es' : ''}`



    return ( 
        <motion.div 
            className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
            {...fadeUpAnimation}
            transition={{duration: 0.5}}
            >
            <div className="flex flex-col items-center gap-4" >
                <div className="rounded-full border border-gray-500 p-0.5" >
                    <Image
                    src={companyLogo.url}
                    alt="logo da empresa"
                    width={40}
                    height={40}
                    className="rounded-full"
                    />
                </div>
                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base" >
                    <a 
                    href={companyUrl}
                    className="text-gray-500 hover:text-indigo-500 transition-colors"
                    >
                       @ {companyName}
                    </a>
                    <h4 className="text-gray-300" >{role}</h4>
                    <span className="text-gray-500" >
                        {formattedDateStart} - {formattedDateEnd} ({formattedDuration})
                    </span>
                    <div className="text-gray-400" >
                        <RichText
                        content={description.raw}
                        />
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold" >Competências</p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8" >
                    {technologies.map((tech, index) => (
                        <TechBadge 
                            key={`experience-${companyName}-tech-${tech.name}`} 
                            name={tech.name}
                            {...techBadgeAnimation}
                            transition={{duration: 0.2, delay: index * 0.1}}
                            />
                    ))}
                </div>
            </div>
        </motion.div>

     );
}
 
export default ExperienceItem;