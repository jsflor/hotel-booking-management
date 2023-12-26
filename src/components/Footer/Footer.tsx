import Link from 'next/link';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

export function Footer() {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href={'/'} className="font-black text-tertiary-dark">
          Hotelz
        </Link>

        <h4 className="font-semibold text-[40px] py-6">Contact</h4>
        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>123 Road</p>
            <div className="flex items-center py-4">
              <BsFillSendFill className="" />
              <p className="ml-2">codewithseb</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound className="" />
              <p className="ml-2">000-000-000</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail className="" />
              <p className="ml-2">codewithseb</p>
            </div>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Get in touch</p>
            <p className="pb-4">Our privacy commitment</p>
            <p className="pb-4">Terms of service</p>
            <p className="">Customer Assistance</p>
          </div>

          <div className="flex-1 dm:text-right">
            <p className="pb-4">Dining Experience</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p className="">Events</p>
          </div>
        </div>
      </div>

      <div className="bg-tertiary-light h-10 md:h-[7px] mt-16 w-full bottom-0 left-0"></div>
    </footer>
  );
}

// TODO: https://www.youtube.com/watch?v=kiCH27qsNL8 34:27
