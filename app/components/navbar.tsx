import Link from 'next/link';
import React from 'react'
import { PiFlowerLotusDuotone } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

export default function Navbar() {
    return (
        <div className='flex justify-between py-5 px-28'>
            <div className='flex items-center text-gray-700 gap-3'>
                <PiFlowerLotusDuotone size={40} />
                AyurVatika
            </div>
            <div className='space-x-12 flex items-center'>
                <Link href={"/"}>Start</Link>
                <Link href={"/"}>About Us</Link>
                <Link href={"/"}>Plants</Link>
                <Link href={"/"}>Learn</Link>
                <button className='bg-[#318162] p-2 rounded-full text-white'><CiUser className='font-bold' size={20} /></button>
            </div>
        </div>
    )
}
