"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';


const Banner = () => {

    return (
        <div id="home-section" className='bg-lightpink'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                            UNDERSTANDING
                            ADHD
                            </h1>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey lg:text-xl font-normal mb-10 lg:text-start text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam</p>
                        </Fade>
                        
                    </div>

                    <div className='col-span-6 flex justify-center relative'>
                          

                       


                        <Image src="/images/Banner/post.png" alt="nothing" width={1000} height={805} />

                        
                    </div>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-black lg:text-lg font-normal mt-10 mb-2 lg:text-start text-center'>Draft</p>
                        </Fade>
                </div>
            </div>
        </div>
    )
}

export default Banner;
