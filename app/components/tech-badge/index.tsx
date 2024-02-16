
type TechBadgeProps = {
    name: string
}

const TechBadge = ({ name }: TechBadgeProps) => {
    return ( 
        <span className="text-gray-300 bg-indigo-700/80 text-sm py-1 px-3 rounded-lg" >
            {name}
        </span>
     );
}
 
export default TechBadge;