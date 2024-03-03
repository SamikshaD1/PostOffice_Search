import React from 'react'

function Box({ data }) {
    return (
        <div className="border-2 h-full border-black bg-gray-50 sm:text-2xl text-xs sm:p-4 lg:p-1">
            <table className="table-auto">
                <tbody>
                    <tr>
                        <td className="px-4 py-2">Name</td>
                        <td className="px-4 py-2">{data.Name}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Branch Type</td>
                        <td className="px-4 py-2">{data.BranchType}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Delivery Status</td>
                        <td className="px-4 py-2">{data.DeliveryStatus}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">District</td>
                        <td className="px-4 py-2">{data.District}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">State</td>
                        <td className="px-4 py-2">{data.State}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Box