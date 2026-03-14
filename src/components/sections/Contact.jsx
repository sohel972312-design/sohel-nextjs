"use client";

import { useState } from "react";
import { SectionBadge, CheckIcon } from "@/lib/shared";

const consultValues = [
  "Smart IT Planning for Better Results",
  "Deep Evaluation of Your Technology Needs",
  "Expert Solutions for Every IT Challenge",
  "24/7 Help and Reliable Ongoing Support",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your name (min 2 chars).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!/^[0-9]{10}$/.test(form.phone)) e.phone = "Please enter a valid 10-digit phone.";
    if (form.message.trim().length < 3) e.message = "Message must be at least 3 characters.";
    return e;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSending(true);
    // Replace with your actual API endpoint or server action
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSent(true);
  };

  return (
    <section className="projectsec commonsec relative" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Form */}
          <div className="bg-[#161616] p-4 xl:p-10 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(at_top_left,var(--green_theme)_0%,var(--black)_50%)] -z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(at_top_right,var(--green_theme)_30%,transparent_70%)] opacity-8 -z-10"></div>
            <div className="mb-6">
              <h2 className="text-white text-4xl font-bold font-['Unbounded'] font-semibold">
                Connect With <span className="text-[#ffc20c]">Us.</span>
              </h2>
            </div>

            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-white text-2xl unbounded_semibold mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <input
                    type="text" name="name" placeholder="Name"
                    value={form.name} onChange={handleChange}
                    className="contact-form-control"
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                  <input
                    type="email" name="email" placeholder="Email"
                    value={form.email} onChange={handleChange}
                    className="contact-form-control"
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                  <input
                    type="text" name="phone" placeholder="Phone"
                    value={form.phone} onChange={handleChange}
                    className="contact-form-control"
                  />
                  {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <div>
                  <textarea
                    name="message" placeholder="Message" rows={4}
                    value={form.message} onChange={handleChange}
                    className="contact-form-control"
                  />
                  {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={sending}
                    className="nav-link greenbtn custbtn inline-block rounded-full medium js-tilt tile disabled:opacity-60"
                  >
                    <span className="inner">
                      <span className="inline-block">{sending ? "Sending..." : "Submit"}</span>
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="bg-[#161616] p-4 xl:p-10 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(at_top_left,var(--green_theme)_0%,var(--black)_50%)] -z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(at_top_right,var(--green_theme)_30%,transparent_70%)] opacity-8 -z-10"></div>
            <SectionBadge label="Contact Us" />
            <div className="flex gap-6 flex-col mt-4">
              <h2 className="text-white text-4xl font-bold font-['Unbounded'] font-semibold">
                Get In Touch <span className="text-[#ffc20c]">With Me.</span>
              </h2>
              <p className="mb-0">Have a project or question? Feel free to reach out anytime here directly.</p>
              <div className="text-lg unbounded_semibold text-white">The Value of Our Consultation Service</div>
              <ul className="feature-list flex flex-col gap-3">
                {consultValues.map((v) => (
                  <li key={v} className="feature-item"><CheckIcon /> {v}</li>
                ))}
              </ul>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Address */}
                <div className="contact-col">
                  <div className="icon-circle">
                    <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#000" />
                      <circle cx="12" cy="10" r="3" stroke="#000" />
                    </svg>
                  </div>
                  <h3 className="text-lg unbounded_semibold text-white mb-1 mt-3">Our Address</h3>
                  <p className="contact-text">
                    <span>Borsad,</span><span>Gujarat — 388540</span>
                  </p>
                </div>
                {/* Phone & Email */}
                <div className="contact-col">
                  <div className="icon-circle">
                    <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#000" />
                    </svg>
                  </div>
                  <h3 className="text-lg unbounded_semibold text-white mb-1 mt-3">Connect With Me</h3>
                  <p className="contact-text">
                    <span>Email: <a className="text_p_clr" href="mailto:sohel@sohelmalek.com">sohel@sohelmalek.com</a></span>
                    <span>Phone: <a className="text_p_clr" href="tel:9723121537">+91 97231 21537</a></span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
