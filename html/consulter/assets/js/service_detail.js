

async function getServicesDetails() {
    try {
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.get(`${BASE_API_URL}api/services/${ID}`, options);
        const data = req.data
        console.log(data)

        const markup = generateMarkup(data);

        document.querySelector('.serviceDET').innerHTML = markup;
        
    } catch(err) {
        console.log(err)
    }
}

function generateMarkup(item) {
    return `
    <div class="row" data-sticky_parent>
                <div class="col-xl-8" data-sticky_column>
                    <div class="media mb-40 mb-md-35 mb-sm-30 mb-xs-25">
                        <img src="${item.image_url}" alt="">
                    </div>

                    <div class="services-details__content">
                        <h2>${item.title}</h2>

                        <p>${item.description_1}</p>

                        <p>${item.description_2}</p>

                        <ul>
                            <li>Network penetration testing</li>
                            <li>Application penetration testing</li>
                            <li>Cloud penetration testing</li>
                            <li>Device penetration testing</li>
                        </ul>
                        
                        <p>${item.description_3}</p>

                        <hr>

                        <h4>Working Challenge</h4>
                        
                        <p>${item.challenge}</p>

                        <figure>
                            <img src="${item.image_url}" alt="">

                            <ul>
                                <li>Comprehensive Protection</li>
                                <li>Expertise and Experience</li>
                                <li>proactive Threat Detection</li>
                                <li>Customized Solutions</li>
                                <li>Enhanced Compliance</li>
                                <li>Continous Monitoring</li>
                            </ul>
                        </figure>

                        <hr>

                        <h4>Frequently Asked Questions</h4>

                        
                    </div>

                    <div class="faq mt-40 mt-md-35 mt-sm-25 mt-xs-20" id="faq">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="h-faq-1">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-1" aria-expanded="true" aria-controls="faq-1">
                                    <i class="icon-question-4"></i> What should i included my personal details? 
                                </button>
                            </h2>
                    
                            <div id="faq-1" class="accordion-collapse collapse show" aria-labelledby="h-faq-1" data-bs-parent="#faq">
                                <div class="accordion-body">
                                    <p>When filling out your personal details, please provide your name, email address, phone number, and company name. This information helps us understand your needs and contact you with tailored cybersecurity solutions
                                        .</p>
                                </div>
                            </div>
                        </div>
                    
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="h-faq-2">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-2" aria-expanded="false" aria-controls="faq-2">
                                    <i class="icon-question-4"></i> We can secure your digital assets?
                                </button>
                            </h2>
                    
                            <div id="faq-2" class="accordion-collapse collapse" aria-labelledby="h-faq-2" data-bs-parent="#faq">
                                <div class="accordion-body">
                                    <p>Absolutely, we can secure your services with our comprehensive cybersecurity solutions. From risk assessments and vulnerability management to continuous monitoring and incident response, we ensure your digital assets are protected against evolving threats
                                        .</p>
                                </div>
                            </div>
                        </div>
                    
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="h-faq-3">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-3" aria-expanded="false" aria-controls="faq-3">
                                    <i class="icon-question-4"></i> The best cybersecurity service provider?
                                </button>
                            </h2>
                    
                            <div id="faq-3" class="accordion-collapse collapse" aria-labelledby="h-faq-3" data-bs-parent="#faq">
                                <div class="accordion-body">
                                    <p>As one of the best cybersecurity service providers, we combine expertise, advanced technology, and a proactive approach to deliver top-notch security solutions. Our team is dedicated to safeguarding your business, ensuring compliance, and enhancing your overall security posture
                                        .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4">
                    <div class="main-sidebar" data-sticky_column>
                        <div class="single-sidebar-widget mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                            <h4 class="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">Our services</h4>
                            
                            <div class="widget_categories">
                                <ul>
                                    <li><a href="services-details.html?1">Application security<i class="fas fa-long-arrow-alt-right"></i></a></li>
                                    <li><a href="services-details.html?2">Network security <i class="fas fa-long-arrow-alt-right"></i></a></li>
                                    <li><a href="services-details.html?3">cloud security <i class="fas fa-long-arrow-alt-right"></i></a></li>
                                    <li><a href="services-details.html?4">Device security <i class="fas fa-long-arrow-alt-right"></i></a></li>
                                   
                                </ul>                                
                            </div>
                        </div>

                        <div class="single-sidebar-widget have-any mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20"> 
                            
                            <div class="media">
                                <img src="assets/img/services-details/have-any.png" alt="">
                            </div>
                            
                            <div class="have-any__item text-center" style="background-image: url(assets/img/services-details/have-any-bottom.png);">
                                <h4 class="wid-title mb-20 mb-xs-15 color-white text-capitalize">Have any question?</h4>

                                <a href="contact.html" class="theme-btn">Contact Us <i class="fab fa-telegram-plane"></i></a>
                            </div>
                        </div>

                        <!-- <div class="single-sidebar-widget widget__tags mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                            <h4 class="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">Download</h4>

                            <div class="download-service-doc">
                                <a href="#" class="theme-btn d-flex align-content-center flex-wrap justify-content-between">
                                    <div class="text">
                                        <img src="assets/img/icon/fdf-1.svg" alt=""> Documentation
                                    </div>
                                    
                                    <i class="icon-download-1"></i>
                                </a>

                                <a href="#" class="theme-btn d-flex align-content-center flex-wrap justify-content-between btn-fdf">
                                    <div class="text">
                                        <img src="assets/img/icon/fdf-4.svg" alt=""> Download PDF
                                    </div>
                                    <i class="icon-download-1"></i>
                                </a>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
    `
}


getServicesDetails()