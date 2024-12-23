"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';


const Banner = () => {

    return (
        <div id="home-section" className='bg-[#F9F5F2]'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h1
                                className="title1"
                                style={{
                                    marginBottom: "2px",
                                    color: "#8F6B55",
                                }}
                            >
                                Almost There doc , Your Input Matters
                            </h1>
                            <p className='text-black lg:text-xl font-normal mb-5 text-start'>
                                ADHD Module-Draft

                            </p>
                        </Fade>
                    </div>


                    <div className='col-span-6 flex mb-5 justify-center relative'>
                        <Image src="/images/Banner/banner.svg" alt="nothing" width={1000} height={805} />
                    </div>


                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h1
                                className="title1"
                                style={{
                                    marginBottom: "2px",
                                    color: "#8F6B55",
                                }}
                            >
                                Review the ADHD Module Draft
                            </h1>
                            <p className='text-black lg:text-xl font-normal mb-10 text-start'>
                            Make edits or approve the content for publishing

                            </p>
                        </Fade>
                    </div>
                    <div className='col-span-6 flex justify-center relative'>
                        <Image src="/images/Banner/post.png" alt="nothing" width={1000} height={805} />
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Banner;
