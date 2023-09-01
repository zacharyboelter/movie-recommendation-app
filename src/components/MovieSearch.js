import React, {useState} from "react";




const MovieSearch = ({ onSearch }) => {
    const [query, setQuery] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted'); // Debugging line
        console.log('Search query:', query); // Debugging line
        onSearch(query);
      };

    return (
        <div className="text-center p-4">
            <form class="flex flex-row items-center mb-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a Movie"
                    class="px-2 py-1 border rounded mb-2"
                />
                <button 
                    type="submit"
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default MovieSearch;