


async function getServices() {
    try {
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.get(`${BASE_API_URL}api/services/`, options);
        const data = req.data.data
        console.log(data)

        let markup =  ''
        data.map((item) => {
            markup += `
            <div class="slider-item">
                <div class="our-project__item overflow-hidden">
                    <img src="${item.image_url}" alt="">

                    <div class="content d-flex align-items-center justify-content-between">
                        <div class="text">
                            <span class="fw-500 color-primary d-block mb-10 text-uppercase">consulter</span>
                            <h5 class="title color-secondary">${item.title}</h5>
                        </div>

                        <a href="our-project.html?id=${item.id}" class="theme-btn"><i class="icon-arrow-right-2"></i></a>
                    </div>
                </div>
            </div>
            `;
            
        })

        document.querySelector('.servicePK').innerHTML = markup;
        
    } catch(err) {
        console.log(err)
    }
}


async function getBlog_3() {
    try {
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.get(`${BASE_API_URL}api/posts/?page=1&per_page=3`, options);
        const data = req.data.data
        console.log(data)

        let markup =  ''
        data.map((item) => {
            markup += `
            <div class="col-xl-4 col-md-6 col-12">
                        <div class="blog-item mb-30">
                            <div class="blog-featured-thumb mb-xs-30 mb-sm-30 mb-md-35 mb-lg-40 mb-50">
                                <div class="media overflow-hidden">
                                    <img src="${item.image_url}" class="img-fluid" alt="">
                                </div>
                                <div class="date">
                                    <span>${item.day}</span>
                                    <span>${item.month}</span>
                                    <span>${item.year}</span>
                                </div>
                            </div>

                            <div class="content pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pb-30 pl-30">
                                <div class="post-author mb-5">
                                    <a href="blog-details.html?id=${item.id}">${item.category}</a>
                                </div>

                                <h4><a href="blog-details.html?id=${item.id}">${item.title}</a></h4>

                                <div class="btn-link-share mt-xs-10 mt-sm-10 mt-15">
                                    <a href="blog-details.html?id=${item.id}" class="theme-btn btn-border">Read More <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
            `;
            
        })

        document.querySelector('.blogPK').innerHTML = markup;
        
    } catch(err) {
        console.log(err)
    }
}


getBlog_3();
getServices();