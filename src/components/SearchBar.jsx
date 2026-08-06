const SearchBar = ({ searchTerm, setSearchTerm }) => { 
return ( 
<section className="search-section"> 
<h2>Search Portfolio Projects</h2> 

<p> 
Enter search terms into the search box below to filter portfolio
projects by title. The project portfolio will automatically update 
as you type to include only those projects whose titles match the
search terms. This allows visitors to quickly browse through the
agency's work and find projects without having to scroll through
every project. 
</p> 

<input 
type="text" 
placeholder="Search projects by title..." 
value={searchTerm} 
onChange={(e) => setSearchTerm(e.target.value)} 
aria-label="Search portfolio projects" 
/> 
</section> 
); 
}; 

export default SearchBar; 