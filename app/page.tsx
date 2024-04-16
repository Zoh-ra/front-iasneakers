import Image from 'next/image'
import Link from 'next/link'
import ExpandingArrow from '@/components/expanding-arrow'
import Uploader from '@/components/uploader'
import { Toaster } from '@/components/toaster'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Toaster />
      <div className="flex flex-col gap-4">
      <Link href="/adminsccrap" 
        className="group rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
      >
        <p>ADMIN SCRAP</p>
        <ExpandingArrow />
      </Link>
      <Link href="/admintrainia"
        className="group rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
      >
        <p>ADMIN TRAIN IA</p>
        <ExpandingArrow />
      </Link>
    </div>

      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Sneakers Detector
      </h1>
      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
        <Uploader />
      </div>
      <p className="font-light text-gray-600 w-full max-w-lg text-center mt-6">
        <Link
          href="https://github.com/YoMed18/ia-sneakers"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Sneakers Detector.
        </Link>{' '}
        Created by{' '}
        <Link
          href="https://github.com/YoMed18/ia-sneakers"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Nicolas, Zohra, Mehdi, Sofiane 
        </Link>
        .
      </p>
      <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
        <Link
          href="https://github.com/YoMed18/ia-sneakers"
          className="flex items-center space-x-2"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          />
        </Link>
      </div>
    </main>
  )
}
