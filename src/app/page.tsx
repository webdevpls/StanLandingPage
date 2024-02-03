
import { AboutService } from '@/components/AboutService'
import { AboutUs } from '@/components/AboutUs'
import { SectioHero } from '@/components/SectionHero'
import Image from 'next/image'

export default function Home() {
  return (
    
    <>
    <SectioHero/>
    <AboutService/>
    <AboutUs/>
    </>
  )
}
