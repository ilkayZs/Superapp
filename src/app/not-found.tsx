import Link from "next/link";
import { Frown } from 'lucide-react';

export default function NotFound() {
    return(
        <div className="flex h-screen text-center w-full flex-col items-center justify-center bg-gradient-to-b from-black to-green-900 px-4">
        <div className="text-[#7ed957] m-2">
        <Frown size={64}/>
        </div>
        <h1 className="text-white text-4xl font-semibold">404</h1>
        <h1 className="text-white text-4xl font-semibold">Oops, the page you&apos;re looking for doesn&apos;t exist.</h1>
        <Link href="/" className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-[#7ed957] hover:bg-[#6bc746] px-6 font-medium text-silver-50 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-2">Back to Home</Link>
        </div>
    )
}