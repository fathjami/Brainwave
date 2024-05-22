import brackets from '../assets/svg/Brackets'

function Tagline({ className, children }) {
    return (
        <div className={`flex items-center tagline ${className || ''}`}>
            {brackets('left')}
            <div className="mx-3 text-n-3">{children}</div>
            {brackets('right')}
        </div>
    )
}

export default Tagline
