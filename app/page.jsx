import Foot from '@/app/(components)/advertpage/footer'
import Nav from '@/app/(components)/advertpage/nav'
import HeroALT from '@/app/(components)/advertpage/heroalt'
import Pricing from '@/app/(components)/advertpage/pricing'
import Review from '@/app/(components)/advertpage/review'
import Features from '@/app/(components)/advertpage/features'

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
