import React from 'react'

function Features() {
  return (
    <section id='features'>
        {/* flex container */}
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            {/* heading */}
            <div className="flex flex-col space-y-12 md:w-1/2">
                <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                    What's diffrent about Manage
                </h2>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    Manage provides all the functionality your team needs without the complexity.Our software is tailor-made for modern digital product
                </p>
            </div>
            {/* numbered list */}
            <div className="flex flex-col space-y-8 md:w-1/2">
                {/* list 1 */}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* heading */}
                    <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">01</div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Track company progress 
                            </h3>
                        </div>
                    </div>
                    <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                        Track company wide progress
                    </h3>
                    <p className="text-darkGrayishBlue">
                        See how your day-to-day tasks fit into the wider vision. Go from tracking your progress at the milestone level all the way down to the smallest details.Never loose sight of the bigger picture again
                    </p>
                    </div>
                </div>
                                {/* list 2 */}
                                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* heading */}
                    <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">02</div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Advanced built in reports
                            </h3>
                        </div>
                    </div>
                    <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                        Adavanced built in reports
                    </h3>
                    <p className="text-darkGrayishBlue">
                        See how your day-to-day tasks fit into the wider vision. Go from tracking your progress at the milestone level all the way down to the smallest details.Never loose sight of the bigger picture again
                    </p>
                    </div>
                </div>
                                {/* list 3 */}
                                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* heading */}
                    <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">03</div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Every thing you need in one place
                            </h3>
                        </div>
                    </div>
                    <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                        Every thing you need in one place
                    </h3>
                    <p className="text-darkGrayishBlue">
                        See how your day-to-day tasks fit into the wider vision. Go from tracking your progress at the milestone level all the way down to the smallest details.Never loose sight of the bigger picture again
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features