
const formK = document.getElementById("commentFormPK");




let handleSubmitK = async function onFormSubmitK(e) {
    e.preventDefault();
	const data = new FormData(e.target);
    const api_data = {
        author: data.get("email"),
        content: data.get("content"),
    }



    try {
        
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.post(`${BASE_API_URL}api/posts/${ID}/comments/`, api_data, options)
        console.log(req.data);
        alert('Your message has been sent successfully!');
        formK.reset();
    } catch(err) {
        console.log(err)
        alert("An error occured, try again later.")
    }
}

formK.addEventListener("submit", handleSubmitK);