import React, { useEffect, useState } from 'react';
// import SaveButton from '../Form/Buttons/SaveButton'
// import Checkbox from '../Form/Checkbox/Checkbox'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CategoryForm.css'

import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';

export default function CategoryForm() {

  const [name, setName] = useState('');
  const [published, setPublished] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [displayText, setDisplayText] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
  
    try {
      const selectedBrandIds = selectedOptions.map((option) => {
       
        if (option === "صحتك ذهب") {
          return 1; 
        } else if (option === "أوغارو") {
          return 2;
        } else if (option === "ملكية") {
          return 3;
        } else if (option === "a vie") {
          return 4;
        }
        
        return null;
      });
  
      const response = await axios.post("http://127.0.0.1:8000/api/add", {
        name,
        published,
        brand_id: selectedBrandIds,
      });
      console.log(response.data);
      alert("تم إضافة الفئة بنجاح!");
    } catch (error) {
      console.error(error);
      alert("فشلت العملية، يرجى المحاولة مرة أخرى.");
    }
  };


  useEffect(() => {
    
    setDisplayText(selectedOptions.join(', '));
  }, [selectedOptions]); 

  const handleOptionChange = (event: { target: { checked: boolean; value: string; }; }) => {
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, event.target.value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option!== event.target.value));
    }
  };
  
 
  return (
    <>
    <form className='MA_form' onSubmit={handleSubmit}>
      <div className='form-header' >إضافة فئة إلى النظام</div>
      <div className='input'>
        <label htmlFor="name">الاسم :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='name_input'
            placeholder='اكتب اسم الفئة'
          />
       
      </div>
      <div>
        <label htmlFor="published">هل هي مدرجة؟</label>
        <select
          id="published"
          value={published? 'true' : 'false'}
          onChange={(e) => setPublished(e.target.value === 'true')}
          required
        >
          <option value="">اختر...</option>
          <option value="true">نعم</option>
          <option value="false">لا</option>
        </select>
      </div>
     
      <label htmlFor="name">الماركة</label>
      <Accordion className="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>اختار الماركة</Accordion.Header>
          <Accordion.Body>
          <div className='MA_checkbox'>
                <div>
                  <textarea readOnly value={displayText} className='textarea' placeholder='البحث عن الماركات بالاسم'></textarea>
                </div>

                <div className='box'>
                  <h2 style={{ fontWeight: 400, fontSize: '1rem' }}>اختار الماركات</h2>

                  <label>
                    <input
                      type="checkbox"
                      value="صحتك ذهب"
                      onChange={handleOptionChange}
                    />
                    صحتك ذهب
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      value="أوغارو"
                      onChange={handleOptionChange}
                    />
                    أوغارو
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="ملكية"
                      onChange={handleOptionChange}
                    />
                    ملكية
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="a vie"
                      onChange={handleOptionChange}
                    />
                    a vie
                  </label>
                </div>
              </div>
            {/* <SaveButton/>  */}
          </Accordion.Body>
        </Accordion.Item>
        
      </Accordion>
      <button type="submit" className='submit_button'> حفظ</button>
    </form>
    </>
  )
}
