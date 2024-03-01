import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-amber-300">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Chandan, nice to have you on here. Please take a look
              around!
            </p>
          </div>
          <div>
              <p>
                Dynamic and innovative Java and Web Developer with hands-on
                experience in designing, developing, and implementing
                high-quality web applications. Demonstrated expertise in Java
                programming, complemented by a solid foundation in front-end
                technologies and database management. Adept at collaborating in
                team settings, with a keen ability to quickly adapt to new
                technologies and methodologies. Eager to contribute to a
                forward-thinking team to deliver cutting-edge web solutions.
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
