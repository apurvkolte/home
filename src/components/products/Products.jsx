import React, { useState, useRef, useContext, useEffect } from 'react';
import { brands } from '@/data/brands';
import { colors } from '@/data/colors';
import { sizes } from '@/data/sizes';
import { categories } from '@/data/categories';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../common/Card';
import filtersContext, { FiltersProvider } from '../../contexts/filters/filtersContext';

const ProductsPage = () => {
    const {
        allProducts,
        setFilters,
        setSort,
        handleClearFilters,
        filters,
        sort,
    } = useContext(filtersContext);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const [gridCols, setGridCols] = useState(4);
    const [showFilters, setShowFilters] = useState(false);
    const filtersRef = useRef(null);


    // Calculate displayed products based on current page.
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(allProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    const sortOptions = [
        { key: '', label: 'Default' },
        { key: 'price-low', label: 'Price: Low to High' },
        { key: 'price-high', label: 'Price: High to Low' },
        { key: 'featured', label: 'Featured' },
    ];

    const getPaginationNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages, currentPage + Math.floor(maxVisiblePages / 2));

            if (endPage - startPage + 1 < maxVisiblePages) {
                if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
                    endPage = maxVisiblePages;
                } else {
                    startPage = totalPages - maxVisiblePages + 1;
                }
            }

            pageNumbers.push(1);

            if (startPage > 2) {
                pageNumbers.push('...');
            }

            for (let i = startPage; i <= endPage; i++) {
                if (i !== 1 && i !== totalPages) {
                    pageNumbers.push(i);
                }
            }

            if (endPage < totalPages - 1) {
                pageNumbers.push('...');
            }

            pageNumbers.push(totalPages);
        }
        return pageNumbers;
    };

    const paginationNumbers = getPaginationNumbers();

    return (
        <div className="mx-5 sm:mx-16 py-28">
            <div className="flex justify-between items-center mb-4 md:hidden">
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="px-3 py-2 rounded border bg-blue-500 text-white"
                >
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
                <select
                    onChange={(e) => setSort(e.target.value)}
                    className="px-3 py-2 rounded border bg-white"
                    value={sort}
                >
                    {sortOptions.map((option) => (
                        <option key={option.key} value={option.key}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <aside
                    ref={filtersRef}
                    className={`md:col-span-1 space-y-4 ${showFilters ? 'block' : 'hidden md:block'} overflow-y-auto max-h-[80vh]`}
                >
                    <h1 className="text-2xl text-zinc-700 font-semibold ">Filters</h1>

                    <div className="border rounded p-4">
                        <h2 className="text-lg text-zinc-700 font-semibold mb-2">Categories</h2>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setFilters({ ...filters, category })}
                                    className={`px-3 py-2 text-sm rounded border ${filters.category === category ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="border rounded p-4">
                        <h2 className="text-lg text-zinc-700 font-semibold mb-2">Price Range</h2>
                        <Slider
                            range
                            min={0}
                            max={10000}
                            value={[filters.minPrice, filters.maxPrice]}
                            onChange={([minPrice, maxPrice]) => {
                                setFilters({ ...filters, minPrice, maxPrice });
                            }}
                        />
                        <div className="mt-2 flex justify-between text-sm">
                            <span>${filters.minPrice}</span>
                            <span>${filters.maxPrice}</span>
                        </div>
                    </div>

                    <div className="border rounded p-4">
                        <h2 className="text-lg text-zinc-700 font-semibold mb-2">Brands</h2>
                        <div className="flex flex-wrap gap-2">
                            {brands.map((brand) => (
                                <div
                                    key={brand}
                                    onClick={() => setFilters({ ...filters, brand })}
                                    className={`cursor-pointer px-3 py-2 text-sm rounded border ${filters.brand === brand ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                                >
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border rounded p-4">
                        <h2 className="text-lg text-zinc-700 font-semibold mb-2">Colors</h2>
                        <div className="flex flex-wrap gap-2">
                            {colors.map((color) => (
                                <div
                                    key={color}
                                    onClick={() => setFilters({ ...filters, color })}
                                    className={`cursor-pointer w-8 h-8 rounded-full border flex justify-center items-center`}
                                    style={{ backgroundColor: color }}
                                >
                                    {filters.color === color && (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border rounded p-4">
                        <h2 className="text-lg text-zinc-700 font-semibold mb-2">Sizes</h2>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map((size) => (
                                <div
                                    key={size}
                                    onClick={() => setFilters({ ...filters, size })}
                                    className={`cursor-pointer px-3 py-2 text-sm rounded border ${filters.size === size ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border rounded p-4">
                        <h2 className="text-lg text-zinc-700 font-semibold mb-2">Availability</h2>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2 cursor-pointer text-sm">
                                <input type="radio" name="availability" value="In Stock" checked={filters.availability === 'In Stock'} onChange={() => setFilters({ ...filters, availability: 'In Stock' })} />
                                In Stock
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer text-sm">
                                <input type="radio" name="availability" value="Out of Stock" checked={filters.availability === 'Out of Stock'} onChange={() => setFilters({ ...filters, availability: 'Out of Stock' })} />
                                Out of Stock
                            </label>
                        </div>
                    </div>

                    <button
                        onClick={handleClearFilters}
                        className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Reset Filters
                    </button>
                </aside>

                <main className="md:col-span-3">
                    <div className="hidden md:flex justify-between items-center mb-4">
                        <div className="mb-4">
                            <h3 className="text-sm text-zinc-700 font-semibold mb-2">Sort By:</h3>
                            <div className="flex gap-2">
                                {sortOptions.map((option) => (
                                    <button
                                        key={option.key}
                                        onClick={() => setSort(option.key)}
                                        className={`px-3 py-1 rounded border text-xs ${sort === option.key ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-sm text-zinc-700 font-semibold">View:</h3>
                            <div className="flex gap-1">
                                {[2, 3, 4].map((cols) => (
                                    <button
                                        key={cols}
                                        onClick={() => setGridCols(cols)}
                                        className={`p-2 rounded-md border flex items-center justify-center ${gridCols === cols
                                                ? 'bg-blue-500 text-white border-blue-600'
                                                : 'text-gray-500 hover:bg-gray-100 border-gray-200'
                                            }`}
                                        title={`${cols} columns`}
                                    >
                                        {cols === 2 && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                <line x1="12" y1="3" x2="12" y2="21" />
                                            </svg>
                                        )}
                                        {cols === 3 && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                <line x1="8" y1="3" x2="8" y2="21" />
                                                <line x1="16" y1="3" x2="16" y2="21" />
                                            </svg>
                                        )}
                                        {cols === 4 && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                <line x1="8" y1="3" x2="8" y2="21" />
                                                <line x1="16" y1="3" x2="16" y2="21" />
                                                <line x1="3" y1="8" x2="21" y2="8" />
                                                <line x1="3" y1="16" x2="21" y2="16" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`grid grid-cols-1 ${gridCols >= 2 ? 'sm:grid-cols-2' : ''} ${gridCols >= 3 ? 'lg:grid-cols-3' : ''} ${gridCols >= 4 ? 'xl:grid-cols-4' : ''}`}>
                        {currentProducts.map(product => (
                            <Card key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="flex justify-center mt-4">
                        <nav aria-label="Page navigation">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <ChevronLeft className="h-5 w-5" />
                                        <span className="sr-only">Previous</span>
                                    </button>
                                </li>
                                {paginationNumbers.map((pageNumber, index) =>
                                    pageNumber === '...' ? (
                                        <li key={`ellipsis-${index}`}>
                                            <span className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300">...</span>
                                        </li>
                                    ) : (
                                        <li key={pageNumber}>
                                            <button
                                                onClick={() => handlePageChange(pageNumber)}
                                                className={`py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === pageNumber ? 'bg-blue-500 text-green-500 font-bold tracking-tighter' : ''}`}
                                            >
                                                {pageNumber}
                                            </button>
                                        </li>
                                    )
                                )}
                                <li>
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className={`py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <ChevronRight className="h-5 w-5" />
                                        <span className="sr-only">Next</span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default function ProductsPageWithProvider() {
    return (
        <FiltersProvider>
            <ProductsPage />
        </FiltersProvider>
    );
}
