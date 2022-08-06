import React from "react";
// import { validateEmail } from "../../utils/helpers";

function Contact() {
//     const [formState, setFormState] = useState({ name: '', email: '', message: ''});
//     const { name, email, message } = formState;
//     const [errorMessage, setErrorMessage] = useState('');
//     function handleChange(e) {
//         if (e.target.name === 'email') {
//             const isValid = validateEmail(e.target.value);
//             console.log(isValid);
//             if (!isValid) {
//                 setErrorMessage('Your email is invalid.');
//             } else {
//                 setErrorMessage('');
//             }
//         } else {
//             if (!e.target.value.length) {
//                 setErrorMessage(`${e.target.name} is required.`);
//             } else {
//                 setErrorMessage('');
//             }
//         }
//         if (!errorMessage) {
//             setFormState({ ...formState, [e.target.name]: e.target.value })
//         }
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(formState);
//     }
// return (
    //         <section>
    //             <div className="center">
    //                 <h2 className="page-header">Contact Me</h2>
    //             </div>
    //             <div>
    //             <form id="contact-form" onSubmit={handleSubmit}>
    //                 <div>
    //                     <label htmlFor="name">Name:</label>
    //                     <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
    //                 </div>
    //                 <div>
    //                     <label htmlFor="email">Email address:</label>
    //                     <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
    //                 </div>
    //                 <div>
    //                     <label htmlFor="message">Message:</label>
    //                     <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
    //                     {errorMessage && (
    //                         <div>
    //                             <p className="error-text">{errorMessage}</p>
    //                         </div>
    //                     )}
    //                 </div>
    //                 <button data-testid="button" type="submit">Submit</button>
    //             </form>
    //             </div>
    //         </section>
    return (
        <section>
            <div className="center">
                <h2 className="page-header">Contact Me</h2>
            </div>
            <div className="center">
            <form className='center' id="contact-form">
                <div>
                    <h4>Phone Number:</h4>
                    <a href='tel:6155790520'>615-579-0520</a>
                    <h4>Email:</h4>
                    <a href="email:jvit85@gmail.com">jvit85@gmail</a>
                </div>
            </form>
            </div>
        </section>
    );
}

export default Contact;