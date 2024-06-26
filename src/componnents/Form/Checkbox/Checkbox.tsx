import React from 'react';

export default function Checkbox() {

  return (
    <div className="input">
      <div className='checkbox'>
        <input type="checkbox" name="صحتك_ذهب" id="health_gold"  />
        <label htmlFor="health_gold" className='HJ_label'>صحتك ذهب</label>
      </div>
      <div className='checkbox'>
        <input type="checkbox" name="ملكية" id="ownership"  />
        <label htmlFor="ownership">ملكية</label> 
      </div>

    </div>
  )
}


// import React from 'react';



// import React, { useState, useEffect } from 'react';
// import './Checkbox.css';

// export default function Checkbox() {
//   const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
//   const [displayText, setDisplayText] = useState('');

//   useEffect(() => {
//     // تحديث النص الذي سيتم عرضه في textarea بناءً على القيم المختارة
//     setDisplayText(selectedOptions.join(', '));
//   }, [selectedOptions]); // تأكد من إضافة selectedOptions كمعلمة للتابع useEffect

//   const handleOptionChange = (event: { target: { checked: boolean; value: string; }; }) => {
//     if (event.target.checked) {
//       setSelectedOptions([...selectedOptions, event.target.value]);
//     } else {
//       setSelectedOptions(selectedOptions.filter(option => option!== event.target.value));
//     }
//   };

//   return (
//     <div className='MA_checkbox'>
//       <div>
//         <textarea readOnly value={displayText} className='textarea' placeholder='البحث عن الماركات بالاسم'></textarea>
//       </div>

//       <div className='box'>
//         <h2 style={{ fontWeight: 400, fontSize: '1rem' }}>اختار الماركات</h2>

//         <label>
//           <input
//             type="checkbox"
//             value="صحتك ذهب"
//             onChange={handleOptionChange}
//           />
//           صحتك ذهب
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             value="أوغارو"
//             onChange={handleOptionChange}
//           />
//           أوغارو
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             value="ملكية"
//             onChange={handleOptionChange}
//           />
//           ملكية
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             value="a vie"
//             onChange={handleOptionChange}
//           />
//           a vie
//         </label>
//       </div>
//     </div>
//   );
// }






