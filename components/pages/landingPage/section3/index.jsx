import { Tabs, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';

export default function Section3() {
    const matches = useMediaQuery('(min-width: 900px)');
    const [orientation, setOrientation] = useState('horizontal');

    useEffect(() => {
        if (matches) {
            setOrientation('horizontal');
        } else {
            setOrientation('vertical');
        }
    }, [matches]);

    const TabsList = [
        {
            Title: 'ORGANIZATIONS',
            ImageUrl: '/assets/LandingPage/Section3_1/Image1.svg',
            description:
                'The combination of diverse ideas allows organizations to collaborate with communities, particularly when working on a project or assignments. It assists students in developing a more effective learning style.',
        },
        {
            Title: 'INDUSTRIES',
            ImageUrl: '/assets/LandingPage/Section3_1/Image2.svg',
            description:
                'Industries can form a communities around specific topics of interest in order to provide opportunities and guidance to improve their experience and engagement.',
        },
        {
            Title: 'PROFESSIONALS',
            ImageUrl: '/assets/LandingPage/Section3_1/Image3.svg',
            description:
                'Professionals can easily share best practices and brainstorm new ways to improve learning and motivate students with EC. It facilitates easy networking with other working professionals.',
        },
        {
            Title: 'STUDENTS',
            ImageUrl: '/assets/LandingPage/Section3_1/Image4.svg',
            description:
                'Students can participate in decision-making at EC, ensuring that your needs are met and that your experience is the best it can be. We give you the chance to make a difference while learning new skills.',
        },
    ];

    return (
        <div className='  ec-w-full ec-items-center ec-justify-center ec-flex ec-p-5 lg:!ec-p-10 ec-flex-col ec-gap-7'>
            <div className=' ec-flex ec-flex-col ec-items-center ec-justify-center ec-gap-2 md:!ec-gap-5'>
                <Title className=' sm:!ec-text-3xl lg:!ec-text-5xl ec-text-xl ec-font-bold ec-text-center lg:!ec-text-left '>
                    Why{' '}
                    <span
                        span
                        className='ec-text-transparent ec-bg-clip-text ec-bg-gradient-to-r ec-from-[#0065CF] ec-to-[#1FAE8C]'
                    >
                        Engineer&apos;s Cradle
                    </span>
                </Title>
                <Text className=' ec-font-medium md:ec-text-2xl ec-text-center'>
                    Engineer&apos;s cradle is your one stop solution for all
                    your exploratory needs.
                </Text>
            </div>
            <Tabs
                orientation={orientation}
                variant='unstyled'
                styles={(theme) => ({
                    tabControl: {
                        backgroundColor: '#0065CF10',
                        color:
                            theme.colorScheme === 'dark'
                                ? theme.colors.dark[0]
                                : theme.colors.gray[9],
                        fontWeight: 'bold',
                        color: theme.colors.gray[6],
                        border: `3px solid transparent`,
                        borderRadius: '7px',
                        padding: '20px',
                        fontSize: theme.fontSizes.lg,
                        margin: 10,
                    },
                    tabActive: {
                        backgroundColor: '#0065CF30',
                        borderColor: '#47F2C9',
                        color: theme.white,
                        fontWeight: 'bolder',
                    },
                })}
                className=' ec-w-full ec-max-w-[90%] ec-flex ec-flex-col ec-gap-5'
                grow
            >
                <Tabs.List>
                    {TabsList.map((tab, index) => (
                        <Tabs.Tab key={tab?.Title} value={tab?.Title}>
                            {tab?.Title}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>
                {TabsList.map((tab, index) => (
                    <Tabs.Panel value={tab?.Title} key={tab?.description}>
                        <Section3Card
                            image={tab?.ImageUrl}
                            description={tab?.description}
                        />
                    </Tabs.Panel>
                ))}
            </Tabs>
        </div>
    );
}

const Section3Card = ({ description, image }) => {
    return (
        <div className='ec-w-full ec-flex ec-flex-col lg:ec-flex-row ec-items-center ec-justify-center ec-gap-5 ec-p-5'>
            <div className='ec-w-full ec-flex ec-flex-col ec-gap-2'>
                <Text className=' ec-text-lg md:ec-text-[22px]'>
                    {description}
                </Text>
            </div>
            <div className=' ec-w-full md:ec-w-[90%] ec-flex ec-items-center ec-justify-center ec-overflow-hidden'>
                <img
                    src={image}
                    alt='image'
                    className='ec-w-full ec-h-[300px] ec-aspect-square'
                />
            </div>
        </div>
    );
};
