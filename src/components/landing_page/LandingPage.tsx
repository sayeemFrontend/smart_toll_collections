import Hero from './land_components/Hero'
import SectionTitle from './land_components/SectionTitle'
import Video from './land_components/Video'
import Testimonials from './land_components/Testimonials'
import Faq from './land_components/Faq'
import Cta from './land_components/Cta'
import Footer from './land_components/Footer'
import PopupWidget from './land_components/PopupWidget'
import Navbar from './land_components/Navbar'
import Benefits from './land_components/Benefits'
import { benefitOne } from './land_components/data'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle pretitle="Toll Benefits" title=" Why should you use this solutions">
        This System contribute to the upkeep of transportation facilities, ensuring safer and more
        efficient travel experiences for commuters. The systems have evolved over time, with
        technology advancements enabling electronic tolling methods that enhance convenience and
        reduce traffic congestion.
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle pretitle="Watch a video" title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product. Analysts says a landing
        page with video has 3% more conversion rate. So, don&apos;t forget to add one. Just like
        this.
      </SectionTitle>
      <Video />
      <SectionTitle pretitle="Testimonials" title="what our customers said">
        We live with the brand trust and awareness. Some of our users comments, we appreciate any
        feedback..
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer the customers questions frequently asked, feel free with questions we will back soon.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  )
}
