"use client"

import Image from "next/image"
import  iconcard3  from "../assets/iconcard3.png"
import emailjs from "@emailjs/browser"

import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import { Bounce, ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"

export function ContactSection () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const notify = () => {
        toast.success('Enviado com sucesso', {
            position: "bottom-center",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
    }


    function sendEmail(e: React.FormEvent<HTMLFormElement>){

        e.preventDefault();

        if(name == '' || email == '' || message == ''){
            alert("Preencha todos os campos")
            return;
        }


        const templateParms = {
            from_name: name,
            message: message,
            email: email
        }
        

        emailjs.send("service_fldu0vk", "template_zgrm7m3", templateParms, "yDDyrkrsu2IAfMH5E" )
        
        .then((response) => {
            
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {

            console.log("ERROR", err)


        }
        
        )
        
        

    }

    const botaoDesabilitado = !name || !email || !message;

    return (

        <section id="contact" className="bg-green-three h-[1300px] flex flex-col items-center justify-center pt-10">
           

           <div className="flex flex-col items-center justify-center gap-8">

            <span className="text-white font-medium">Fale conosco! ✅</span>
                <h1 className="text-white font-bold text-[55px] max-w-[1110px] sm:max-w-[400px] md:max-w-[800px] text-center leading-tight xl:text-[69px] xl:max-w-[1100px]">Entre em <span className="text-green-two">contato</span> e tire todas suas <span className="text-green-two">duvidas!</span></h1>
                <p className="text-white text-center max-w-[600px] xl:max-w-[1100px] font-light">Dúvidas? Não hesite em nos contatar! Estamos prontos para ajudar e esclarecer tudo o que você precisa saber.
                </p>
            </div>

            <div className="bg-second-orange mt-16 w-[400px] md:w-[600px] p-9 flex flex-col items-center justify-center -4 rounded-lg" >
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-[40px] text-white">Fale conosco!</h1>
                        <span className="text-primary-orange">Estamos sempre dispostos a te ajudar!</span>
                    </div>

            <form action="" onSubmit={sendEmail}>
                <div className="flex flex-col items-center justify-center gap-5 mt-9">
                    
                    <div>
                        <Image className="absolute mt-2 ml-4"
                        src={icon1}
                        alt="icon 1"
                        />
                        <input className="bg-white px-12 py-2 w-[350px] rounded-md border border-green-one focus:border-green-two focus:outline-none 2xl:w-[500px]" 
                        
                        type="text" 
                        placeholder="Seu nome" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        
                        
                        /> 
                    </div>

                    <div>
                        <Image className="absolute mt-2 ml-4"
                        src={icon2}
                        alt="icon 2"
                        />
                        <input className="bg-white px-12 py-2 w-[350px] rounded-md border border-green-one focus:border-green-two focus:outline-none 2xl:w-[500px]" 
                        
                        type="email" 
                        placeholder="Seu email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        
                        /> 
                    </div>

                    <div>
                        <Image className="absolute mt-2 ml-4"
                        src={icon2}
                        alt="icon 1"
                        />
                        <textarea className="bg-white px-12 py-2 w-[350px] rounded-md border border-green-one focus:border-green-two focus:outline-none resize-none text-sm 2xl:w-[500px]" 
                        
                        placeholder="Digite sua mensagem"
                        rows={13}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        
                        /> 


                    </div>

                    <input className="text-white bg-primary-orange px-[50px] w-full py-3 rounded-md hover:bg-green-500 cursor-pointer"
                     value="Enviar" 
                     type="submit"
                     onClick={notify}
                     disabled={botaoDesabilitado}
                     />
                     <ToastContainer/>

                     
                    
                    

                    </div>
                   </form>

                    
                
            </div>

    


        </section>


    )
}