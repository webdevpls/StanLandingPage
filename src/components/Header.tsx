import Image from "next/image";

import Logo from "@/assets/Logo.png"

export function Header(){
    return(

        

<nav className="fixed bg-second-orange w-full flex-1 border-b-[1px] border-primary-orange z-50">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto h-24 w-full">
  <a href="" className="flex items-center space-x-3 ">
      
      <Image src={Logo} alt="Logo"/>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 ">
      <a href="https://stanagencia.com.br/" target="blank" type="button" className="text-white bg-primary-orange rounded-[4px] px-6 py-2 hover:bg-green-500
       ">Sistema
       </a>
    
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  ">
      <li>
        <a href="#home" className="block py-2 px-3 text-zinc-300 hover:text-zinc-50" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#service" className="block py-2 px-3 text-zinc-300 hover:text-zinc-50">Serviços</a>
      </li>
      <li>
        <a href="#about" className="block py-2 px-3 text-zinc-300 hover:text-zinc-50">Quem somos?</a>
      </li>
      <li>
        <a href="#contact" className="block py-2 px-3 text-zinc-300 hover:text-zinc-50">Contato</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    )
}