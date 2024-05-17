import { benefits } from '../constants'
import Heading from './Heading'
import Section from './Section'
import Arrow from '../assets/svg/Arrow'
import { GradientLight } from './design/Benefits'
import clipPath from '../assets/svg/ClipPath'

function Benefits() {
    return (
        <Section id="features">
            <div className="container relative z-2 ">
                <Heading
                    className="md:max-w-md lg:max-w-xl"
                    title="Chat Smarter, Not Harder With Brainwave"
                />
                <div className="flex flex-wrap gap-10 mb-10">
                    {benefits.map((item) => (
                        <div
                            key={item.id}
                            className="block relative p-0.5 bg-no-repeat bg-[length_100%_100%]
                            md:max-w-[24rem]"
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`,
                            }}
                        >
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
                                <h5 className="h5 mb-5 ">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">
                                    {item.text}
                                </p>
                                <div className="flex items-center mt-auto">
                                    <img
                                        src={item.iconUrl}
                                        width={48}
                                        height={48}
                                        alt={item.title}
                                    />
                                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                                        Explore more
                                    </p>
                                    <Arrow />
                                </div>
                            </div>
                            {item.light && <GradientLight />}
                            <div
                                className="absolute inset-0.5 bg-n-8"
                                style={{ clickPath: 'url(#benefits}' }}
                            >
                                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>
                            <clipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Benefits
