"use client"
import { Card, Title } from "@tremor/react";
import Link from "next/link";

export default function DashStat() {
    return (
        <>
        <Card className="rounded-xl">
            <Title className=" mb-6">Status (Recent 10)</Title>
            <div className="overflow-x-auto max-h-80">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Added Time</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td><Link className=" underline" href="/dashboard/audio/1">Recording 1</Link></td>
        <td>Quality Control Specialist</td>
        <td className=" text-red-500">Failed</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td><Link className=" underline" href="/dashboard/audio/2">Recording 2</Link></td>
        <td>Desktop Support Technician</td>
        <td className=" text-red-500">Failed</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td><Link className=" underline" href="/dashboard/audio/3">Recording 3</Link></td>
        <td>Tax Accountant</td>
        <td className=" text-green-500">Success</td>
      </tr>
      <tr>
        <th>4</th>
        <td><Link className=" underline" href="/dashboard/audio/4">Recording 4</Link></td>
        <td>Tax Accountant</td>
        <td className=" text-green-500">Success</td>
      </tr>
      <tr>
        <th>5</th>
        <td><Link className=" underline" href="/dashboard/audio/5">Recording 5</Link></td>
        <td>Tax Accountant</td>
        <td className=" text-green-500">Success</td>
      </tr>
      <tr>
        <th>6</th>
        <td><Link className=" underline" href="/dashboard/audio/6">Recording 6</Link></td>
        <td>Tax Accountant</td>
        <td className=" text-green-500">Success</td>
      </tr>
      
      <tr>
        <th>7</th>
        <td><Link className=" underline" href="/dashboard/audio/7">Recording 7</Link></td>
        <td>Tax Accountant</td>
        <td className=" text-green-500">Success</td>
      </tr>
      <tr>
        <th>8</th>
        <td><Link className=" underline" href="/dashboard/audio/8">Recording 8</Link></td>
        <td>Tax Accountant</td>
        <td className=" text-green-500">Success</td>
      </tr>
      <tr>
        <th>9</th>
        <td><Link className=" underline" href="/dashboard/audio/9">Recording 9</Link></td>
        <td>Tax Accountant</td>
        <td className=" text-green-500">Success</td>
      </tr>
      <tr>
        <th>10</th>
        <td><Link className=" underline" href="/dashboard/audio/10">Recording 10</Link></td>
        <td>Tax Accountant</td>
        <td className=" text-green-500">Success</td>
      </tr>
    </tbody>
  </table>
</div>
        </Card>
        </>
    )
}