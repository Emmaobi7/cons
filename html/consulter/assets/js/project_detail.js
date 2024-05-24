

async function getProjectDetails() {
    try {
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.get(`${BASE_API_URL}api/projects/${ID}`, options);
        const data = req.data
        console.log(data)

        const markup = generateMarkup(data);
        document.querySelector('.projectPK').innerHTML = markup;
        
    } catch(err) {
        console.log(err)
    }
}


function generateMarkup(item) {
    return `
    <div class="row">
    <div class="col-12">
        <div class="media">
            <img src="${item.image_url}" alt="">
        </div>

        <div class="our-project-details-meta mr-30 ml-30 pt-sm-30 pt-xs-25 pb-sm-30 pb-xs-25 pt-40 pb-40 mb-80 mb-md-60 mb-sm-30 mb-xs-25 ">
            <div class="row mb-minus-30">
                <div class="col-xl-3 col-sm-6">
                    <div class="meta-item d-flex flex-sm-column flex-md-row align-items-center justify-content-center mb-30">
                        <div class="icon text-center">
                            <i class="icon-clint"></i>
                        </div>

                        <div class="text">
                            <span class="fw-500 font-la d-block mb-5">Client:</span>
                            <h6 class="color-primary">${item.client}</h6>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-sm-6">
                    <div class="meta-item d-flex flex-sm-column flex-md-row align-items-center justify-content-center mb-30">
                        <div class="icon text-center">
                            <i class="fas fa-layer-group"></i>
                        </div>

                        <div class="text">
                            <span class="fw-500 font-la d-block mb-5">Category:</span>
                            <h6 class="color-primary">${item.category}</h6>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-sm-6">
                    <div class="meta-item d-flex flex-sm-column flex-md-row align-items-center justify-content-center mb-30">
                        <div class="icon text-center">
                            <i class="icon-date"></i>
                        </div>

                        <div class="text">
                            <span class="fw-500 font-la d-block mb-5">Date:</span>
                            <h6 class="color-primary">${item.year}</h6>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-sm-6">
                    <div class="meta-item d-flex flex-sm-column flex-md-row align-items-center justify-content-center mb-30">
                        <div class="icon text-center">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>

                        <div class="text">
                            <span class="fw-500 font-la d-block mb-5">Address:</span>
                            <h6 class="color-primary">${item.address}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="our-project-details__content">
            <h6>${item.category}</h6>
            <h2>${item.title}</h2>

            <p>${item.content}</p>

             
           

            <!--<figure>
                <img src="assets/img/project-details/project-details-4.png" alt="">
                <img src="assets/img/project-details/project-details-5.png" alt="">
                <img src="assets/img/project-details/project-details-6.png" alt="">
            </figure>-->

            <h2>The Challenge Of Project</h2>

            <p>${item.challenge}</p>
            
            <!--<ul>
                <li>Will give you a complete account</li>
                <li>Easy Customer Service</li>
                <li>Excepteur sint occaecat cupidatat non.</li>
                <li>The master-builder of human happiness</li>
                <li>Duis aute irure dolor in reprehenderit</li>
                <li>complete account of the system</li>
            </ul>-->

            <hr>
        </div>

        <!-- <div class="pagination-item__wrapper d-flex flex-column flex-lg-row align-items-center mt-80 mt-lg-60 mt-md-40 mt-sm-35 mt-xs-30">
            <a href="#" class="pagination-item d-flex align-items-center justify-content-between" style="background-image: url(assets/img/project-details/pagination-item-1.png);">
                <div class="left color-white">
                    <i class="fas fa-long-arrow-alt-left"></i> Previous
                </div>

                <div class="right text-end">
                    <h4 class="title color-white">Business Planning</h4>
                    <span class="font-la color-white">Case Study</span>
                </div>
            </a>

            <a href="#" class="pagination-item d-flex align-items-center justify-content-between flex-row-reverse" style="background-image: url(assets/img/project-details/pagination-item-2.png);">
                <div class="left color-white">
                    Next <i class="fas fa-long-arrow-alt-right"></i>
                </div>

                <div class="right text-end">
                    <h4 class="title color-white">Business Planning</h4>
                    <span class="font-la color-white">Case Study</span>
                </div>
            </a>
        </div> -->
    </div>
</div>
    `
}


getProjectDetails()