'use client'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'




const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll()
  ])
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide" >
              <div className="embla__slide__number">
                <span>1</span>
              </div>
            </div>
            <div className="embla__slide" >
              <div className="embla__slide__number">
                <span>2</span>
              </div>
            </div>
            <div className="embla__slide" >
              <div className="embla__slide__number">
                <span>3</span>
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default EmblaCarousel
