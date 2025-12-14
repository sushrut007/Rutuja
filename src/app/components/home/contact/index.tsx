"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ContactLinks {
  socialLinks: { title: string; href: string }[];
  contactInfo: { label: string; link: string }[];
}

const Contact = () => {
  const [contactData, setContactData] = useState<ContactLinks | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  /* Fetch contact links */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/page-data.json");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchData();
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };

  /* Submit form */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/nazarerutuja05@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        resetForm();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Contact Me</h2>
            <p className="text-xl text-orange-500">( 05 )</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-7 sm:gap-12">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="label">
                      Name *
                    </label>
                    <input
                      required
                      className="input"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="number" className="label">
                      Phone *
                    </label>
                    <input
                      required
                      className="input"
                      id="number"
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="label">
                    Email *
                  </label>
                  <input
                    required
                    className="input"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label">
                    Message *
                  </label>
                  <textarea
                    required
                    className="input"
                    id="message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {submitted && (
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/icon/success-icon.svg"
                      alt="success-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-secondary">
                      Great! Your message has been sent successfully.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="relative overflow-hidden w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                >
                  <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-300">
                    Send Now
                  </span>
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end">
              {/* Social Links */}
              <div className="flex flex-wrap md:flex-col gap-4 md:gap-6">
                {contactData?.socialLinks?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="text-base sm:text-lg text-secondary hover:text-primary"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-5 lg:gap-11">
                {contactData?.contactInfo?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="text-base lg:text-lg text-black border-b border-black pb-3 hover:text-primary hover:border-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
