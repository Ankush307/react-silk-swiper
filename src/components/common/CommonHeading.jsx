import React from 'react'

const CommonHeading = ({SectionHeading , SectionBlackHeading, SectionWhiteHeading}) => {
    return (
        <div>
            <p className='text-[72px] font-bold text-[red] text-center my-5'>{SectionHeading} <span className='text-black'>{SectionBlackHeading}</span> <span className='text-white'>{SectionWhiteHeading}</span></p>
        </div>
    )
}

export default CommonHeading