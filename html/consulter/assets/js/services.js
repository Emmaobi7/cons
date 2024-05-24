async function getServices_4() {
    try {
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.get(`${BASE_API_URL}api/services/?page=1&per_page=4`, options);
        const data = req.data.data
        console.log(data)

        let markup =  ''
        data.map((item) => {
            markup += `
            <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="why-choose__item">
                        <div class="icon mb-30 mb-lg-20 mb-md-10 mb-xs-5 color-primary">
                            <i class="icon-consultant"></i>
                        </div>
                        
                        <h5 class="title color-d_black mb-15 mb-xs-10">${item.title}</h5>
                        
                        <div class="description font-la">
                            <p>${item.description_1}</p>
                        </div>
                        
                        <a href="services-details.html?${item.id}">Read More <i class="far fa-chevron-double-right"></i></a>
                    </div>
                </div>
            `;
            
        })

        document.querySelector('.servicePK2').innerHTML = markup;
        
    } catch(err) {
        console.log(err)
    }
}

async function getServices_rev() {
    try {
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.get(`${BASE_API_URL}api/services/?page=1&per_page=3`, options);
        const data = req.data.data
        console.log(data)

        let markup =  ''
        data.map((item) => {
            markup += `
            <div class="col-lg-4 col-md-6">
                    <div class="similar-work__item reade-more-hidden mb-30 d-flex justify-content-between flex-column">
                        <div class="top d-flex align-items-center">
                            <div class="icon color-white text-center">
                                <i class="icon-planning"></i>
                            </div>

                            <h4 class="title color-d_black"><a href="services-details.html?${item.id}">${item.title}</a></h4>
                        </div>

                        <div class="bottom">    
                            <div class="media overflow-hidden">
                                <img src="${item.image_url}" class="img-fluid" alt="">
                            </div>
                            
                            <a href="services-details.html?${item.id}" class="theme-btn text-center fw-600">Read Details <i class="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </div>
            `;
            
        })

        document.querySelector('.servicePK-rev').innerHTML = markup;
        
    } catch(err) {
        console.log(err)
    }
}

getServices_4()
getServices_rev()