import { useState } from "react"; 

import Header from "./components/Header"; 
import SearchBar from "./components/SearchBar"; 
import AddProjectForm from "./components/AddProjectForm"; 
import ProjectList from "./components/ProjectList"; 
import Footer from "./components/Footer"; 

function App() { 

const [projects,setProjects]=useState([{ 
id:1, 
title:"Agency Website", 
description:"Modern responsive website", 
image:"https://picsum.photos/300/200", 
category:"Web Design" 
},{ 
id:2, 
title:"Restaurant App", 
description:"Online ordering platform", 
image:"https://picsum.photos/301/200", 
category:"React" 
}]); 

const [searchTerm,setSearchTerm]=useState(""); 

const addProject=(project)=> 
{ 
setProjects([...projects,{ 
id:Date.now(), 
...project 
}]); 
}; 

const filteredProjects=projects.filter(project=> 
project.title.toLowerCase().includes(searchTerm.toLowerCase()) 
); 

return ( 
<> 
<Header/> 
<SearchBar 
searchTerm={searchTerm} 
setSearchTerm={setSearchTerm} /> 
<AddProjectForm addProject={addProject} /> 
<ProjectList projects={filteredProjects} /> 
<Footer/> 
</> 
); 
} 

export default App; 