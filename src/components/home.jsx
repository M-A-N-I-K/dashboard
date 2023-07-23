import InfoBox from './utils/infoBox'
import Contributions from './utils/contributions'
import RetirementStrategy from './utils/retirementStrategy'

const home = () => {
    return (
        <div className='flex flex-col w-[100vw] sm:flex-row'>
            <InfoBox />
            <Contributions />
            <RetirementStrategy />
        </div>
    )
}

export default home
