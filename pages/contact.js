import { useState } from "react";
import Meta from "@/components/Meta";
import contactStyles from "@/styles/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Replace with your actual form submission logic
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Meta title="Contact" description="Get in touch with us" />

      <div className={contactStyles.container}>
        <main className={contactStyles.main}>
          <h1 className={contactStyles.title}>Contact</h1>

          <form onSubmit={handleSubmit} className={contactStyles.form}>
            <div className={contactStyles.field}>
              <label htmlFor="name" className={contactStyles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={contactStyles.input}
                required
              />
            </div>

            <div className={contactStyles.field}>
              <label htmlFor="email" className={contactStyles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={contactStyles.input}
                required
              />
            </div>

            <div className={contactStyles.field}>
              <label htmlFor="message" className={contactStyles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={contactStyles.textarea}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={contactStyles.submitBtn}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus && (
              <div
                className={`${contactStyles.status} ${
                  submitStatus.includes("success")
                    ? contactStyles.success
                    : contactStyles.error
                }`}
              >
                {submitStatus}
              </div>
            )}
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;
