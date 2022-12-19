import { Title } from '@mantine/core';

export default function Section2() {
    const CompanyList = [
        {
            Name: 'DRDO',
            ImageUrl: '/assets/LandingPage/Section2_1/Image1.svg',
        },
        {
            Name: 'AMAZON',
            ImageUrl: '/assets/LandingPage/Section2_1/Image2.svg',
        },
        {
            Name: 'MICROSOFT',
            ImageUrl: '/assets/LandingPage/Section2_1/Image3.svg',
        },
        {
            Name: 'ISRO',
            ImageUrl: '/assets/LandingPage/Section2_1/Image4.svg',
        },
        {
            Name: 'TESLA',
            ImageUrl: '/assets/LandingPage/Section2_1/Image5.svg',
        },
        {
            Name: 'SPACEX',
            ImageUrl: '/assets/LandingPage/Section2_1/Image6.svg',
        },
    ];

    return (
        <div className='  ec-w-full ec-items-center ec-justify-center ec-flex ec-p-5 lg:!ec-p-10 ec-flex-col ec-gap-7'>
            <div className=' ec-flex ec-flex-col ec-items-center ec-justify-center ec-gap-2'>
                <Title className=' sm:!ec-text-3xl lg:!ec-text-5xl ec-text-xl ec-font-bold ec-text-center lg:!ec-text-left '>
                    We have{' '}
                    <span className='ec-text-transparent ec-bg-clip-text ec-bg-gradient-to-r ec-from-[#0065CF] ec-to-[#1FAE8C]'>
                        People Across
                    </span>
                </Title>
            </div>
            <div className=' ec-w-full ec-flex ec-items-center ec-flex-wrap ec-gap-10 ec-justify-evenly ec-overflow-hidden'>
                {CompanyList.map((item, index) => (
                    <img
                        key={index}
                        alt={item.Name}
                        className=' ec-w-20 ec-h-20 md:!ec-w-32 md:!ec-h-32'
                        src={item.ImageUrl}
                    />
                ))}
            </div>
        </div>
    );
}
