import React from 'react';

const Stores = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Download Our App</h2>
                <p className="text-gray-600 mb-8">Get the latest legal news and updates on the go.</p>
                <div className="flex justify-center gap-4">
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                        App Store
                    </button>
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                        Google Play
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Stores;
