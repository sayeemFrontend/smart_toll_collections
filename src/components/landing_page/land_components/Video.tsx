import Container from './Container'

export default function Video() {
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
        {/* <iframe
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/d-ilXg7E0L0"
          title="Have you ever wondered - How does FASTag work at Toll Plazas? Electronic toll collection system"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */}
        <video controls width="100%" style={{ height: '260px', objectFit: 'cover' }}>
          <source src="/demo.mp4" type="video/mp4" />
        </video>
      </div>
    </Container>
  )
}
