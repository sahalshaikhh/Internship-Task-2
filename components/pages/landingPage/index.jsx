import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

export default function LandingPage() {
    return (
        <div className='ec-flex ec-text-gray-100 ec-flex-col ec-w-full ec-justify-center ec-items-center ec-gap-14'>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </div>
    );
}
