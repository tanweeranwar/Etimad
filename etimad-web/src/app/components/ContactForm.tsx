"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

type ContactFormData = {
  name: string;
  company: string;
  email: string;
  country: string;
  service: string;
  message: string;
};

const initialForm: ContactFormData = {
  name: "",
  company: "",
  email: "",
  country: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(
    field: keyof ContactFormData,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setStatus("submitting");

  try {
    const response = await fetch("http://localhost:5062/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error("Failed to submit enquiry.");
    }

    setStatus("success");
    setForm(initialForm);
  } catch (error) {
    console.error("Lead submission failed:", error);
    setStatus("error");
  }
}

  if (status === "success") {
    return (
      <div className="contact-success">
        <span className="contact-success-mark">✓</span>

        <h3>
          Thank you for
          <br />
          reaching <span>out.</span>
        </h3>

        <p>
          Your enquiry has been received. Our team will review your
          requirement and get back to you shortly.
        </p>

        <button
          type="button"
          className="contact-reset"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry <span>↗</span>
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Your name</label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Smith"
            autoComplete="name"
            value={form.name}
            onChange={(event) =>
              handleChange("name", event.target.value)
            }
            required
            disabled={status === "submitting"}
          />
        </div>

        <div className="form-field">
          <label htmlFor="company">
            Company <span className="optional">(optional)</span>
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company name"
            autoComplete="organization"
            value={form.company}
            onChange={(event) =>
              handleChange("company", event.target.value)
            }
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">Business email</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            value={form.email}
            onChange={(event) =>
              handleChange("email", event.target.value)
            }
            required
            disabled={status === "submitting"}
          />
        </div>

        <div className="form-field">
          <label htmlFor="country">Country</label>

          <select
            id="country"
            name="country"
            value={form.country}
            onChange={(event) =>
              handleChange("country", event.target.value)
            }
            required
            disabled={status === "submitting"}
          >
            <option value="" disabled>
              Select country
            </option>

            <option value="india">India</option>
            <option value="uae">United Arab Emirates</option>
            <option value="saudi-arabia">Saudi Arabia</option>
            <option value="qatar">Qatar</option>
            <option value="oman">Oman</option>
            <option value="bahrain">Bahrain</option>
            <option value="kuwait">Kuwait</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="service">
          What can we help with?
        </label>

        <select
          id="service"
          name="service"
          value={form.service}
          onChange={(event) =>
            handleChange("service", event.target.value)
          }
          required
          disabled={status === "submitting"}
        >
          <option value="" disabled>
            Select an area
          </option>

          <option value="software-engineering">
            Software Engineering
          </option>

          <option value="ai-automation">
            AI &amp; Automation
          </option>

          <option value="cloud">
            Cloud Solutions
          </option>

          <option value="cybersecurity">
            Cybersecurity
          </option>

          <option value="enterprise-applications">
            Enterprise Applications
          </option>

          <option value="data-analytics">
            Data &amp; Analytics
          </option>

          <option value="saas">
            SaaS / Product Development
          </option>

          <option value="consulting">
            Technology Consulting
          </option>

          <option value="other">
            Something else
          </option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="message">
          Tell us about your requirement
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="What are you trying to build, improve or solve?"
          value={form.message}
          onChange={(event) =>
            handleChange("message", event.target.value)
          }
          required
          disabled={status === "submitting"}
        />
      </div>

      {status === "error" && (
        <p className="form-error">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        className="contact-submit"
        disabled={status === "submitting"}
      >
        <span>
          {status === "submitting"
            ? "Sending..."
            : "Start a conversation"}
        </span>

        <span>
          {status === "submitting" ? "..." : "↗"}
        </span>
      </button>

      <p className="form-note">
        Your information will only be used to respond to your enquiry.
      </p>
    </form>
  );
}