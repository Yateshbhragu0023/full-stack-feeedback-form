import React, { useContext, useEffect } from 'react'
import { FaTrash } from "react-icons/fa6";
import { MainContext } from '../Context';
import axios from 'axios';
import Swal from 'sweetalert2'


export default function ViewFeeedback() {

    const { fetchAllFBdata, FBdata, toastNotify, ApiUrl, user_url, } = useContext(MainContext)

    const handleDelete = (id) => {
console.log(FBdata)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(ApiUrl + user_url + `/delete/${id}`).then(
                    (succes) => {
                        toastNotify(succes.data.msg, succes.data.status)
                    }
                ).catch(
                    (error) => {
                        console.log(error)
                        toastNotify(error.data.msg, error.data.status)

                    }
                )
            }
        })
    }


    useEffect(
        () => {
            fetchAllFBdata()
        }, [FBdata]
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Feedbacks Received
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {FBdata.map((fb) => (
                    <div
                        key={fb._id}
                        className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 border border-gray-200"
                    >
                        {/* Name & Email */}
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{fb.name}</h3>
                                <p className="text-sm text-gray-500">{fb.email}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(fb._id)}
                                className="text-red-500 hover:text-red-700 transition"
                            >
                                <FaTrash size={20} />
                            </button>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 mb-3">{fb.discription
                        }</p>

                        {/* Rating */}
                        <div className="flex items-center">
                            {Array.from({ length: fb.review }).map((_, i) => (
                                <span key={i} className="text-yellow-400 text-lg">⭐</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
