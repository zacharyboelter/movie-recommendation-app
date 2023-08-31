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
            <h2 className="text-2x1 font-semibold mb-4">Search for a Movie</h2>
            <form class="flex flex-col items-center mb-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter a movie title"
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