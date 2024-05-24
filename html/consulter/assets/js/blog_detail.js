
async function getBlogDetails() {
    try {
        const options = {headers: { 'Content-Type': 'application/json'  }};
        const req = await axios.get(`${BASE_API_URL}api/posts/${ID}`, options);
        const data = req.data
        console.log(data)
        const markup = generateMarkup(data);
       
        document.querySelector('.blogDET').innerHTML = markup;
        
    } catch(err) {
        console.log(err)
    }
}


function generateMarkup(item) {
    return `
    <div class="row" data-sticky_parent>
                <div class="col-xl-8" data-sticky_column>
                    <div class="blog-item blog-standard blog-post-details">
                        <div class="blog-featured-thumb mb-xs-30 mb-sm-30 mb-md-35 mb-lg-40 mb-40">
                            <div class="media overflow-hidden">
                                <img src="${item.image_url}" class="img-fluid" alt="">
                            </div>
                        </div>

                        <div class="content pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pl-30 pb-xs-25 pb-sm-30 pb-40">
                            <div class="post-meta mb-10">
                                <a href="#"><i class="icon-user"></i>By ${item.author}</a>
                                <a href="#"><i class="icon-category"></i>${item.category}</a>
                             
                                <a href="#"><img src="assets/img/icon/messages-1.svg=" alt="">02 Comments</a>
                            </div>

                            <h3>${item.title}</h3>

                            <p>${item.content}</p>

                            
                            <!--<blockquote>
                                <p>    
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.”
                                </p>

                                <h6>Richard Paul <span>/Company CEO</span></h6>
                            </blockquote>-->

                            
                            <!-- <figure>
                                <img src="assets/img/blog-details/blog-details-1.jpg" alt="">
                                <img src="assets/img/blog-details/blog-details-2.jpg" alt="">
                            </figure> -->

                            
                            <div class="tag-share_wrapper d-flex align-center justify-content-between flex-wrap mb-sm-40 mb-xs-30 mb-60"> 
                                <!-- <div class="tags">
                                    <ul>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Finance</a></li>
                                        <li><a href="#">Solution</a></li>
                                    </ul>
                                </div> --> 

                                <div class="social-profile">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div> 
                            </div>

                            <!-- comments section wrap start -->
                            <div class="comments-section-wrap overflow-hidden"> 
                                <h4>02 <span>Comments</span></h4>

                                <ul class="comments-item-list">
                                    <li>
                                        <div class="author-img">
                                            <img src="assets/img/blog-details/auhor-1.jpg" alt="">
                                        </div>

                                        <div class="author-info-comment">
                                            <div class="info mb-10">
                                                <h5><a href="#">Md Ashikul Islam</a></h5>
                                                <span>January 22, 2022 at 7:30pm</span>
                                            </div>

                                            <div class="comment-text">
                                                <p>A really good write up chief.</p>
                                                
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="author-img">
                                            <img src="assets/img/blog-details/auhor-2.jpg" alt="">
                                        </div>

                                        <div class="author-info-comment">
                                            <div class="info mb-10">
                                                <h5><a href="#">Md jhon Islam</a></h5>
                                                <span>May 22, 2024 at 5:30pm</span>
                                            </div>

                                            <div class="comment-text">
                                                <p> I have book marked this post, this is gold man!</p>
                                                
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="comment-form-wrap">
                                <h4>Leave a Reply</h4>

                                <form action="#" class="comment-form" id="commentFormPK" method="post">
                                    <div class="single-form-input">
                                        <textarea name="content id="content" placeholder="Your comment"></textarea>
                                    </div>
                                    <div class="input__wrapper w-100 d-flex flex-column flex-sm-row">
                                        <div class="single-form-input">
                                            <input name="author" id="author" type="text" placeholder="Your name">
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <button class="theme-btn submit-btn" type="submit">Post Comment</button>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="col-xl-4">
                    <!-- <div class="main-sidebar" data-sticky_column>
                        <div class="single-sidebar-widget mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                            <h4 class="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">Search Here</h4>

                            <div class="search_widget">
                                <form action="#">
                                    <input type="text" placeholder="Enter Keyword...">
                                    <button type="submit"><i class="fal fa-search"></i></button>
                                </form>
                            </div>
                        </div>

                        <div class="single-sidebar-widget mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                            <h4 class="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">Our provide</h4>
                            
                            <div class="widget_categories">
                                <ul>
                                    <li><a href="#">Business Consulting <i class="fas fa-long-arrow-alt-right"></i></a></li>
                                    <li><a href="#">Business Solutions <i class="fas fa-long-arrow-alt-right"></i></a></li>
                                    <li><a href="#">Investment Planning <i class="fas fa-long-arrow-alt-right"></i></a></li>
                                    <li><a href="#">Strategy & Research <i class="fas fa-long-arrow-alt-right"></i></a></li>
                                    <li><a href="#">Tax Management <i class="fas fa-long-arrow-alt-right"></i></a></li>
                                </ul>                                
                            </div>
                        </div>

                        <div class="single-sidebar-widget mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20"> 
                            <h4 class="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">Resent Post</h4>

                            <div class="resent-posts">
                                <div class="single-post-item mb-20">
                                    <div class="thumb overflow-hidden">
                                        <img src="assets/img/blog/blog-2.jpg" class="img-fluid" alt="">
                                    </div>

                                    <div class="post-content">
                                        <a href="blog-details.html" class="post-date d-block mb-10 text-uppercase">
                                            <i class="far fa-clock"></i>12 jun, 2022
                                        </a>
                                        <h6><a href="blog-details.html">Saving Time Achieving Success in Business</a></h6>
                                    </div>
                                </div>

                                <div class="single-post-item mb-20">
                                    <div class="thumb overflow-hidden">
                                        <img src="assets/img/blog/blog-6.jpg" class="img-fluid" alt="">
                                    </div>

                                    <div class="post-content">
                                        <a href="blog-details.html" class="post-date d-block mb-10 text-uppercase">
                                            <i class="far fa-clock"></i>25 Feb, 2023
                                        </a>
                                        <h6><a href="blog-details.html">Finances and Accounting are One of the Hardest</a></h6>
                                    </div>
                                </div>

                                <a href="blog.html" class="theme-btn d-block"><i class="far fa-sync-alt"></i>More Post</a>
                            </div>
                        </div>

                        <div class="single-sidebar-widget widget__tags mb-40 pt-30 pr-30 pb-40 pl-30 pl-xs-20 pr-xs-20">
                            <h4 class="wid-title mb-30 mb-xs-20 color-d_black text-capitalize">Popular Tags</h4>

                            <div class="tags">
                                <ul>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Finance</a></li>
                                    <li><a href="#">Solution</a></li>
                                    <li><a href="#">Research</a></li>
                                    <li><a href="#">Technology</a></li>
                                    <li><a href="#">Growth</a></li>
                                    <li><a href="#">Strategy</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Planning</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
    `
}


getBlogDetails()