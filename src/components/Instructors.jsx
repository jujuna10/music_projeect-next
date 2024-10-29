import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip';
import i1 from '../assets/i1.avif'
import i2 from '../assets/i2.avif'
import i3 from '../assets/i3.avif'
import i4 from '../assets/i4.avif'


const instructors = [
    {
      id: 1,
      name: 'Elena Briggs',
      designation: 'Vocal Coach',
      image:i1
    },
    {
      id: 2,
      name: 'Marcus Reid',
      designation: 'Guitar Instructor',
      image:i2
    },
    {
      id: 3,
      name: 'Julia Zhang',
      designation: 'Piano Teacher',
      image:i3
    },
    {
      id: 4,
      name: 'Andre Gomez',
      designation: 'Drumming Expert',
      image:i4    
    },
  ];

function Instructors() {
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
        <WavyBackground>
            <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet Our Instructors</h2>
            <p className='text-base md:text-lg text-white text-center mb-4'>Discover the talanted professionals who will guide your musical journey</p>
            <div className='flex flex-row items-center justify-center mb-10 w-full'>
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors