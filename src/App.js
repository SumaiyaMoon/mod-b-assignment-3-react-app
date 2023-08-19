import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import btp_1 from './images/b-t-p-1.jpg';
import btp_2 from './images/b-t-p-2.jpg';
import btp_3 from './images/b-t-p-3.jpg';
import btp_4 from './images/b-t-p-4.jpg';
import user_1 from './images/user-1.jpg';
import user_2 from './images/user-2.jpg';
import user_3 from './images/user-3.jpg';
import blog_1 from './images/blog-1.jpg';
import blog_2 from './images/blog-2.jpg';
import blog_3 from './images/blog-3.jpg';
import payment from './images/payment.png'

function App() {
  return (

    <div>
      <heaader>
        <nav class="navbar navbar-expand-lg bg-dark  sticky-top" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand ms-5 fw-bolder fs-3" href="#">DORSIN</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav m-auto gap-3">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Services</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link" href="#">Team</a>
                <a class="nav-link" href="#">Blog</a>
                <a class="nav-link" href="#">Contact</a>
              </div>
            </div>
            <button class="btn btn-danger rounded-pill me-5">Try it for free</button>
          </div>
        </nav>
      </heaader>
      <main>


        {/* Section1 Start */}
        <section className='bg_img'>
          <div className='bg_color d-flex align-items-center justify-content-center flex-column gap-3'>
            <h1 className='heading mt-5'>We help startups launch <br /> their products</h1>
            <p className='fs-6 '>Etiam sed.Interdum consequat proin vestibulum class at.</p>
            <i class="fa-solid fa-play fs-2 p-3 play_btn"></i>
          </div>
        </section>
        {/* Section1 End */}


        {/* Section2 Start */}
        <section className='text-center p-2 services container'>
          <h1 className='mt-5'>OUR SERVICES</h1>
          <p className='fs-5 text-danger fw-bold'>―――</p>
          <p className='text-secondary mb-5'>We craft digital, graphic and dimensional thinking, to create category leading brand <br /> experiences that have meaning and add a value for our clients.</p>
          <div className='row d-flex align-items-center justify-content-center mt-5'>
            <div className='col p-3 m-1'>
              <i class="fa-regular fa-gem p-2  m-2"></i>
              <h6 className='m-2'>Digital Design</h6>
              <p className='text-secondary m-2'>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
            </div>
            <div className='col p-3 m-1'>
              <i class="fa-solid fa-comments p-2 m-2"></i>
              <h6 className='m-2'>Unlimited Colors</h6>
              <p className='text-secondary m-2'>Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.</p>
            </div>
            <div className='col p-3 m-1'>
              <i class="fa-brands fa-connectdevelop p-2 m-2"></i>
              <h6 className='m-2'>Strategy Solutions</h6>
              <p className='text-secondary m-2'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
            </div>
          </div>
          <div className='row d-flex align-items-center justify-content-center '>
            <div className='col p-3 m-1'>
              <i class="fa-brands fa-react p-2 m-2"></i>
              <h6 className='m-2'>Digital Design</h6>
              <p className='text-secondary m-2'>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
            </div>
            <div className='col p-3 m-1'>
              <i class="fa-regular fa-newspaper p-2 m-2"></i>
              <h6 className='m-2'>Unlimited Colors</h6>
              <p className='text-secondary m-2'>Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.</p>
            </div>
            <div className='col p-3 m-1'>
              <i class="fa-regular fa-paper-plane p-2 m-2"></i>
              <h6 className='m-2'>Strategy Solutions</h6>
              <p className='text-secondary m-2'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
            </div>

          </div>
        </section>
        {/* Section2 End */}


        {/* Section3 Start */}
        <section className='bg-light container-fluid mt-5 p-5 text-left'>
          <div className='row p-5 d-flex align-items-center justify-content-center'>
            <div className='col-md-6 d-flex align-items-start justify-content-center flex-column gap-3'>
              <div>
                <h4 className='mt-5'>A digital web design studio creating modern & engaging online experiences</h4>
                <p className='text-secondary'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <ul className='me-2 sec_three_ul'>
                  <li className='py-2'><span>We put a lot of effort in design.</span></li>
                  <li className='py-2'><span>The most important ingredient of successful website.</span></li>
                  <li className='py-2'><span>Sed ut perspiciatis unde omnis iste natus error sit.</span></li>
                  <li className='py-2'><span>Submit Your Organization.</span></li>
                </ul>
              </div>
              <button className='btn btn-danger text-left '>Learn More →</button>
            </div>
            <div className='col-md-6 mt-3'><img src='http://dorsin.react.themesbrand.com/assets/images/online-world.svg' width='500px' /></div>
          </div>
        </section>
        {/* Section3 End */}


        {/* Section4 Start */}
        <section className='bg_img1'>
          <div className='bg_color1 d-flex align-items-center justify-content-center flex-column gap-3'>
            <h1 className='heading mt-5'>Build your dream website today</h1>
            <p className='fs-6 '>But nothing the copy said could convince her and so it didn't take long until a few <br /> insidious Copy Writers ambushed her.</p>
            <button className='btn btn-light'>View Plan & Pricing</button>
          </div>
        </section>
        {/* Section4 End */}


        {/* Section5 Start */}
        <section className='text-center p-2 services container'>
          <h1 className='mt-5'>OUR PRICING</h1>
          <p className='fs-5 text-danger fw-bold'>―――</p>
          <p className='text-secondary mb-5'>Call to action pricing table is really crucial to your for your business website. Make your bids <br /> stand-out with amazing options.</p>
          <div className='row d-flex align-items-center justify-content-center gap-5 m-2 p-2'>
            <div className='col rounded shadow-sm p-2 m-2 border border-2 h-100'>
              <p className='m-0 p-0 mt-2 p_md'>ECONOMY</p>
              <p className='fs-2 fw-bold m-0 p-0'>$9.90</p>
              <p className='text-secondary p_sm'>BILLING PER MONTH</p>
              <hr className='mx-5' />
              <ul className='pricng_ul'>
                <li className='p-2 m-2'>Bandwidth: <span className='text-danger fw-bold'>1GB</span></li>
                <li className='p-2 m-2'>Onlinespace: <span className='text-danger fw-bold'>50MB</span></li>
                <li className='p-2 m-2'>Support: <span className='text-danger fw-bold'>No</span></li>
                <li className='p-2 m-2'><span className='text-danger fw-bold'>1</span> Domain</li>
                <li className='p-2 m-2'><span className='text-danger fw-bold'>No</span> Hidden Fees</li>
              </ul>
              <div className='m-5'><button className='btn btn-danger px-3'>Join Now</button></div>
            </div>
            <div className='col rounded shadow-sm p-2 m-2 border border-2 h-100'>
              <p className='m-0 p-0 mt-2 p_md'>ECONOMY</p>
              <p className='fs-2 fw-bold m-0 p-0'>$9.90</p>
              <p className='text-secondary p_sm'>BILLING PER MONTH</p>
              <hr className='mx-5' />
              <ul className='pricng_ul'>
                <li className='p-2 m-2'>Bandwidth: <span className='text-danger fw-bold'>1GB</span></li>
                <li className='p-2 m-2'>Onlinespace: <span className='text-danger fw-bold'>50MB</span></li>
                <li className='p-2 m-2'>Support: <span className='text-danger fw-bold'>No</span></li>
                <li className='p-2 m-2'><span className='text-danger fw-bold'>1</span> Domain</li>
                <li className='p-2 m-2'><span className='text-danger fw-bold'>No</span> Hidden Fees</li>
              </ul>
              <div className='m-5'><button className='btn btn-danger px-3'>Join Now</button></div>
            </div>
            <div className='col rounded shadow-sm p-2 m-2 border border-2 h-100'>
              <p className='m-0 p-0 mt-2 p_md'>ECONOMY</p>
              <p className='fs-2 fw-bold m-0 p-0'>$9.90</p>
              <p className='text-secondary p_sm'>BILLING PER MONTH</p>
              <hr className='mx-5' />
              <ul className='pricng_ul'>
                <li className='p-2 m-2'>Bandwidth: <span className='text-danger fw-bold'>1GB</span></li>
                <li className='p-2 m-2'>Onlinespace: <span className='text-danger fw-bold'>50MB</span></li>
                <li className='p-2 m-2'>Support: <span className='text-danger fw-bold'>No</span></li>
                <li className='p-2 m-2'><span className='text-danger fw-bold'>1</span> Domain</li>
                <li className='p-2 m-2'><span className='text-danger fw-bold'>No</span> Hidden Fees</li>
              </ul>
              <div className='m-5'><button className='btn btn-danger px-3'>Join Now</button></div>
            </div>
          </div>
        </section>
        {/* Section5 End */}


        {/* Section6 Start */}
        <section className='text-center p-2 services container'>
          <h1 className='mt-5'>BEHIND THE PEOPLE</h1>
          <p className='fs-5 text-danger fw-bold'>―――</p>
          <p className='text-secondary mb-5'>It is a long established fact that create category leading brand experiences a reader will <br /> be distracted by the readable content of a page when looking at its layout.</p>
          <div className='row d-flex align-items-center justify-content-center gap-2 m-2 p-2'>
            <div className='col p-2 m-2 h-100'>
              {/* img,name,designation */}
              <img src={btp_1} width='100%' className=' border border-1 rounded' />
              <p className='m-0 p-0 mt-3'>Frank Johnson</p>
              <p className='text-secondary'>CEO</p>
              <hr />
            </div>
            <div className='col p-2 m-2 h-100'>
              {/* img,name,designation */}
              <img src={btp_2} width='100%' className=' border border-1 rounded' />
              <p className='m-0 p-0 mt-3'>Elaine Stclair</p>
              <p className='text-secondary'>DESIGNER</p>
              <hr />
            </div>
            <div className='col p-2 m-2 h-100'>
              {/* img,name,designation */}
              <img src={btp_3} width='100%' className=' border border-1 rounded' />
              <p className='m-0 p-0 mt-3'>Wanda Arthur</p>
              <p className='text-secondary'>DEVELOPER</p>
              <hr />
            </div>
            <div className='col p-2 m-2 h-100'>
              {/* img,name,designation */}
              <img src={btp_4} width='100%' className=' border border-1 rounded' />
              <p className='m-0 p-0 mt-3'>Jashua Stample</p>
              <p className='text-secondary'>Manager</p>
              <hr />
            </div>
          </div>
        </section>
        {/* Section6 End */}


        {/* Section7 Start */}
        <section className='bg-light container-fluid mt-5 p-2 text-center '>
          <div className='container'>
            <h1 className='mt-5'>WORK PROCESS</h1>
            <p className='fs-5 text-danger fw-bold'>―――</p>
            <p className='text-secondary mb-5'>In an ideal world this website wouldn't exist, a client would acknowledge the importance <br /> of having web copy before the Proin vitae ipsum vel ex finibus semper design starts.</p>
            <div className='row'>
              <div className='col-md-4 mt-2'>
                <i class="fa-regular fa-pen-to-square fs-1 text-danger"></i>
                <p className='m-2'>Tell us what you need</p>
                <p className='text-secondary m-1'>The Big Oxmox advised her not to do so.</p>
              </div>
              <div className='col-md-4 mt-2'>
                <i class="fa-regular fa-address-card fs-1 text-danger"></i>
                <p className='m-2'>Get free quotes</p>
                <p className='text-secondary m-1'>Little Blind Text didn't listen.</p>
              </div>
              <div className='col-md-4 mt-2'>
                <i class="fa-solid fa-bullseye fs-1 text-danger"></i>
                <p className='m-2'>Deliver high quality product</p>
                <p className='text-secondary m-1'>When she reached the first hills.</p>
              </div>
            </div>
            <button className='btn btn-danger m-5'>Get Started →</button>
          </div>
        </section>
        {/* Section7 End */}


        {/* Section8 Start */}
        <section className='text-center p-2 services container'>
          <h1 className='mt-5'>WHAT THEY'VE SAID</h1>
          <p className='fs-5 text-danger fw-bold'>―――</p>
          <p className='text-secondary mb-5'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas,<br /> wild Question Marks and devious pulvinar metus molestie sed Semikoli.</p>
          <div className='row d-flex align-items-center justify-content-center gap-2 m-2 p-2'>
            <div className='col'>
              <div className=' border border-2 rounded text-secondary m-2 p-3 position-relative'>
                <img src={user_1} className='rounded-pill w-25 border border-2 position-absolute top-0 start-50 translate-middle' />
                <p className='mt-5 fst-italic'>“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.”</p>
              </div>
              <p>RUBEN REED - <span className='text-secondary'>Charleston</span></p>
            </div>
            <div className='col'>
              <div className=' border border-2 rounded text-secondary m-2 p-3 position-relative'>
                <img src={user_1} className='rounded-pill w-25 border border-2 position-absolute top-0 start-50 translate-middle' />
                <p className='mt-5 fst-italic'>“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.”</p>
              </div>
              <p>RUBEN REED - <span className='text-secondary'>Charleston</span></p>
            </div>
            <div className='col'>
              <div className=' border border-2 rounded text-secondary m-2 p-3 position-relative'>
                <img src={user_1} className='rounded-pill w-25 border border-2 position-absolute top-0 start-50 translate-middle' />
                <p className='mt-5 fst-italic'>“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.”</p>
              </div>
              <p>RUBEN REED - <span className='text-secondary'>Charleston</span></p>
            </div>
          </div>
        </section>
        {/* Section8 End */}


        {/* Section9 Start */}
        <section className='bg_img1'>
          <div className='bg_color1 d-flex align-items-center justify-content-center flex-column gap-3'>
            <h1 className='mt-5 m-0 p-0'>WHAT THEY'VE SAID</h1>
            <p className='fs-5 text-danger fw-bold m-0 p-0'>―――</p>
            <p className='m-0 p-0'>Far far away, behind the word mountains, far from the countries Vokalia<br /> and Consonantia, there live the blind texts.</p>
            <button className='btn btn-light mt-3'>Get Started →</button>
          </div>
        </section>
        {/* Section9 End */}


        {/* Section10 Start */}
        <section className='text-center p-2 services container'>
          <h1 className='mt-5'>BLOG</h1>
          <p className='fs-5 text-danger fw-bold'>―――</p>
          <p className='text-secondary mb-5'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large <br/> language ocean class at a euismod mus ipsum vel ex finibus semper luctus quam.</p>
<div className='row'>
  <div className='col text-start'>
    <img src={blog_1} className='w-100'/>
    <p className='text-secondary mt-2'>UI/UX Design</p>
    <p className='fs-5'>Doing a cross country road trip</p>
    <p className='text-secondary'>She packed her seven versalia, put her initial into the belt and made herself on the way..</p>
<a className='text-danger'>Read More →</a>
  </div>
  <div className='col text-start'>
    <img src={blog_1} className='w-100'/>
    <p className='text-secondary mt-2'>UI/UX Design</p>
    <p className='fs-5'>Doing a cross country road trip</p>
    <p className='text-secondary'>She packed her seven versalia, put her initial into the belt and made herself on the way..</p>
<a className='text-danger'>Read More →</a>
  </div>
  <div className='col text-start'>
    <img src={blog_1} className='w-100'/>
    <p className='text-secondary mt-2'>UI/UX Design</p>
    <p className='fs-5'>Doing a cross country road trip</p>
    <p className='text-secondary'>She packed her seven versalia, put her initial into the belt and made herself on the way..</p>
<a className='text-danger'>Read More →</a>
  </div>
</div>
        </section>
        {/* Section10 End */}


        {/* Section11 Start */}
        <section className='text-center p-2 services container'>
          <h1 className='mt-5'>GET IN TOUCH</h1>
          <p className='fs-5 text-danger fw-bold'>―――</p>
          <p className='text-secondary mb-5'>We thrive when coming up with innovative ideas but also understand that a smart<br/> concept should be supported with faucibus sapien odio measurable results.</p>
<div className='row text-start'>
<div className='col-4'>
  <p>Office Address 1:</p>
  <p className='text-secondary'>4461 Cedar Street Moro, AR 72368</p>
  <p>Office Address 2:</p>
  <p className='text-secondary'>2467 Swick Hill Street <br/>New Orleans, LA 70171</p>

  <p>Working Hours:</p>
  <p className='text-secondary'>9:00AM To 6:00PM</p>
</div>
<div className='col-8'>
<form class="row g-3">
  <div class="my-3 col-md-6">
    <input type="text" class="form-control p-3"  required placeholder='Your name*'/>
  </div>
  <div class="my-3 col-md-6">
    <input type="email" class="form-control p-3" id="inputEmail4" required placeholder='Your email*'/>
  </div>
  <div class="my-3 col-12">
    <input type="text" class="form-control p-3" id="inputAddress" placeholder="Your address: 1234 Main St"/>
  </div>
  <div class="my-3 col-12">
  <textarea class="form-control p-3" id="exampleFormControlTextarea1" rows="3" placeholder='Your message....'></textarea>
</div>
  <div class="mt-0 col-12 text-end">
    <button type="submit" class="btn btn-danger ">Send Message</button>
  </div>
</form>
</div>
  </div>

        </section>
        {/* Section11 End */}


      </main>
      <footer>

        <div className='bg-light d-flex align-items-center justify-content-around p-2'>
<ul className='list-group list-group-horizontal'>
  <li className='list-group-item border border-2 rounded-pill m-2 p-0'><i class="text-secondary p-2 fa-brands fa-facebook"></i></li>
  <li className='list-group-item border border-2 rounded-pill m-2 p-0'><i class="text-secondary p-2 fa-brands fa-twitter"></i></li>
  <li className='list-group-item border border-2 rounded-pill m-2 p-0'><i class="text-secondary p-2 fa-brands fa-linkedin"></i></li>
  <li className='list-group-item border border-2 rounded-pill m-2 p-0'><i class="text-secondary p-2 fa-brands fa-xbox"></i></li>
  <li className='list-group-item border border-2 rounded-pill m-2 p-0'><i class="text-secondary p-2 fa-brands fa-google-plus"></i></li>
</ul>
<ul className='list-group list-group-horizontal'>
<li className='list-group-item border-0 bg-transparent text-secondary'><i class="p-2 fa-solid fa-phone"></i> +91 123 4556 789</li>
<li className='list-group-item border-0 bg-transparent text-secondary'><i class="p-2 fa-solid fa-envelope"></i> Support@info.com</li>
</ul>
        </div>
<div className='bg-dark text-white py-2 d-flex align-items-center justify-content-around'>
<div className='mt-2'>
 <ul className='text-secondary'>
  <li className='mb-2 text-white'>DORSIN</li>
  <li>Home</li>
  <li>About Us</li>
  <li>Career</li>
  <li>Contact Us</li>
 </ul>
</div>
<div className='mt-2'>
 <ul className='text-secondary'>
  <li className='mb-2 text-white'>DORSIN</li>
  <li>Home</li>
  <li>About Us</li>
  <li>Career</li>
  <li>Contact Us</li>
 </ul>
</div>
<div className='mt-2'>
 <ul className='text-secondary'>
  <li className='mb-2 text-white'>DORSIN</li>
  <li>Home</li>
  <li>About Us</li>
  <li>Career</li>
  <li>Contact Us</li>
 </ul>
</div>
<div className='mt-2'>
 <ul className='text-secondary'>
  <li className='mb-2 text-white'>DORSIN</li>
  <li>Home</li>
  <li>About Us</li>
  <li>Career</li>
  <li>Contact Us</li>
 </ul>
</div>
<hr className='m-4'/>
        </div>

        <div className='bg-dark py-2 d-flex align-items-center justify-content-around'>
<p className='text-secondary'>2019 - 2023 © Dorsin - Themesbrand</p>
<img src={payment} width={250}/>
        </div>

      </footer>
    </div>
  );
}

export default App;
