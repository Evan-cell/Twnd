import React from 'react'

function Testimonials() {
  return (
    <section id='testimonial'>
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            {/* heading */}
            <h2 className="text-4xl font-bold text-center">
                What's diffrent about Manage?
            </h2>
            {/* test */}
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                {/* testimonial 1 */}
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img src="img/avatar-anisha.png" className='w-16 -mt-14' alt="" />
                    <h5 className="text-lg font-bold">Anisha Li</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        "Manage has a supercharged out teams's workflow.The ability to maintain visibility on large milestoness at all times keeps everyone motivated"
                    </p>
                </div>
                                {/* testimonial 2 */}
                                <div className=" hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                    <img src="img/avatar-ali.png" className='w-16 -mt-14' alt="" />
                    <h5 className="text-lg font-bold">Ali bravo</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        "Manage has a supercharged out teams's workflow.The ability to maintain visibility on large milestoness at all times keeps everyone motivated"
                    </p>
                </div>
                                {/* testimonial 3 */}
                                <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                    <img src="img/avatar-richard.png" className='w-16 -mt-14' alt="" />
                    <h5 className="text-lg font-bold">Richard watts</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        "Manage has a supercharged out teams's workflow.The ability to maintain visibility on large milestoness at all times keeps everyone motivated"
                    </p>
                </div>
            </div>
            {/* button */}
            <div className="my-16">
            <a href="" className=" p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
            </div>
        </div>
    </section>
  )
}

export default Testimonials