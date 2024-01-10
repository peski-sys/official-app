import FootSide from '@/app/(components)/advertpage/footer'
import NavBar from '@/app/(components)/advertpage/nav'
import HeroAlt from '@/app/(components)/advertpage/heroalt'
import PricingSec from '@/app/(components)/advertpage/pricing'
import ReviewCus from '@/app/(components)/advertpage/review'
import FeaturesList from '@/app/(components)/advertpage/features'

export default function Home() {
  return (
    <>
    <section className='gradient'>
    <NavBar />
    <HeroAlt />
    <FeaturesList />
    <ReviewCus />
    <PricingSec />
    <FootSide />
    </section>
    </>
  )
}
