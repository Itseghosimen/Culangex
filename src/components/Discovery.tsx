import DiscoveryBackground from "./../assets/imgs/Discovery_banner.webp";
import Carousel from "./Carousel";
import Palms from "./../assets/imgs/palm-alt.gif";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Discovery() {
  useGSAP(() => {
    gsap.from('.char', {
      translateY: 300,
      rotate: 360,
      stagger: {
        each: 0.05,
        from: 'random'
      },

      scrollTrigger: {
        trigger: ".js-chars",
        start: "top 95%",
      },
      ease: 'back.out',
      duration: 1
    })
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute z-10 bg-black backdrop-blur h-full w-full opacity-75" />
      <img
        src={DiscoveryBackground}
        alt="Banner Image"
        className="absolute h-full w-full object-cover object-center"
      />
      <div className="px-6 md:px-14 lg:px-20 flex flex-col items-center relative 2xl:py-60 pb-32 ">
        <div className="absolute z-10 top-0 w-full bg-gradient-to-b from-black via-black/65 to-black/0 h-[150px] md:h-[300px]" />
        <div className="absolute bottom-0 w-full bg-gradient-to-b from-black/0 to-black h-[150px] lg:h-[300px]" />
        <div className="relative max-w-6xl 2xl:max-w-[1500px] w-full mx-auto grid md:grid-cols-2 items-center z-20 pt-20 lg:pt-32 xl:pt-40 gap-y-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-left md:text-4xl lg:text-6xl js-chars">
              <h2 className="text-left">
                <div className="word">
                  <div className="char">d</div>
                  <div className="char">i</div>
                  <div className="char">s</div>
                  <div className="char">c</div>
                  <div className="char">o</div>
                  <div className="char">v</div>
                  <div className="char">e</div>
                  <div className="char">r</div>
                </div>
                <div className="word">
                  <div className="char">a</div>
                </div>
                <div className="word">
                  <div className="char">w</div>
                  <div className="char">i</div>
                  <div className="char">d</div>
                  <div className="char">e</div>
                </div>
              </h2>
              <h2 className="text-left">
                <div className="word">
                  <div className="char">r</div>
                  <div className="char">a</div>
                  <div className="char">n</div>
                  <div className="char">g</div>
                  <div className="char">e</div>
                </div>
                <div className="word">
                  <div className="char">o</div>
                  <div className="char">f</div>
                </div>
                <div className="word">
                  <div className="char">c</div>
                  <div className="char">u</div>
                  <div className="char">l</div>
                  <div className="char">t</div>
                  <div className="char">u</div>
                  <div className="char">r</div>
                  <div className="char">e</div>
                </div>
              </h2>
            </h2>
            <p className="max-w-lg 2xl:max-w-2xl">
              Embark on a journey through the rich and diverse tapestry of global cultures. From vibrant festivals and traditional music to unique culinary delights and historical landmarks, immerse yourself in the myriad expressions of human creativity and heritage. Experience the stories, customs, and traditions that make each culture distinct, and broaden your horizons by exploring the world’s cultural treasures.
            </p>
          </div>

          <Carousel />
        </div>

        <div className="palm absolute z-20 h-[300px] lg:-bottom-[240px] md:-bottom-[150px] -bottom-20 md:h-[450px] lg:h-[600px] right-0">
          <img
            src={Palms}
            alt="Palm Tree"
            className="h-full w-full object-contain object-right-top"
          />
        </div>
      </div>


    </div>
  );
}
