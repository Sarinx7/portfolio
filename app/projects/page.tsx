import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <main>
        <nav className="flex items-center justify-between w-full py-4 bg-gray-100 px-4 rounded-lg">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                    <Image src="/avatar.png" alt="Avatar" width={50} height={50} />
                </div>
                <h1 className="text-2xl font-bold px-4 text-gray-800 hover:text-gray-500 transition-colors cursor-pointer">Sarin M S</h1>
            </div>
            <div className="flex items-center gap-6">
                <Link href="/" className="hover:text-gray-600 transition-colors px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">Home</Link>
                <Link href="/about" className="hover:text-gray-600 transition-colors px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">About</Link>
                <Link href="/contact" className="hover:text-gray-600 transition-colors px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">Contact</Link>
                <Link href="/projects" className="hover:text-gray-600 transition-colors px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">Projects</Link>
            </div>
        </nav>
    </main>
  )
}

export default Projects
