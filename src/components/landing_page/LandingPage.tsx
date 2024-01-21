import Head from 'next/head'
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
      <Head>
        <title>Toll Management </title>
        <meta
          name="description"
          content="Toll management systems play a crucial role in modern transportation infrastructure, serving as a mechanism to finance the construction, maintenance, and improvement of roads, bridges, and tunnels. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
      <SectionTitle pretitle="Testimonials" title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness. Use this section to
        highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the conversion rate as well
        as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  )
}
