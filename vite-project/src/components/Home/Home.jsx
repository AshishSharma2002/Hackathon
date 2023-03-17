import React from 'react'
import Aftcarosl from '../AfterCrousal/Aftcarosl'
import Aftnav from '../Afternav/Aftnav'
import Carousal from '../Carousal/Carousal'
import Middlesection from '../MiddleSection/Middlesection'

const Home = () => {
    return (
        <div>
            <div className='test-class'>
                <Aftnav />
                <Middlesection />
                <Carousal />
                <Aftcarosl />
            </div>
        </div>
    )
}

export default Home
