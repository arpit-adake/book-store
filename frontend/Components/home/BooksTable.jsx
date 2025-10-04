import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-slate-50 to-gray-50">
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
              No
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
              Title
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200 max-md:hidden">
              Author
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200 max-md:hidden">
              Year
            </th>
            <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {books.map((book, index) => (
            <tr 
              key={book._id} 
              className="transition-all duration-200 hover:bg-gray-50/80 group"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">
                {book.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 max-md:hidden">
                {book.author}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-md:hidden">
                {book.publishYear}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex justify-center gap-x-3">
                  <Link 
                    to={`/books/details/${book._id}`}
                    className="inline-flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-emerald-50 group"
                    title="View Details"
                  >
                    <BsInfoCircle className="text-lg text-emerald-600 group-hover:text-emerald-700 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link 
                    to={`/books/edit/${book._id}`}
                    className="inline-flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-amber-50 group"
                    title="Edit Book"
                  >
                    <AiOutlineEdit className="text-lg text-amber-600 group-hover:text-amber-700 group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link 
                    to={`/books/delete/${book._id}`}
                    className="inline-flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-rose-50 group"
                    title="Delete Book"
                  >
                    <MdOutlineDelete className="text-lg text-rose-600 group-hover:text-rose-700 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {books.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-4xl mb-3">📚</div>
          <p className="text-gray-500 text-lg font-light">No books found</p>
          <p className="text-gray-400 text-sm mt-1">Add some books to get started</p>
        </div>
      )}
    </div>
  );
};

export default BooksTable;