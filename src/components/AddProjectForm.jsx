import {useState} from "react"; 

function AddProjectForm({addProject}){ 

const [title,setTitle]=useState(""); 

const [description,setDescription]=useState(""); 

const [image,setImage]=useState(""); 

const [category,setCategory]=useState(""); 

const handleSubmit=(e)=>{ 

e.preventDefault(); 

addProject({ 

title, 

description, 

image, 

category 

}); 

setTitle(""); 

setDescription(""); 

setImage(""); 

setCategory(""); 

} 

return( 

<form onSubmit={handleSubmit}> 

<input 

placeholder="Title" 

value={title} 

onChange={(e)=>setTitle(e.target.value)} /> 

<input 

placeholder="Description" 

value={description} 

onChange={(e)=>setDescription(e.target.value)} /> 

<input 

placeholder="Image URL" 

value={image} 

onChange={(e)=>setImage(e.target.value)} /> 

<input 

placeholder="Category" 

value={category} 

onChange={(e)=>setCategory(e.target.value)} /> 

<button>Add Project</button> 

</form> 

) 

} 

export default AddProjectForm; 