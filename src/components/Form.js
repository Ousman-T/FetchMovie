import { useState } from "react";

function Form(props){
    const { movieSearch, setMovie } = props;
    // formData = object
    const [formData, setFormData] = useState({searchTerm: ""});
    // handle changes upon input
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    };
    // handle submit on the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await movieSearch(formData.searchTerm);
        setMovie(data)
    };
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Search Movie By Title..." 
            value={formData.searchTerm} 
            name="searchTerm" 
            onChange={handleChange}/>
            <input type="submit"/>
        </form>

    </div>
    );
};

export default Form;