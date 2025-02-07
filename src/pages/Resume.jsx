import React from "react";
import "./Resume.css";
import "../utils/resume.pdf";

const Resume = () => {
  return (
    <body>
    <div class="resume-container">
        <h1>Pedro Enderica</h1>
        <p class="contact-info">
            1321 NW 193rd Ave, Pembroke Pines, FL 33029 <br/>
            Cell: 305-610-0582 | Email: <a href="mailto:pedro@torstig.us">pedro@torstig.us</a>
        </p>
        <h2>University Of Central Florida - Aerospace Engineering</h2>
        
        <div class="section">
            <h2>Skills and Proficiencies</h2>
            <ul>
                <li>Microsoft Office, specialist in Microsoft Excel</li>
                <li>Mastery in Adobe Suite Photoshop and Lightroom</li>
                <li>Fluent in Spanish and English</li>
                <li>Quick learner</li>
                <li>Cash and large transaction experience</li>
                <li>Attention to detail</li>
                <li>Reports generation and analysis</li>
                <li>Complex problem-solver</li>
                <li>Excellent communication, customer service, and satisfaction</li>
                <li>File/Records and maintenance</li>
                <li>Self-starter</li>
            </ul>
        </div>

        <div class="section">
            <h2>Work Experience</h2>
            <h3>Data Entry Specialist - Newport Vacation Club</h3>
            <p>Sunny Isles Beach, FL (Apr. 2012 - Aug. 2015)</p>
            <ul>
                <li>Organized billing and invoice data, prepared accounts receivable, and generated revenue reports.</li>
                <li>Compiled and documented statistical information for marketing and sales reports.</li>
                <li>Input client information into spreadsheets and company database.</li>
                <li>Coordinated and executed in-depth data entry projects.</li>
                <li>Supervised interns and managed customer service.</li>
            </ul>

            <h3>Paralegal Assistant - Stevens & Goldwyn, P.A.</h3>
            <p>Plantation, FL (June 2018 - Apr. 2019)</p>
            <ul>
                <li>Coordinated with multiple departments regarding document retention.</li>
                <li>Consulted with clients, witnesses, and legal professionals.</li>
                <li>Trained staff on legal practices and firm-wide protocols.</li>
                <li>Produced well-researched legal documents.</li>
                <li>Coordinated efforts for cases involving $100,000.00 settlements.</li>
                <li>Built Excel program for accounting and money tracking for over 1,000 clients.</li>
            </ul>

            <h3>Account Manager - Orlando Philharmonic Orchestra</h3>
            <p>Orlando, FL (Aug. 2019 - Present)</p>
            <ul>
                <li>Assisted in the production of events at OPO-owned venues.</li>
                <li>Supervised operations during events, ensuring safety and security.</li>
                <li>Managed various Orlando Farmer's Market operations.</li>
                <li>Oversaw logistics and transport of goods.</li>
                <li>Composed and analyzed account sheets for company-wide briefings.</li>
            </ul>
        </div>
        <button
              onClick={() =>
                window.open(require("../utils/resume.pdf"), "_blank")
              }
            >
              Download PDF
            </button>
    </div>
    </body>
  );
};

export default Resume;

