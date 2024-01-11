"use client"
import Link from "next/link";

export default function status() {

    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    return (
        <>
        <div className="flex flex-col h-screen flex-1">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                    <h1 className="text-xl font-bold text-neutral-600 mb-5">All Records</h1>
                </div>
                <div className="overflow-x-auto">
<table className="table table-xs">
    <thead>
    <tr>
        <th></th> 
        <th>Audio Title</th> 
        <th>Note</th> 
        <th>Audio File Name</th> 
        <th>Audio Length</th> 
        <th>Added Date</th> 
        <th>Main Keyword</th>
    </tr>
    </thead> 
    <tbody>
        {nums.map((numm) => {
            let p = `/dashboard/audio/${nums.indexOf(numm)+1}`
            return (
                <tr key={nums.indexOf(numm)}>
        <th>{nums.indexOf(numm)+1}</th> 
        <td><Link className=" underline" href={p}>Cy Ganderton</Link></td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
</tr>
            )
        })}
    </tbody> 
</table>
</div>
            </div>
        </main>
    </div>
        </>
    )
}