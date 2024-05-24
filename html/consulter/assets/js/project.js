

async function getProject() {
    try {
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.get(`${BASE_API_URL}api/projects/`, options);
        const data = req.data
        console.log(data)

        let markup =  ''
        data.map((item) => {
            markup += `
            <div class="col-lg-4 col-sm-6">
                    <div class="our-project__item overflow-hidden mb-30">
                        <img src="${item.image_url}" alt="">

                        <div class="content d-flex align-items-center justify-content-between">
                            <div class="text">
                                <span class="fw-500 color-primary d-block mb-10 text-uppercase">${item.category}</span>
                                <h5 class="title color-d_black">${item.title}</h5>
                            </div>

                            <a href="our-project-details.html?${item.id}" class="theme-btn"><img src="assets/img/icon/arrow-right-top.svg" alt=""></a>
                        </div>
                    </div>
                </div>
            `;
            
        })

        document.querySelector('.projectPK').innerHTML = markup;
        
    } catch(err) {
        console.log(err)
    }
}

getProject()