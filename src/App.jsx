import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
    return (
        <>
            <ButtonGradient />
            <div className="p-[4.75rem] lg:p-[5.25rem] overflow-hidden ">
                <Header />
                <Hero />
            </div>
        </>
    )
}

export default App
