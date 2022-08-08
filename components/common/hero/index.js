import Link from "next/link";
import { useEffect } from "react";



export default function Hero() {

  useEffect (() => {

    if(typeof window !='undefined')
            var obj = document.getElementById('video');
            obj.playbackRate=0.25;
    },[]);
    

    return (
        <section id="home" className=" scroll-m-64  ">
            <header className="relative grid  min-h-screen  overflow-hidden ">
            <div
                className="relative z-30  text-white   rounded-xl p-5  xl:pl-40 xl:pr-40"
            >                  
                <div className=" grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <header className=" group pt-32">
                            <h1 className=" text-3xl text-blue-900 lg:text-5xl">
                                <br className="block md:hidden" />
                                <span className="text-5xl font-bold"> </span>
                                <span className="inline-flex h-14 xl:h-20  overflow-x-hidden animate-type
                                 group-hover:animate-type-reverse   whitespace-nowrap text-brand-accent will-change-transform
                                 text-2xl sm:text-3xl xl:text-5xl font-bold ">
                                    Study In Australia
                                </span>
                            </h1>
                            <div className="text-[10px] lg:text-sm font-bold uppercase ">A complete guide to the Australian Student Visa & Universities.</div>
                        </header>

                       
                    </div>
                </div>
            </div>
            <video id="video"
                autoPlay
                loop
                muted playsInline   
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none "
                            >
                <source
                src="https://cdn.videvo.net/videvo_files/video/free/2020-06/large_watermarked/200520_Kim%20Sydney_01_4k_038_preview.mp4"
                type="video/mp4"
                />
            </video>
            
            </header>
        </section>
        
    )
    
}




