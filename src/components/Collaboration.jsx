import { check } from '../assets'
import { collabContent } from '../constants'
import Button from './Button'
import Section from './Section'

function Collaboration() {
    return (
        <Section crosses>
            <div className="container lg:flex">
                <div className="max-w-[25rem]">
                    <h2 className="h2 mb-4 md:mb-8">
                        AI Chat for seamless collaboration
                    </h2>
                    <ul className="max-w-[22rem] mb-10 md:mb-14">
                        {collabContent.map((item) => (
                            <li className="mb-2 py-3" key={item.id}>
                                <div className="flex items-center">
                                    <img
                                        src={check}
                                        width={24}
                                        height={24}
                                        alt="check "
                                    />
                                    <h6 className="body-2 ml-5">
                                        {item.title}
                                    </h6>
                                </div>
                                {item.text && (
                                    <p className="body-2 mt-3 text-n-4">
                                        {item.text}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Button>Try it now</Button>
                </div>
            </div>
        </Section>
    )
}

export default Collaboration
