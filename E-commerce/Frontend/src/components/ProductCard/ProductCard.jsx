import React from 'react';

const ProductCard = ({
    title,
    price, 
    description,
    image
}) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center pb-5 m-2">
            <a href="#">
                <img 
                    className="p-8 rounded-t-lg w-full h-[300px] object-contain" 
                    src={image} 
                    alt="Product" 
                />
            </a>
            <div className="px-5 w-full">
                <a href="#">
                    <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center mt-2.5">
                        {title}
                    </h2>
                </a>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center mt-2.5 mb-5">
                    {description.length > 50 ? description.slice(0, 50) + '...' : description}
                </p>
                <div className="flex items-center justify-between w-full">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">${price}</p>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
