import { ReactNode } from "react"

type Props ={
    children: ReactNode
}

export function Container({children}: Props){
    return(
        <div className="max-w-[screen-xl] flex items-center justify-center mx-auto h-24 px-4 pt-32 ">
        {children}
        </div>
    )
}