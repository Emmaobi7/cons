
const form = document.getElementById("contactFormPK");




let handleSubmit = async function onFormSubmit(e) {
    e.preventDefault();
	const data = new FormData(e.target);
    const api_data = {
        name: data.get("name"),
        email: data.get("email"),
        subject: data.get("subject"),
        message: data.get("message")
    }



    try {
        console.log(api_data.name)
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.post(`${BASE_API_URL}api/contact_us/`, api_data, options)
        console.log(req.data);
        alert('Your message has been sent successfully!');
        form.reset();
    } catch(err) {
        console.log(err)
        alert("An error occured, try again later.")
    }
}

form.addEventListener("submit", handleSubmit);