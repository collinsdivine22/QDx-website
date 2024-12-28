

import React from 'react';

function Services() {
  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Our Services</h1>
      <p className="text-center">
        At <strong>QDX Diagnostic Center</strong>, we are dedicated to providing comprehensive and accurate diagnostic services to meet the diverse healthcare needs of our patients. Our state-of-the-art equipment and highly skilled professionals ensure reliable results to support effective treatment plans.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2 className="text-secondary">1. Ultrasound Imaging</h2>
          <ul>
            <li><strong>Obstetric Ultrasound:</strong> Routine and 3D/4D scans for pregnancy monitoring.</li>
            <li><strong>Gynecological Ultrasound:</strong> Assessing reproductive health for women.</li>
            <li><strong>Abdominal Ultrasound:</strong> Imaging for the liver, kidneys, and abdominal organs.</li>
            <li><strong>Musculoskeletal Ultrasound:</strong> Imaging of muscles, tendons, and joints.</li>
            <li><strong>Vascular Ultrasound:</strong> Monitoring blood flow and diagnosing vascular conditions.</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h2 className="text-secondary">2. Laboratory Testing</h2>
          <ul>
            <li><strong>Blood Tests:</strong> Comprehensive blood work including cholesterol and diabetes markers.</li>
            <li><strong>Urine Analysis:</strong> Testing for urinary tract infections and kidney function.</li>
            <li><strong>Specialized Tests:</strong> Hormone levels, pregnancy tests, and infection screenings.</li>
            <li><strong>Microbiology Testing:</strong> Identifying bacterial and viral infections through cultures.</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h2 className="text-secondary">3. Radiology Services</h2>
          <ul>
            <li><strong>X-ray Imaging:</strong> Diagnosing fractures, infections, and lung conditions.</li>
            <li><strong>CT Scans:</strong> Advanced imaging for detailed cross-sectional views.</li>
            <li><strong>MRI Scans:</strong> Non-invasive imaging of soft tissues, muscles, and organs.</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h2 className="text-secondary">4. Preventive Health Screenings</h2>
          <ul>
            <li><strong>Wellness Check-ups:</strong> Tailored health assessments for early detection of diseases.</li>
            <li><strong>Annual Screenings:</strong> Regular programs for early disease detection.</li>
            <li><strong>Cardiac Screenings:</strong> Testing for heart conditions including ECGs and stress tests.</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h2 className="text-secondary">5. Women’s Health Services</h2>
          <ul>
            <li><strong>Breast Cancer Screening:</strong> Mammography and ultrasound for early detection.</li>
            <li><strong>Fertility Assessments:</strong> Ultrasound and blood tests for reproductive health.</li>
            <li><strong>Pap Smear & HPV Testing:</strong> Early detection of cervical abnormalities.</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h2 className="text-secondary">6. Pediatric Diagnostics</h2>
          <ul>
            <li><strong>Child Health Screening:</strong> Pediatric imaging and testing to monitor health.</li>
            <li><strong>Growth Assessments:</strong> Monitoring growth parameters to ensure development.</li>
            <li><strong>Vaccination Services:</strong> Keeping children on track with vaccinations.</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h2 className="text-secondary">7. Corporate Health Check-ups</h2>
          <ul>
            <li><strong>Employee Wellness Programs:</strong> Tailored health assessments for companies.</li>
            <li><strong>Occupational Health Services:</strong> Job-related medical assessments.</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h2 className="text-secondary">8. Specialized Diagnostic Procedures</h2>
          <ul>
            <li><strong>ECGs & Stress Testing:</strong> Heart health assessments through specialized testing.</li>
            <li><strong>Biopsy Services:</strong> Testing for cancers and other abnormalities.</li>
            <li><strong>Endoscopy:</strong> Examination of the digestive tract and internal systems.</li>
          </ul>
        </div>
      </div>

      <p className="text-center mt-4">
        For more information or to schedule an appointment, feel free to contact us. We’re here to support your health journey with reliable diagnostics and compassionate care.
      </p>
    </div>
  );
}

export default Services;

