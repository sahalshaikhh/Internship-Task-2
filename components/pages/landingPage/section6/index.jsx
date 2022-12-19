import { Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';

const list = [
    {
        title: 'Shubham',
        description:
            'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.',
        image: '/assets/LandingPage/Section6_1/Image1.jpeg',
        role: 'Null',
    },
    {
        title: 'Shubham',
        description:
            'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.',
        image: '/assets/LandingPage/Section6_1/Image2.jpeg',
        role: 'Null',
    },
    {
        title: 'Kalyan',
        description:
            'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.',
        image: '/assets/LandingPage/Section6_1/Image3.jpeg',
        role: 'Null',
    },
    {
        title: 'Charvi',
        description:
            'It’s great to see this type of product coming in the market. As an engineers I can very much relate to their product vision and problem that they are trying to solve. It’s great place to engage with like-minded people and stay tuned with your tech domain.',
        image: '/assets/LandingPage/Section6_1/Image7.jpeg',
        role: 'Community Member',
    },
    {
        title: 'Bhavika',
        description:
            'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.',
        image: '/assets/LandingPage/Section6_1/Image4.jpeg',
        role: 'Null',
    },
    {
        title: 'Bhavika',
        description:
            'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.',
        image: '/assets/LandingPage/Section6_1/Image5.jpeg',
        role: 'Null',
    },
    {
        title: 'Bhavika',
        description:
            'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.',
        image: '/assets/LandingPage/Section6_1/Image6.jpeg',
        role: 'Null',
    },
];

export default function Section6() {
    const [activeIndex, setActiveIndex] = useState(2);

    const matches = useMediaQuery('(min-width: 900px)');
    const ArrowLocation = `ec-left-[${17 * (activeIndex + 1)}%]`;

    return (
        <div className='  ec-w-full ec-items-center ec-justify-center ec-flex ec-p-5 lg:!ec-p-10 ec-flex-col ec-gap-7'>
            <div className=' ec-flex ec-flex-col ec-items-center ec-justify-center ec-gap-2 md:!ec-gap-5'>
                <Title className=' sm:!ec-text-3xl lg:!ec-text-5xl ec-text-xl ec-font-bold ec-text-center lg:!ec-text-left '>
                    <span
                        span
                        className='ec-text-transparent ec-bg-clip-text ec-bg-gradient-to-r ec-from-[#0065CF] ec-to-[#1FAE8C]'
                    >
                        Why
                    </span>{' '}
                    Our Members{' '}
                    <span
                        span
                        className='ec-text-transparent ec-bg-clip-text ec-bg-gradient-to-r ec-from-[#0065CF] ec-to-[#1FAE8C]'
                    >
                        Love Cradle?
                    </span>
                </Title>
                <Text className=' ec-font-medium md:ec-text-2xl ec-text-center'>
                    Feedback from these happy customers helps us in reaching the
                    heights
                </Text>
            </div>
            <div className='  md:ec-max-w-[70%] ec-relative ec-w-full ec-bg-[#151E31] ec-rounded-xl md:ec-px-10 md:ec-py-5 ec-flex ec-items-start ec-justify-center'>
                <div className=' ec-h-full ec-px-2 ec-flex ec-items-start ec-py-10'>
                    <svg
                        width='34'
                        height='30'
                        viewBox='0 0 34 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M33.9707 1.23566L33.1227 7.27766C31.4267 7.13633 30.0487 7.41899 28.9887 8.12566C27.9287 8.797 27.1867 9.78633 26.7627 11.0937C26.374 12.3657 26.3033 13.8497 26.5507 15.5457H33.9707V29.9617H19.5547V15.5457C19.5547 10.4577 20.7383 6.60633 23.1057 3.99166C25.473 1.34166 29.0947 0.422994 33.9707 1.23566ZM14.7847 1.23566L13.9367 7.27766C12.2407 7.13633 10.8627 7.41899 9.80267 8.12566C8.74267 8.797 8.00067 9.78633 7.57667 11.0937C7.18801 12.3657 7.11734 13.8497 7.36467 15.5457H14.7847V29.9617H0.368672V15.5457C0.368672 10.4577 1.55234 6.60633 3.91967 3.99166C6.28701 1.34166 9.90867 0.422994 14.7847 1.23566Z'
                            fill='#63F6FF'
                        />
                    </svg>
                </div>
                <div className=' ec-w-full md:ec-text-xl ec-h-full ec-px-2 ec-py-10'>
                    {list[activeIndex].description}
                </div>
                <div
                    className={`ec-w-4 ec-h-4  !ec-transition-all !ec-duration-500 ec-rotate-45 ec-bg-[#151E31] ec-absolute -ec-bottom-2 !ec-left-[${
                        17 * (activeIndex + 1)
                    }%] `}
                />
            </div>
            <div className=' ec-min-w-[70%] ec-flex ec-items-center ec-justify-evenly'>
                {list
                    .filter((item, index) => {
                        if (!matches) {
                            return index > 2 && index < list.length - 3;
                        } else {
                            return item;
                        }
                    })
                    .map((item, index) => (
                        <div
                            key={index}
                            className='ec-flex ec-items-center ec-cursor-pointer ec-justify-center ec-gap-4 ec-p-2'
                        >
                            <div
                            // onClick={() => {
                            //     setActiveIndex(index);
                            // }}
                            >
                                <img
                                    src={item?.image}
                                    className=' ec-rounded-full ec-w-14 ec-h-14'
                                />
                            </div>
                            {item?.role === 'Community Member' && (
                                <div className=' ec-flex ec-flex-col ec-items-start ec-justify-center'>
                                    <text className=' ec-text-2xl ec-font-medium'>
                                        {item?.title}
                                    </text>
                                    <text className=' ec-text-gray-500'>
                                        {item?.role}
                                    </text>
                                </div>
                            )}
                            {/* {index === activeIndex && (
                                <div className=' ec-flex ec-flex-col ec-items-start ec-justify-center'>
                                    <text className=' ec-text-2xl ec-font-medium'>
                                        {item?.title}
                                    </text>
                                    <text className=' ec-text-gray-500'>
                                        {item?.role}
                                    </text>
                                </div>
                            )} */}
                        </div>
                    ))}
            </div>
        </div>
    );
}
