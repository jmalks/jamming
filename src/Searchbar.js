import { useState } from "react";

const Searchbar = () => {
    const [searchedSong, setSearchedSong] = useState("");
    
    return ( 
        <div className="searchbar">
            <form>
                <input 
                type="Search" 
                value={searchedSong} 
                onChange={(e) => setSearchedSong(e.target.value)}
                />
                <button onClick={() => console.log("searched")}>Search</button>
            </form>
        </div>
     );
}
 
export default Searchbar;