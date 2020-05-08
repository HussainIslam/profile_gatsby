import React from "react"

import Layout from "../components/layout"

import ConStyle from "./page-css/contact.module.css"

const Contact = () => (
  <Layout>
    <h2>Send me a shoutout</h2>
    <form
      action="https://formspree.io/mbjzjngd"
      method="post"
      className={ConStyle.formContainer}
    >
      <div className={ConStyle.inputDiv}>
        <label htmlFor="fullname" className={ConStyle.inputLabel}>
          Full Name:{" "}
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="enter your name"
          className={ConStyle.inputField}
        />
      </div>

      <div className={ConStyle.inputDiv}>
        <label htmlFor="email" className={ConStyle.inputLabel}>
          Email:{" "}
        </label>
        <input
          type="email"
          name="_replyto"
          id="email"
          placeholder="enter your email"
          className={ConStyle.inputField}
        />
      </div>
      <div className={ConStyle.inputDiv}>
        <label htmlFor="message" className={ConStyle.inputLabel}>
          Message:{" "}
        </label>
        <textarea
          name="message"
          id="message"
          rows="10"
          placeholder="your message for me"
          className={ConStyle.inputField}
        />
      </div>

      <div className={ConStyle.buttonContainer}>
        <button type="submit" className={ConStyle.submitButton}>
          Submit
        </button>
        <button type="reset" className={ConStyle.resetButton}>
          Reset
        </button>
      </div>
    </form>
  </Layout>
)

export default Contact
