import React, { useContext } from 'react'
import { MainContext } from '../Context'
import axios from 'axios'

export default function AddFeeadback() {

    const { fetchAllFBdata, setFBdata, FBdata, toastNotify, ApiUrl, user_url, } = useContext(MainContext)


    const handleSubmit = (event) => {
        event.preventDefault()
        const FeedbackData = {
            "name": event.target.name.value,
            "email": event.target.email.value,
            "review": event.target.rating.value,
            "discription": event.target.description.value
        }

        axios.post(ApiUrl + user_url + '/register', FeedbackData).then(
            (succes) => {
                console.log(succes)
                toastNotify(succes.data.msg, succes.data.status)
                if(succes.data.status == 1){
                    event.target.reset()
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
                toastNotify(error.data.msg, error.data.status)
            }
        )

        console.log(FeedabckData)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl shadow-2xl transform transition-transform hover:-translate-y-2 hover:shadow-3xl p-8 w-full max-w-lg border border-gray-200">

                {/* Heading */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Share Your Feedback
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5 ">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    />
                    <select
                        name="rating"
                        className="w-full p-3  border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    >
                        <option value="">Select Rating</option>
                        <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
                        <option value="4">⭐⭐⭐⭐ - Good</option>
                        <option value="3">⭐⭐⭐ - Average</option>
                        <option value="2">⭐⭐ - Poor</option>
                        <option value="1">⭐ - Very Poor</option>
                    </select>
                    <textarea
                        name="description"
                        placeholder="Your Feedback..."
                        rows="4"
                        className="w-full p-3 border rounded-lg shadow-inner focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-br from-blue-500 to-black/80 text-white  font-semibold py-3 rounded-lg shadow-lg transform transition-transform  hover:-translate-y-1 hover:shadow-xl"
                    >
                        Submit Feedback
                    </button>
                </form>
            </div>
        </div>
    )
}
