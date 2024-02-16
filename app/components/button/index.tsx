import { cn } from "@/app/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>


const Button = ({ children, className, ...props }: ButtonProps) => {
    return ( 
        <button
        className={cn(
            "bg-indigo-700 py-3 px-4 rounded-lg text-gray-200 flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all disabled:opacity-50",
            className
        )}
        {...props}
        >
            {children}
        </button>
     );
}
 
export default Button;