import Foot from '@/components/advertpage/footer'
import Nav from '@/components/advertpage/nav'
import HeroALT from '@/components/advertpage/heroalt'
import Pricing from '@/components/advertpage/pricing'
import Review from '@/components/advertpage/review'
import Features from '@/components/advertpage/features'

export default function Home() {
  return (
    <>
    <section className='gradient'>
    <Nav />
    <HeroALT />
    <Features />
    <Review />
    <Pricing />
    <Foot />
    </section>
    </>
  )
}
