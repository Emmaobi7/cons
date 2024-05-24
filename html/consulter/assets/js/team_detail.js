async function getTeamDetails() {
    try {
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.get(`${BASE_API_URL}api/team/${ID}`, options);
        const data = req.data
        console.log(data)

        const markup = generateMarkup(data);

        document.querySelector('.teamDET').innerHTML = markup;
        
    } catch(err) {
        console.log(err)
    }
}


function generateMarkup(item) {
    return `
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="team-details__media overflow-hidden mb-md-40 mb-sm-35 mb-xs-30">
                    <div class="social-profile d-flex flex-column">
                        <span>Follow Me</span>
                        
                    </div>
                    <img src="${item.image_url}" class="img-fluid" alt="">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="team-details__content">
                    <h6><img src="assets/img/team-details/badge-line.svg" alt=""> information=</h6>
                    <h2>${item.name} <span>/${item.role}</span></h2>
                    <p>${item.description}</p>
                    <ul>
                        <li>${item.qualification}</li>
                    </ul>
                    <div class="contact-info">
                        <ul>
                            <li><span>Gender:</span>${item.gender}</li>
                            <li><span>E-mail:</span> <a href="mailto:${item.email}">${item.email}</a></li>
                            <li><span>Nationality:</span> <a>${item.nationality}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <hr class="mt-100 mt-lg-80 mt-md-60 mt-sm-50 mt-xs-40 mb-100 mb-lg-80 mb-md-60 mb-sm-50 mb-xs-40">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="team-details__block">
                    <h3>Job Experience</h3>
                    <img src="assets/img/team-details/badge-line.svg" alt="">
                    <p>${item.job_exp}</p>
                    <div class="progress-bar__wrapper mt-30">
                        <div class="single-progress-bar mb-30">
                            <h6 class="title color-d_black mb-10">${item.first_skill}</h6>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="max-width: 80%">
                                    <span class="placeholder" style="left: 80%">80%</span>
                                </div>
                            </div>
                        </div>
                        <div class="single-progress-bar mb-30">
                            <h6 class="title color-d_black mb-10">${item.second_skill}</h6>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style="max-width: 55%">
                                    <span class="placeholder" style="left: 55%">55%</span>
                                </div>
                            </div>
                        </div>
                        <div class="single-progress-bar mb-30">
                            <h6 class="title color-d_black mb-10">${item.third_skill}</h6>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="max-width: 90%">
                                    <span class="placeholder" style="left: 90%">90%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="team-details__block mt-xs-30 mt-sm-35 mt-md-40">
                    <h3>Educational Experience</h3>
                    <img src="assets/img/team-details/badge-line.svg" alt="">
                    <p>${item.educational_exp}</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

getTeamDetails()