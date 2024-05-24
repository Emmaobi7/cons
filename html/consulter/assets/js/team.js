

async function getTeam() {
    try {
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.get(`${BASE_API_URL}api/team/`, options);
        const data = req.data.data
        console.log(data)

        let markup =  ''
        data.map((item) => {
            markup += `
            <div class="col-xxl-3 col-lg-4 col-md-6">
                    <div class="team-item text-center mb-30 d-block overflow-hidden">
                        <div class="media">
                            <img src="${item.image_url}" class="img-fluid" alt="">
                        </div>

                        <div class="text d-flex align-items-center justify-content-center">
                            <div class="left">
                                <h5 class="title color-white">${item.name}</h5>
                                <span class="position color-white font-la fw-500">${item.role}</span>
                            </div>
                        </div>

                        <a href="team-details.html?${item.id}" class="theme-btn">View Ddetails <i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            `;
            
        })

        document.querySelector('.teamPK-team').innerHTML = markup;
        
    } catch(err) {
        console.log(err)
    }
}



getTeam()