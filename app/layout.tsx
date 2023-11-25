import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '../components/Sidebar'
import { ClerkProvider, auth } from '@clerk/nextjs'
import useMediaQuery from './hooks/useMediaQuery'


export const metadata: Metadata = {
  title: 'Task Manager',
  description: 'Task Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className=" min-w-[350px] p-4 lg:p-14 flex ">
          {userId && <Sidebar />}
          <div className=' w-full bg-[#212022] rounded-3xl overflow-auto  no-scrollbar border border-[#436BF4]/[0.5] lg:ml-[50px] p-[30px]'>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
