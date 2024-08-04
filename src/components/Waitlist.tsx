import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTrigger,
} from "./ui/alert-dialog"
import JoinButton from "./../assets/imgs/buttons/join_waitlist.svg";
import NightLight from './../assets/imgs/join_wallet.webp';
import Culangex from './../assets/imgs/culangex.png';
import WaitlistForm from "./WaitlistForm";
import PalmRight from './../assets/imgs/palm-right.webp';
import Aje from './../assets/imgs/AjeCap.webp';
import Artist from './../assets/imgs/Contact_face.webp';
import LightPool from "./../assets/imgs/light_pool.webp";
import Light from "./../assets/imgs/light-2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Waitlist() {
    useGSAP(() => {
        gsap.fromTo("#grow-1", {
            scale: 1,
            opacity: 0,
        }, {
            scale: 1.5,
            opacity: 1,
            yoyo: true,
            duration: 2,
            repeat: -1,
            ease: 'power1.inOut'
        });
        gsap.fromTo("#grow-2", {
            scale: 1,
            opacity: 0,
        }, {
            scale: 2.5,
            yoyo: true,
            opacity: 1,
            duration: 2,
            repeat: -1,
            ease: 'power1.inOut'
        });
        gsap.fromTo("#grow-3", {
            scale: 1,
            opacity: 0,
        }, {
            scale: 3.5,
            opacity: 1,
            yoyo: true,
            duration: 2,
            repeat: -1,
            ease: 'power1.inOut'
        });

        gsap.from("#waitlistpool", {
            y: 200,
            duration: 2,
            ease: 'circ'
        });

        gsap.from("#waitlistlight", {
            opacity: 0,
            duration: 2,
            ease: 'circ',
            delay: 2
        })
    }, []);


    return (
        <section>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <button
                        className="bg-none outline-none border-none max-w-[140px] md:max-w-[150px] xl:max-w-[240px] btnHov"
                    >
                        <img
                            src={JoinButton}
                            alt="Join Waitlist"
                            className="h-auto w-full object-contain object-center"
                        />
                    </button>
                </AlertDialogTrigger>
                <AlertDialogContent className="h-screen flex items-center justify-center">
                    <div className="absolute inset-0 ">
                        <img src={NightLight} alt="Night Light" className="h-full w-full object-cover object-center" />
                        <div className="bg-black/70 absolute inset-0 backdrop-blur-sm" />
                    </div>

                    <img src={PalmRight} alt="Palm" className="xl:h-[500px] h-[350px] w-auto absolute xl:-bottom-[200px] -bottom-[130px] -left-14" />

                    <img src={Aje} alt="Artist" className="xl:h-[400px] h-[300px] w-auto absolute bottom-0 z-10 -right-[120px]" />
                    <img src={Artist} alt="Artist" className="xl:w-[500px] w-[370px] h-auto absolute -bottom-[200px] z-10 right-10" />

                    <div
                        id="waitlistpool"
                        className="absolute -right-[15%] md:-bottom-[150px] xl:-bottom-[200px] h-full xl:w-fit md:w-[400px] hidden lg:block"
                    >
                        <div className="relative md:h-[700px] ">
                            <img
                                src={LightPool}
                                alt="Light Pool"
                                className="h-full w-auto object-contain"
                            />
                            <img
                                src={Light}
                                alt="Light"
                                id="waitlistlight"
                                className="xl:h-96 md:h-60 w-auto absolute xl:top-[9%] md:top-[18%]  xl:-left-[3%] z-20 opacity-40"
                            />
                        </div>
                    </div>


                    <div className="relative z-10 flex flex-col items-center w-full">
                        <div className="mb-4 md:h-32 md:w-32 h-24 w-24 flex items-center justify-center relative">
                            <img src={Culangex} alt="Culangex Logo" className="w-16 md:w-24 h-auto" />
                            <div id="grow-1" className="absolute h-full w-full scale-[1.5] rounded-full bg-[#D9D9D9]/5" />
                            <div id="grow-2" className="absolute h-full w-full scale-[2.5] rounded-full bg-[#D9D9D9]/5" />
                            <div id="grow-3" className="absolute h-full w-full scale-[3.5] rounded-full bg-[#D9D9D9]/5" />
                        </div>
                        <h3 className="mb-8">Join The Waitlist</h3>

                        <WaitlistForm />

                        {/* <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter> */}
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </section>
    )
}
