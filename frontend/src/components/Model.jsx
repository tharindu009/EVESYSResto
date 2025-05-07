import React from 'react'

const Model = ({ title, onClose, isOpen, children }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-sky-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className='bg-sky-800 shadow-lg w-full max-w-lg mx-4 rounded-lg p-4'>
                <div className='flex items-center justify-between px-6 py-4 border-b border-gray-700'>
                    <h2 className='text-xl text-white font-smibold'>{title}</h2>
                    <button className='text-sky-300 text-2xl hover:text-sky-500' onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Model