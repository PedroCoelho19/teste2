import {User} from 'lucide-react'
import Image from 'next/image'
import LogoNlw from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 ">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
          {/* Blur */}
          <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -traslate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"/>

          {/* Stripes */}
          <div className="absolute bottom-0 right-2 top-0  w-2 bg-stripes"/>

          {/* Sing in */}
          <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
                <User className='h-5 w-5 text-gray-500 '/>
            </div>
            
            <p className='max-w-[140px] text-sm leading-snug'>
              <span className='underline'> Crie sua conta </span> e salve suas memórias!
            </p>
          </a>

          {/* Hero */}
          <div className='space-y-5'>
            <Image src={LogoNlw}  alt="Logo Nlw"/>

            <div className='max-w-[420px] space-y-1'> 
              <h1 className='text-5xl font-bold leading-tight text-gray-50' >Sua cápsula do tempo</h1>
              <p className='text-lg leanding-relaxed'>Colecione momentos marcantes da sua jornada e compartilhe (se 
                quiser) com o mundo!
              </p>
            </div>
            <a href='' className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600'> CADASTRAR LEMBRAÇA</a>
          </div> 
          
          {/* Copyright*/}
          <div>
            Feito com 💜 no NLW da{' '}
            <a 
            target='_blank' 
            rel='noreferrer'
            className='underline houver:text-gray-100' 
            href='https://github.com/PedroCoelho19'>
              Rocketseat
            </a>
          </div>

      </div>


      {/* Rigth */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembraça, comece andando{' '}
            <a href="" className="underline hover:text-gray-50">criar agora</a>!
          </p>
        </div>
      </div>
    </main>
  );
}
//puta que pariu
