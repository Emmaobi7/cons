
async function getServices_about() {
    try {
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.get(`${BASE_API_URL}api/services/`, options);
        const data = req.data.data
        console.log(data)

        let markup =  ''
        data.map((item) => {
            markup += `
            <div class="slider-item">
                            <div class="similar-work__item reade-more-hidden d-flex justify-content-between flex-column">
                                <div class="top d-flex align-items-center">
                                    <div class="icon color-white text-center">
                                        <i class="fal fa-analytics"></i>
                                    </div>

                                    <h4 class="title color-d_black"><a href="services.html?${item.id}">${item.title} </a></h4>
                                </div>

                                <div class="bottom">    
                                    <div class="media overflow-hidden">
                                        <img src="${item.image_url}" class="img-fluid" alt="">
                                    </div>
                                    
                                    <a href="services.html?${item.id}" class="theme-btn text-center fw-600">Read Details <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
            `;
            
        })

        document.querySelector('.servicePK-abt').innerHTML = markup;
        
    } catch(err) {
        console.log(err)
    }
}


async function team_3() {
    try {
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.get(`${BASE_API_URL}api/team/?page=1&per_page=3`, options);
        const data = req.data.data
        console.log(data)

        let markup =  ''
        data.map((item) => {
            markup += `
            <div class="col-xxl-3 col-lg-4 col-md-6">
                    <a href="team-details.html?${item.id}" class="team-item team-about-item text-center mb-30 d-block overflow-hidden">
                        <div class="media">
                            <img src="${item.image_url}" class="img-fluid" alt="">
                        </div>

                        <div class="text d-flex align-items-center justify-content-center">
                            <div class="left">
                                <h5 class="title color-white">${item.name}</h5>
                                <span class="position color-white font-la fw-500">${item.role}</span>
                            </div>

                            <div class="right">
                                <div class="icon">
                                    <i class="icon-arrow-right-2"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;
            
        })

        document.querySelector('.teamPK-abt').innerHTML = markup;
        
    } catch(err) {
        console.log(err)
    }
}

getServices_about()
team_3()