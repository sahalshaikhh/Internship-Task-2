import { SimpleGrid, Text, Title } from '@mantine/core';

export default function Section4() {
    const resources = [
        {
            Name: 'Podcasts',
            ImageUrl: '/assets/LandingPage/Section4_1/Podcast.svg',
        },
        {
            Name: 'Networking',
            ImageUrl: '/assets/LandingPage/Section4_1/Networking.svg',
        },
        {
            Name: 'Expert Talks',
            ImageUrl: '/assets/LandingPage/Section4_1/ExpertTalks.svg',
        },
        {
            Name: 'Technical Workshops',
            ImageUrl: '/assets/LandingPage/Section4_1/TechnicalWorkshop.svg',
        },
        {
            Name: 'Career Guidance',
            ImageUrl: '/assets/LandingPage/Section4_1/CareerGuidance.svg',
        },
        {
            Name: 'Mentor Based Training',
            ImageUrl: '/assets/LandingPage/Section4_1/MentorBasedCompany.svg',
        },
        {
            Name: 'Industry News',
            ImageUrl: '/assets/LandingPage/Section4_1/IndustryNews.svg',
        },
        {
            Name: 'LiveProjects',
            ImageUrl: '/assets/LandingPage/Section4_1/LiveProjects.svg',
        },
    ];

    return (
        <div className='  ec-w-full ec-items-center ec-justify-center ec-flex ec-p-5 lg:!ec-p-10 ec-flex-col ec-gap-7'>
            <div className=' ec-flex ec-flex-col ec-items-center ec-justify-center ec-gap-2 md:!ec-gap-5'>
                <Title className=' sm:!ec-text-3xl lg:!ec-text-5xl ec-text-xl ec-font-bold ec-text-center lg:!ec-text-left '>
                    Resources for{' '}
                    <span
                        span
                        className='ec-text-transparent ec-bg-clip-text ec-bg-gradient-to-r ec-from-[#0065CF] ec-to-[#1FAE8C]'
                    >
                        Innovators
                    </span>
                </Title>
                <Text className=' ec-font-medium md:ec-text-2xl ec-text-center'>
                    Some of our amazing resources that will help you build a
                    better mindset
                </Text>
            </div>
            <SimpleGrid
                breakpoints={[
                    { maxWidth: 980, cols: 3, spacing: 'md' },
                    { maxWidth: 755, cols: 2, spacing: 'sm' },
                    { maxWidth: 600, cols: 2, spacing: 'sm' },
                ]}
                cols={4}
                className='ec-min-w-[80%]'
            >
                {resources.map((item, i) => (
                    <Section4Card key={i} {...item} />
                ))}
            </SimpleGrid>
        </div>
    );
}

const Section4Card = (props) => {
    return (
        <div
            key={props?.key}
            className='ec-w-full ec-flex ec-flex-col ec-items-center ec-justify-center ec-gap-5 ec-p-5'
        >
            <div className='ec-w-2/3 ec-flex ec-items-center ec-justify-center ec-overflow-hidden ec-bg-zinc-700/50 ec-rounded-full'>
                <img
                    src={props?.ImageUrl}
                    alt={props?.Name}
                    className='ec-aspect-square ec-w-12 ec-h-12 md:ec-w-24 md:ec-h-24'
                />
            </div>
            <div className='ec-w-full ec-flex ec-items-center ec-justify-center ec-flex-col ec-gap-2'>
                <Text className=' ec-font-medium md:ec-text-xl ec-text-center'>
                    {props?.Name}
                </Text>
            </div>
        </div>
    );
};
