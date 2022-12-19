import { Image } from '@mantine/core';

export default function Logo() {
    return (
        <>
            <Image
                className=' ec-hidden sm:ec-block'
                alt='EC_Logo'
                width={160}
                height={45}
                fit='contain'
                src='/assets/Logo_lg.svg'
            />
            <Image
                className=' ec-block sm:ec-hidden'
                alt='EC_Logo'
                width={45}
                height={45}
                fit='contain'
                src='/assets/Logo_sm.svg'
            />
        </>
    );
}
