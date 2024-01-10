import '../globals.css'
import Sidebar from "@/app/(components)/dashpage/sidebar"


export const metadata = {
title: 'Dashboard - CarsAI',
description: 'Upload and Analyze your audio files with AI',
icons: {
    icon: '/images/dashicon.ico'
}
}

export default function Dashlayout({ children }) {
return (
    <>
    <div className='fixed bottom-0'>
        <Sidebar />
    </div>
    <div className='flex h-screen ml-64'>
        {children}
    </div>
    </>
)
}