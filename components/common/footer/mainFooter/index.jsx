import Logo from '@components/common/Logo';
import { Button, Divider, SimpleGrid, Text } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter, FiYoutube } from 'react-icons/fi';
import { RiLinkedinBoxLine } from 'react-icons/ri';

export default function MainFooter() {
    const router = useRouter();

    const FooterLinks = [
        // {
        //     title: 'Product',
        //     href: '',
        //     subData: [
        //         {
        //             title: 'For Students',
        //             href: 'https://beta.engineerscradle.com/register/',
        //         },
        //         {
        //             title: 'For Professionals',
        //             href: 'https://beta.engineerscradle.com/register/',
        //         },
        //         {
        //             title: 'For Organization',
        //             href: 'https://beta.engineerscradle.com/register/',
        //         },
        //     ],
        // },

        {
            title: 'About',
            href: '',
            subData: [
                {
                    title: 'Our Story',
                    href: 'https://beta.engineerscradle.com/about-us/',
                },
                {
                    title: 'Contact Us',
                    href: 'https://beta.engineerscradle.com/contact-us/',
                },
            ],
        },
        {
            title: 'Quick Links',
            href: '',
            subData: [
                {
                    title: 'Programs @ EC',
                    href: 'https://program.engineerscradle.com/',
                },
            ],
        },
        // {
        //     title: 'Help',
        //     href: '',
        //     subData: [
        //         {
        //             title: 'FAQs',
        //             href: 'https://beta.engineerscradle.com/register/',
        //         },
        //         {
        //             title: 'Blog',
        //             href: 'https://beta.engineerscradle.com/blogs/',
        //         },
        //         {
        //             title: 'Contact Us',
        //             href: 'https://beta.engineerscradle.com/contact-us/',
        //         },
        //     ],
        // },
        {
            title: 'Legal',
            href: '',
            subData: [
                {
                    title: 'Terms and Conditions',
                    href: 'https://beta.engineerscradle.com/terms-conditions/',
                },
                {
                    title: 'Privacy Policy',
                    href: 'https://beta.engineerscradle.com/privacy-policy-2/',
                },
                {
                    title: 'Refund Policy',
                    href: ' https://beta.engineerscradle.com/refund_returns/',
                },
            ],
        },
        {
            title: 'Contact',
            href: '',
            subData: [
                {
                    title: 'team@engineerscradle.com',
                    href: '',
                    isEmail: true,
                },
            ],
        },
    ];

    const SocialLinks = [
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/engineerscradle/',
            icon: AiOutlineInstagram,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/engineers-cradle',
            icon: RiLinkedinBoxLine,
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/EngineersCradle',
            icon: FiTwitter,
        },
        {
            name: 'Youtube',
            href: 'https://www.youtube.com/channel/UCjteYNTom9cpeCXdYDf1LXA',
            icon: FiYoutube,
        },
    ];

    return (
        <div className=' ec-w-full ec-flex-col ec-flex ec-items-center ec-justify-center ec-p-10 ec-gap-4'>
            <div className=' ec-w-full ec-flex ec-flex-col ec-justify-center ec-items-center lg:ec-flex-row lg:ec-items-center lg:!ec-justify-between'>
                <Logo />
                <div className=' ec-flex ec-gap-2 ec-flex-col ec-items-center lg:!ec-items-end'>
                    <Text className=''>
                        Ready to join the Engineer's community?
                    </Text>
                    <Button
                        onClick={() =>
                            router.push(
                                `https://beta.engineerscradle.com/register/`,
                            )
                        }
                    >
                        GetStarted
                    </Button>
                </div>
            </div>
            <div className=' ec-w-full ec-flex ec-items-center ec-justify-center'>
                <SimpleGrid
                    breakpoints={[{ maxWidth: 600, cols: 2, spacing: 'sm' }]}
                    cols={4}
                    className='ec-w-full'
                >
                    {FooterLinks?.map((r, i) => (
                        <div key={i} className=' ec-flex ec-flex-col ec-gap-2'>
                            <Text
                                className=' ec-font-bold'
                                component='a'
                                href={r?.href}
                            >
                                {r?.title}
                            </Text>
                            <div className=' ec-flex ec-flex-col ec-gap-1'>
                                {r?.subData?.map((r, i) => (
                                    <>
                                        <Text
                                            className={`ec-cursor-pointer ${
                                                r?.isEmail && 'ec-text-blue-500'
                                            } ec-w-min ec-whitespace-nowrap`}
                                            component='a'
                                            href={r?.href}
                                        >
                                            {r?.title}
                                        </Text>
                                    </>
                                ))}
                            </div>
                        </div>
                    ))}
                </SimpleGrid>
            </div>
            <Divider className=' ec-w-full' />
            <div className=' ec-w-full ec-flex ec-flex-col ec-gap-2 lg:ec-flex-row ec-text-center ec-items-center ec-justify-between'>
                <Text>
                    Copyright &copy; {new Date().getFullYear()} Engineer’s
                    cradle. All rights reserved
                </Text>
                <div className=' ec-flex ec-flex-row ec-gap-4 ec-items-end'>
                    {SocialLinks?.map((r, i) => (
                        <div key={i} className=' ec-cursor-pointer ec-flex ec-items-center ec-justify-center'>
                            <Link  href={r?.href}>
                                <r.icon size='25px' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
