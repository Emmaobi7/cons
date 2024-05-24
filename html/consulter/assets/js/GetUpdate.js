
const formG = document.getElementById("getUpdateFormPK");

let handleSubmitG = async function onFormSubmitG(e) {
    e.preventDefault();
	const data = new FormData(e.target);
    const api_data = {
        email: data.get("email"),
    }

    try {
        
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.post(`${BASE_API_URL}api/get_update/`, api_data, options)
        console.log(req.data);
        alert('Your message has been sent successfully!');
        formG.reset();
    } catch(err) {
        console.log(err)
        alert("An error occured, try again later.")
    }
}

formG.addEventListener("submit", handleSubmitG);