import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Services from './components/Services'
import Pricing from './components/Pricing'

const App = () => {
    return (
        <>
            <ButtonGradient />
            <div className="p-[4.75rem] lg:p-[5.25rem] overflow-hidden ">
                <Header />
                <Hero />
                <Benefits />
                <Collaboration />
                <Services />
                <Pricing />
            </div>
        </>
    )
}

export default App
