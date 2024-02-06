import Image from "next/image";

import Logo from "@/assets/logo2.png"

export function Footer(){
    return(

        <div className="pb-14">
    <footer className="flex flex-row justify-evenly pt-4">

        <div className="flex items-center justify-between w-full md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                <li>
                    <a href="#home" className="block py-2 px-3 text-green-one" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#service" className="block py-2 px-3 text-green-one">Serviços</a>
                </li>
                <li>
                    <a href="#about" className="block py-2 px-3 text-green-one">Quem somos?</a>
                </li>
                <li>
                    <a href="#contact" className="block py-2 px-3 text-green-one">Contato</a>
                </li>
            </ul>
        </div>

    </footer>

    <div className="flex flex-col items-center justify-center mt-16">
        <Image
            src={Logo}
            alt="logo"
        />
    </div>

    <div className="flex items-center justify-center mt-12">
        <p className="text-green-one">© 2024 PLS webDeveloper. All rights reserved.</p>
    </div>
</div>


    

    )
}