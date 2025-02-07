// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  return (
    <div className="container pt-4">
      <p>
        Hey guys! Thanks for checking out my portfolio. I'm an aspiring full stack developer and
        this is my first project using React and Bootstrap 5. I hold a degree from the University of Central Florida
        in Aerospace Engineering and I'm currently enrolled in the UCF Coding Bootcamp. Professionally I've been all over. 
        As an engineer, I've worked at Seimens Gamesa Renewable Energy data engineering for wind turbines and working with SQL engineers to
        create a clean data pipeline. </p>
<p>
        I then took a position at Deloitte as a technology consultant. I worked with our UK team to create a feasability study for cyrpto
        currency and blockchain technology and how governments could implement it. I also worked on a lot of other really boring projects that
        was the reason I ultimately left in 2021.
</p><p>
        More recently I've been in South Florida where I started a boutique tech consulting firm. We specialize in helping small businesses
        implement technology solutions to help them grow. Interesting projects include a series of crypto mining farms 
        using 100% nuclear power from the Turkey Point Nuclear Power Plant, a carwash chain that needed a new POS system and a networking
        overhaul, and training a team of technicians to install and maintain fully-automatic coffee machines for a medium sized coffee chain,
        Cali Coffee.

       
      </p>
      <p> I love problem solving and I'm always looking for new challenges. I'm currently looking for a full-time position as a full stack developer
        and I'm open to any opportunities. I'm also available for freelance work. Please feel free to reach out to me at
        <a href="mailto: pedro@torstig.us"> pedro@torstig.us</a></p>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Skills</h3>
                <p className="lead mb-0">
                  Excel, Python, SQL, HTML, CSS, JavaScript, React, Node.js, Express, MySQL, Git, AWS, Bootstrap, Figma, Adobe Creative Suite, Canva
                </p>
                <p className="p-3">(Learning is one of my greatest skills)</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Education</h3>
                <p className="lead mb-0">
                  University of Central Florida - B.S. Aerospace Engineering
                </p>
                <p className="p-3">(2015-2020)</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Positions Available to Fill</h3>
                <p className="lead mb-0">
                  Full Stack Developer, Back End Developer, Data Engineer, Data Analyst, Technology Consultant, Anything in F1
                </p>
                <p>(Please don't reach out if you are a defense contractor)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
