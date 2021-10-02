import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Typewriter from 'typewriter-effect'
import me from '../Assets/image/me.png'

const Home = () => {
    return (
        <main>
            <div className="flex relative z-20 items-center">
                <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
                    <div className="flex flex-col mt-8">
                        <img src={me} className="rounded-full w-28 mx-auto bg-yellow-400"/>
                        <p className="text-3xl my-6 text-center font">
                            Hi, I&#x27;m Jm Paunlagui 🤘
                        </p>
                        <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto text-gray-800 text-center py-2">
                            I'm a...
                            <Typewriter
                                options={{
                                    strings: ['Student', 'Designer', 'Technician', 'Engineer', 'Gamer', 'Simp'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 30
                                }}
                            />
                        </h2>
                        <div className="flex items-center justify-center mt-16 space-x-4">
                            <SocialIcon url = "https://www.facebook.com/JmPaunlagui" network = "facebook" style={{ height: 36, width: 36 }} />
                            <SocialIcon url = "https://github.com/JmPaunlagui" network = "github" style={{ height: 36, width: 36 }} />
                            <SocialIcon url = "https://www.instagram.com/jmpaunlagui/" network = "instagram" style={{ height: 36, width: 36 }} />
                            <SocialIcon url = "https://www.linkedin.com/in/john-moises-paunlagui-2b6b31186/"network = "linkedin" style={{ height: 36, width: 36 }} />
                            <SocialIcon url = "https://twitter.com/itsJm51" network = "twitter" style={{ height: 36, width: 36 }} />
                        </div>
                    </div>
                </div>
            </div>
      </main>
    )
}

export default Home