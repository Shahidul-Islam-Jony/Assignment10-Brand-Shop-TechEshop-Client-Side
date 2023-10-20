import { FaCarBattery, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';
import {GrMonitor } from 'react-icons/gr';
import {BsCamera, BsPrinter } from 'react-icons/bs';
import {ImHeadphones } from 'react-icons/im';
import {IoWatchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const FeaturedCategory = () => {
    return (
        <div className="w-11/12 mx-auto mt-20 bg-base-300 py-10 rounded-md">
            <div className="mb-10">
                <h2 className="text-4xl font-bold text-center">Featured Category</h2>
                <p className="text-xl text-center font-medium">Get Your Desired Product from Featured Category!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-4/5 gap-10 mx-auto'>
                <Link>
                    <div className='h-36 w-56 flex flex-col justify-center items-center bg-base-100 rounded-lg'>
                        <p className='text-7xl'><FaMobileAlt></FaMobileAlt></p>
                        <p className='text-xl font-medium'>Phone</p>
                    </div>
                </Link>
                
                <Link>
                    <div className='h-36 w-56  flex flex-col justify-center items-center bg-base-100 rounded-lg'>
                        <p className='text-7xl'><FaLaptopCode></FaLaptopCode></p>
                        <p className='text-xl font-medium'>Laptop</p>
                    </div>
                </Link>
                <Link>
                    <div className='h-36 w-56  flex flex-col justify-center items-center bg-base-100 rounded-lg'>
                        <p className='text-7xl'><FaCarBattery></FaCarBattery></p>
                        <p className='text-xl font-medium'>Laptop Battery</p>
                    </div>
                </Link>

                <Link>
                    <div className='h-36 w-56  flex flex-col justify-center items-center bg-base-100 rounded-lg'>
                        <p className='text-7xl'><GrMonitor></GrMonitor></p>
                        <p className='text-xl font-medium'>TV/Monitor</p>
                    </div>
                </Link>
                <Link>
                    <div className='h-36 w-56  flex flex-col justify-center items-center bg-base-100 rounded-lg'>
                        <p className='text-7xl'><BsPrinter></BsPrinter></p>
                        <p className='text-xl font-medium'>Printer</p>
                    </div>
                </Link>
                <Link>
                    <div className='h-36 w-56  flex flex-col justify-center items-center bg-base-100 rounded-lg'>
                        <p className='text-7xl'><ImHeadphones></ImHeadphones></p>
                        <p className='text-xl font-medium'>Headphone</p>
                    </div>
                </Link>
                <Link>
                    <div className='h-36 w-56  flex flex-col justify-center items-center bg-base-100 rounded-lg'>
                        <p className='text-7xl'><IoWatchOutline></IoWatchOutline></p>
                        <p className='text-xl font-medium'>Smart watch</p>
                    </div>
                </Link>
                <Link>
                    <div className='h-36 w-56  flex flex-col justify-center items-center bg-base-100 rounded-lg'>
                        <p className='text-7xl'><BsCamera></BsCamera></p>
                        <p className='text-xl font-medium'>Camera</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCategory;