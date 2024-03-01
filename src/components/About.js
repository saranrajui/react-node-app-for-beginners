import React, { useEffect, useRef, useState } from 'react'


function About() {


  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setError] = React.useState();

  useEffect(() => {
    console.log("inside useeffect", formData);
    console.log("issubmitted", isSubmitted);
  }, [formData, isSubmitted]);

  const handleInputChange = (e) => {
    const {name, value} = e?.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const doSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted((prevState) => true);

    if (validateForm()) {
      console.log("formData", formData);
    } else {
      // Invalid form
    }
  }


  const validateForm = () => {
    let isFormValid = true;
    let thisErrors = {};

    if (!formData.name) {
      thisErrors.name = 'Name is required!'
      isFormValid = false;
    }

    if (!formData.email.trim()) {
      thisErrors.email = 'Email is required!'
      isFormValid = false;
    } 
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)){
      thisErrors.email = 'Invalid Email Format!'
      isFormValid = false;
    }

    if (!formData.message) {
      thisErrors.message = 'Message is required!'
      isFormValid = false;
    }

    setError(thisErrors);
    return isFormValid;
  }

  const isFormValidFinally = () => errors && Object.keys(errors).length === 0;
  console.log("isFormValidFinally", isFormValidFinally())
  const getStringified = () => {
    return JSON.stringify(formData)
  }


  console.log("errors", errors);
  console.log("FromData", formData);

  const doValidityCheck =(e) => {
    console.log("eeee", e?.target);
    console.log("errors", errors);
    validateForm(); 
  }


  return (
    <>
      <div className='col-md-6'>
        <section>
          <div className='title'>
            <h3>About <i>Me!</i></h3>
          </div>
          <div className='content'>
            <p>"Hello, I'm Saran Raj, a motivated and passionate individual with a strong interest in technology and software development. I strive to combine the art of design with the art of programming to create innovative and user-friendly solutions. With a background in FullStack development, I have experience in various technologies such as React.js, Node.js, and Angular.</p>

            <p>I believe in staying up-to-date with the latest trends and technologies in the industry. I am constantly learning and improving my skills to deliver high-quality and efficient software solutions. I have a strong problem-solving mindset and enjoy tackling challenges to find creative solutions.</p>

            <p>Throughout my career, I have had the opportunity to work with diverse teams and contribute to the success of various projects. I am a collaborative team player who values open communication and cooperation. I am always eager to learn from others and share my knowledge and experien</p>

            <p>Aside from my technical skills, I also possess excellent communication and interpersonal skills, allowing me to effectively collaborate with clients, stakeholders, and team members. I am dedicated, detail-oriented, and committed to delivering projects on time and within budg</p>

            <p>In my free time, I enjoy exploring new technologies, reading tech blogs, and engaging in online communities to stay connected with the ever-evolving tech landscape. I am passionate about making a difference through technology and contributing to the growth and success of organizatio

              Thank you for taking the time to learn a bit about me. If you have any further questions or would like to connect, please feel free to reach out. I look forward to new opportunities and collaborations in the exciting world of software development!"</p>
          </div>
        </section>
      </div>
      <div className='col-md-6'>
        <section >
          <code>
            {isSubmitted && getStringified()}
          </code>

        </section>
        <section>
          <div className='form'>
            <form id='contact-us' onSubmit={doSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' value={formData?.name} className="form-control" 
                onChange={(e) => handleInputChange(e)} 
                onBlur={ (e) => doValidityCheck(e) }
                
                />
                {isSubmitted && errors?.name && <div className="alert alert-danger" role="alert">
                  {errors.name}
                </div>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' className="form-control" value={formData.email} 
                onChange={(e) => handleInputChange(e)} 
                onBlur={ (e) => doValidityCheck(e) }
                />
                {isSubmitted && errors?.email && <div className="alert alert-danger" role="alert">
                  {errors.email}
                </div>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input type="text" name='message' className="form-control" value={formData.message} 
                onChange={(e) => handleInputChange(e)} 
                onBlur={ (e) => doValidityCheck(e) }
                />
                {isSubmitted && errors?.message && <div className="alert alert-danger" role="alert">
                  {errors.message}
                </div>}
              </div>
              <button type="submit" className="btn btn-primary" disabled={false} onClick={doSubmit}>Send</button>
            </form>
          </div>
        </section>
      </div>

    </>
  )
}

export default About