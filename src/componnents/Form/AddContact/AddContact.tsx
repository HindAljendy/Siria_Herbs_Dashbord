import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import SaveButton from "../Buttons/SaveButton";
import icon from '../../../assets/images/link-icon.png';
import axios from "axios";
import './AddContact.css';

interface Contact {
    email: string;
    phone_number: string;
    adresses: string;
    facebook_link: string;
    instegram_link: string;
    whatsApp_number: string;
    twitter_link: string;
    linkedin_link: string;
    youtube_link: string;
}

interface AddContactProps {
    contactId: string;
}


const AddContact: React.FC<AddContactProps> = ({ contactId = "1" }) => {
    const [contact, setContact] = useState<Contact>({
        email: "",
        phone_number: "",
        adresses: "",
        facebook_link: "",
        instegram_link: "",
        whatsApp_number: "",
        twitter_link: "",
        linkedin_link: "",
        youtube_link: ""
    });

    useEffect(()=>{
            axios.get(`http://127.0.0.1:8000/api/contacts/${contactId}`)
           .then((response) => {
                setContact(response.data.data);
                console.log(response.data.data);
            })
           .catch((error) => {
                console.log(error);
            });
    },[contactId]);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContact(prevContact => ({
            ...prevContact,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", contact.email);
        formData.append("phone_number", contact.phone_number);
        formData.append('adresses', contact.adresses);
        formData.append('facebook_link', contact.facebook_link);
        formData.append('twitter_link', contact.twitter_link);
        formData.append('linkedin_link', contact.linkedin_link);
        formData.append('instegram_link', contact.instegram_link);
        formData.append('whatsApp_number', contact.whatsApp_number);
        formData.append('youtube_link', contact.youtube_link);
        formData.append('_method', 'PUT');

        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/contacts/${contactId}`, formData);
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error updating contact:", error);
        }
    };

    return (
        <div className="AB-container">
            <form className='form' onSubmit={handleSubmit}>
                <div className='input'>
                    <label htmlFor="email"  className="HJ_FontColor_gray"> عناوين بريد جهة الاتصال</label>
                    <textarea name="email" id="email" className='MA_TextArea' value={contact.email} onChange={handleChange}></textarea>
                </div>

                <div className='input'>
                    <label htmlFor="phone_number"  className="HJ_FontColor_gray"> رقم الاتصال</label>
                    <textarea name="phone_number" id="phone_number" className='MA_TextArea' value={contact.phone_number} onChange={handleChange}></textarea>
                </div>

                <div className='input'>
                    <label htmlFor="adresses"  className="HJ_FontColor_gray"> العنوان</label>
                    <textarea name="adresses" id="adresses" className='MA_TextArea' value={contact.adresses} onChange={handleChange}></textarea>
                </div>

                <div className="input">
                    <label htmlFor="facebook_link">فيسبوك-facebook
                    <img src={icon} className="AB_icon" />
                    </label>
                    <input type="url" name="facebook_link" id="facebook_link" value={contact.facebook_link} onChange={handleChange} />
                </div>

                <div className="input">
                    <label htmlFor="instegram_link">إنستغرام-instegram
                    <img src={icon} className="AB_icon" />
                    </label>
                    <input type="url" name="instegram_link" id="instegram_link" value={contact.instegram_link} onChange={handleChange} />
                </div>

                <div className="input">
                    <label htmlFor="whatsApp_number">واتس اب-whatsapp</label>
                    <input type="text" name="whatsApp_number" id="whatsApp_number" value={contact.whatsApp_number} onChange={handleChange} />
                </div>

                <div className="input">
                    <label htmlFor="twitter_link">تويتر-twitter
                    <img src={icon} className="AB_icon" />
                    </label>
                    <input type="url" name="twitter_link" id="twitter_link" value={contact.twitter_link} onChange={handleChange} />
                </div>

                <div className="input">
                    <label htmlFor="linkedin_link">لينكد ان-linkedin
                    <img src={icon} className="AB_icon" />
                    </label>
                    <input type="url" name="linkedin_link" id="linkedin_link" value={contact.linkedin_link} onChange={handleChange} />
                </div>

                <div className="input">
                    <label htmlFor="youtube_link">يوتيوب-youtube
                    <img src={icon} className="AB_icon" />
                    </label>
                    <input type="url" name="youtube_link" id="youtube_link" value={contact.youtube_link} onChange={handleChange} />
                </div>

                <div className="AB_SaveButton">
                    <SaveButton />
                </div>
            </form>
        </div>
    );
};

export default AddContact;







// // import React, { useState } from "react";
// // import TextArea from "../TextArea/TextArea";
// // import SaveButton from "../Buttons/SaveButton";
// // import axios from "axios";
// // import './AddContact.css';

// // export default function AddContact({ contactId }) {
// //     const [contact, setContact] = useState({
        
// //         email: "",
// //         phone_number: "",
// //         adresses: "",
// //         facebook_link: "",
// //         instegram_link: "",
// //         whatsApp_number: "",
// //         twitter_link: "",
// //         linkedin_link: "",
// //         youtube_link: ""
// //     });

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setContact((prevContact) => ({
// //             ...prevContact,
// //             [name]: value
// //         }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.put(`/contacts/${contactId}`, contact);
// //             console.log("Response:", response.data);
// //         } catch (error) {
// //             console.error("Error updating contact:", error);
// //         }
// //     };

// //     return (
// //         <div className="AB-container">
// //             <form className='form' onSubmit={handleSubmit}>
// //                 <TextArea name="عناوين بريد جهة الاتصال " value={contact.adresses} onChange={handleChange} />
// //                 <TextArea name="رقم الاتصال" value={contact.phone_number} onChange={handleChange} />
// //                 <TextArea name="العنوان" value={contact.adresses} onChange={handleChange} />

// //                 <div className="AB_input_facebook">
// //                     <label htmlFor="facebook_link">فيسبوك</label>
// //                     <input type="url" name="facebook_link" id="facebook_link" value={contact.facebook_link} onChange={handleChange} />
// //                 </div>
        
// //                 <div className="AB_input_instagram">
// //                     <label htmlFor="instegram_link">إنستغرام</label>
// //                     <input type="url" name="instegram_link" id="instegram_link" value={contact.instegram_link} onChange={handleChange} />
// //                 </div>
                
// //                 <div className="AB_input_whatsapp">
// //                     <label htmlFor="whatsApp_number">واتس اب</label>
// //                     <input type="tel" name="whatsApp_number" id="whatsApp_number" value={contact.whatsApp_number} onChange={handleChange} />
// //                 </div>
                
// //                 <div className="AB_input_twitter">
// //                     <label htmlFor="twitter_link">تويتر</label>
// //                     <input type="url" name="twitter_link" id="twitter_link" value={contact.twitter_link} onChange={handleChange} />
// //                 </div>
                
// //                 <div className="AB_input_linkedin">
// //                     <label htmlFor="linkedin_link">لينكد ان</label>
// //                     <input type="url" name="linkedin_link" id="linkedin_link" value={contact.linkedin_link} onChange={handleChange} />
// //                 </div>
                
// //                 <div className="AB_input_youtupe">
// //                     <label htmlFor="youtube_link">يوتيوب</label>
// //                     <input type="url" name="youtube_link" id="youtube_link" value={contact.youtube_link} onChange={handleChange} />
// //                 </div>
                
// //                 <div className="SaveButton">
// //                     <SaveButton />
// //                 </div>
// //             </form>
// //         </div>
// //     )
// // }

// import React from "react";
// import TextArea from "../TextArea/TextArea";
// import SaveButton from "../Buttons/SaveButton";
// import icon from '../../../assets/images/link-icon.png';
// import './AddContact.css';

// export default function AddContact() {
//     return (
//         <div className="AB-container">
//             <form className='form'>
                
//                 <TextArea name="عناوين بريد جهة الاتصال "/>
//                 <TextArea name="رقم الاتصال"/>
//                 <TextArea name="العنوان"/>

//                 <div className="AB_input_facebook">
//                     <label htmlFor="facebook">
//                     فيسبوك-facebook
//                     <img src={icon}   className="AB_icon"/>
//                     </label>
//                     <input type="url" name="facebook" id="facebook" />
//                 </div>

//                 <div className="AB_input_instagram">
//                     <label htmlFor="instagram">
                    
//                     إنستغرام-instagram
//                     <img src={icon} className="AB_icon"/>
//                     </label>
//                     <input type="url"   name="instagram" id="instagram" />
//                 </div>

//                 <div className="AB_input_whatsapp">
//                     <label htmlFor="whatsapp">
//                     واتس اب-whatsapp
//                     </label>
//                     <input type="tel" name="whatsapp" id="whatsapp" /> 
//                 </div>

//                 <div className="AB_input_twitter">
//                     <label htmlFor="twitter">
//                     لينكد ان-twitter
//                     <img src={icon} className="AB_icon"/>
//                     </label>
//                     <input type="url" name="twitter" id="twitter" />
//                 </div>

//                 <div className="AB_input_linkedin">
//                     <label htmlFor="linkedin">
//                     لينكد ان-linkedin
//                     <img src={icon} className="AB_icon"/>
//                     </label>
//                     <input type="url" name="linkedin" id="linkedin" />
//                 </div>

//                 <div className="AB_input_youtube">
//                     <label htmlFor="youtube">
//                 يوتيوب-youtube
//                 <img src={icon} className="AB_icon"/>
//                     </label>
//                     <input type="url" name="youtube" id="youtube" />
//                 </div>

//                 <div className="AB_SaveButton">
//                     <SaveButton />
//                     </div>
//             </form>
//         </div>
//     );
// }
