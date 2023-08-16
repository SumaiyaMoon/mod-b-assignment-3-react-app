import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

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
          <div className='row mt-5'>
            <div className='col d-flex align-items-center justigy-content-center flex-column gap-3'>
              <i class="fa-regular fa-gem p-2 "></i>
              <h6>Digital Design</h6>
              <p className='text-secondary m-2'>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
            </div>
            <div className='col d-flex align-items-center justigy-content-center flex-column gap-3'>
              <i class="fa-solid fa-comments p-2"></i>
              <h6>Unlimited Colors</h6>
              <p className='text-secondary m-2'>Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.</p>
            </div>
            <div className='col d-flex align-items-center justigy-content-center flex-column gap-3'>
              <i class="fa-brands fa-connectdevelop p-2"></i>
              <h6>Strategy Solutions</h6>
              <p className='text-secondary m-2'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
            </div>
          </div>
          <div className='row '>
            <div className='col d-flex align-items-center justigy-content-center flex-column gap-3'>
              <i class="fa-brands fa-react p-2"></i>
              <h6>Digital Design</h6>
              <p className='text-secondary m-2'>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
            </div>
            <div className='col d-flex align-items-center justigy-content-center flex-column gap-3'>
              <i class="fa-regular fa-newspaper p-2"></i>
              <h6>Unlimited Colors</h6>
              <p className='text-secondary m-2'>Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.</p>
            </div>
            <div className='col d-flex align-items-center justigy-content-center flex-column gap-3'>
              <i class="fa-regular fa-paper-plane p-2"></i>
              <h6>Strategy Solutions</h6>
              <p className='text-secondary m-2'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
            </div>

          </div>
        </section>
        {/* Section2 End */}


        {/* Section3 Start */}
        <section className='bg-light container-fluid mt-5 p-5 text-left'>
          <div className='row p-5'>
            <div className='col'>
              <div className='d-flex align-items-center justify-content-center flex-column gap-3'>
                <h4 className='mt-5'>A digital web design studio creating modern & engaging online experiences</h4>
                <p className='text-secondary'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <ul className='me-2 sec_three_ul'>
                  <li className='py-2'><span>We put a lot of effort in design.</span></li>
                  <li className='py-2'><span>The most important ingredient of successful website.</span></li>
                  <li className='py-2'><span>Sed ut perspiciatis unde omnis iste natus error sit.</span></li>
                  <li className='py-2'><span>Submit Your Organization.</span></li>
                </ul>
              </div>
              <button className='btn btn-danger text-left'>Learn More →</button>
            </div>
            <div className='col mt-5'><img src='http://dorsin.react.themesbrand.com/assets/images/online-world.svg' width='500px' /></div>
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
          <p className='text-secondary mb-5'>It is a long established fact that create category leading brand experiences a reader will <br/> be distracted by the readable content of a page when looking at its layout.</p>
          <div className='row d-flex align-items-center justify-content-center gap-2 m-2 p-2'>
            <div className='col rounded shadow-lg p-2 m-2 border border-2 h-100'>
              {/* img,name,designation */}
            </div>
            <div className='col rounded shadow-lg p-2 m-2 border border-2 h-100'>
              {/* img,name,designation */}
            </div>
            <div className='col rounded shadow-lg p-2 m-2 border border-2 h-100'>
              {/* img,name,designation */}
            </div>
            <div className='col rounded shadow-lg p-2 m-2 border border-2 h-100'>
              {/* img,name,designation */}
            </div>
          </div>
        </section>
        {/* Section6 End */}


        {/* Section7 Start */}
        <section>

        </section>
        {/* Section7 End */}


        {/* Section8 Start */}
        <section>

        </section>
        {/* Section8 End */}


        {/* Section9 Start */}
        <section>

        </section>
        {/* Section9 End */}


        {/* Section10 Start */}
        <section>

        </section>
        {/* Section10 End */}


        {/* Section11 Start */}
        <section>

        </section>
        {/* Section11 End */}


      </main>
      <footer></footer>
    </div>
  );
}

export default App;
