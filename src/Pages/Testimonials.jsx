// src/pages/DiagnosticServices.js
import React from 'react';

const DiagnosticServices = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center my-8">Our Diagnostic Services</h1>

      <section className="services-categories">
        <h2 className="text-3xl font-semibold mb-4">Service Categories</h2>
        <div className="tabs tabs-boxed">
          <a className="tab tab-active">Blood Tests</a>
          <a className="tab">Imaging Services</a>
          <a className="tab">Pathology</a>
          <a className="tab">Radiology</a>
        </div>
      </section>

      <section className="services-details mt-8">
        <h2 className="text-3xl font-semibold mb-4">Common Diagnostic Tests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">CBC (Complete Blood Count)</h3>
              <p>A vital test to check overall health.</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">MRI Scan</h3>
              <p>High-resolution images for diagnosing a wide range of conditions.</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">ECG</h3>
              <p>Monitoring heart health.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faqs mt-8">
        <h2 className="text-3xl font-semibold mb-4">FAQs about Diagnostic Tests</h2>
        <div className="collapse collapse-arrow bg-base-100">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            How often should I get a full blood test?
          </div>
          <div className="collapse-content">
            <p>It's recommended annually for regular checkups.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 mt-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            Do I need an appointment for an MRI?
          </div>
          <div className="collapse-content">
            <p>Yes, an appointment is necessary for scheduling.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiagnosticServices;
