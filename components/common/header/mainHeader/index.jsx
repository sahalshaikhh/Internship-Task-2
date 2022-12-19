import Logo from '@components/common/Logo';
import {
    Burger,
    Button,
    Group,
    Header,
    MediaQuery,
    Title,
} from '@mantine/core';

import { useRouter } from 'next/router';

export default function MainHeader({ handleBurgerClick, opened, menu = true }) {
    const router = useRouter();
    const isHome = router.pathname === '/';

    return (
        <Header
            height={60}
            className=' ec-w-full ec-p-3 ec-bg-transparent ec-border-none'
        >
            <div className=' ec-flex ec-items-center ec-h-full xl:ec-px-10 ec-justify-between'>
                <Group>
                    {menu && (
                        <MediaQuery largerThan='sm' className=' sm:ec-hidden'>
                            <Burger
                                size='md'
                                opened={opened}
                                onClick={handleBurgerClick}
                            />
                        </MediaQuery>
                    )}
                    <Logo />
                </Group>
                <Group>
                    {isHome && (
                        <Title
                            onClick={() => {
                                router.push('https://discord.gg/TWBFYSDAMs');
                            }}
                            className=' ec-cursor-pointer'
                            order={5}
                        >
                            Community
                        </Title>
                    )}
                    {isHome && (
                        <Title
                            onClick={() => {
                                router.push(
                                    'https://program.engineerscradle.com/',
                                );
                            }}
                            className=' ec-cursor-pointer'
                            order={5}
                        >
                            Programs @ EC
                        </Title>
                    )}
                    {isHome && (
                        <Title
                            onClick={() => {
                                router.push(
                                    'https://beta.engineerscradle.com/contact-us/',
                                );
                            }}
                            className=' ec-cursor-pointer'
                            order={5}
                        >
                            Contact Us
                        </Title>
                    )}
                    <div className=' ec-flex ec-flex-row ec-gap-2 ec-items-center'>
                        <Button
                            className=' ec-rounded-full ec-font-medium md:ec-text-xl'
                            onClick={() =>
                                router.push(`https://beta.engineerscradle.com/`)
                            }
                        >
                            Join Beta
                        </Button>
                        {/* <Button onClick={() => router.push(`/auth/sign-up`)}>
                            Register
                        </Button> */}
                    </div>
                </Group>
            </div>
        </Header>
    );
}
