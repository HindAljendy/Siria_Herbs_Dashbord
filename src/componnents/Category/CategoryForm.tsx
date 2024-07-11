
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CategoryForm.css';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import check from '../../assets/images/button_icon/check.svg'
import BigNavigationLinks_Categories from '../BigNavigationLinks/BigNavigationLinks_Categories';

export default function CategoryForm() {

  const [name, setName] = useState('');
  const [published, setPublished] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [displayText, setDisplayText] = useState('');
  const [data, setData] = useState<TData>([]);

  type TDataitem = {
    id?: number;
    name?: string;
    published?: boolean;
    brands_name: string[];
    products_count: number;
  }
  type TData = Array<TDataitem>;

  const token = localStorage.getItem("token");


  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const selectedBrandIds = selectedOptions.map((option) => {
        if (option === 'صحتك ذهب') {
          return 1;
        } else if (option === 'أوغارو') {
          return 2;
        } else if (option === 'ملكية') {
          return 3;
        } else if (option === 'a vie') {
          return 4;
        }
        return null;
      });

      const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
    };

      const response = await axios.post('http://127.0.0.1:8000/api/add', {
        name,
        published,
        brand_id: selectedBrandIds,
      },config);
      console.log(response.data.data.data);
      alert('تم إضافة الفئة بنجاح!');
    } catch (error) {
      console.error(error);
      alert('فشلت العملية، يرجى المحاولة مرة أخرى.');
    }
  };
  ///////////////////////////////////////////////////////
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categorys").then((res) => setData(res.data.data.data)
    ).catch((error) => console.log(error))
  }, []);

  ///////////////////////////////////////////////////////
  useEffect(() => {
    setDisplayText(selectedOptions.join(', '));
  }, [selectedOptions]);

  const handleOptionChange = (event: { target: { checked: boolean; value: string } }) => {
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, event.target.value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== event.target.value));
    }
  };

  return (
    <>
      <BigNavigationLinks_Categories
        navigateMain='  أضف فئة'
        navigateLinkMain='الواجهة الرئيسية'
        navigateLinkSubmain=' الفئات'
        navigateSubmain='اضافة '

      />
      <form className="MA_form HJ_form_padding HJ_Margin_Add" onSubmit={handleSubmit}>
        <div className="form-header ">إضافة فئة إلى النظام</div>
        <div className="input">
          <label htmlFor="name">الاسم </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="name_input"
            placeholder="اكتب اسم الفئة"
          />
        </div>
        <div>
          <label htmlFor="published">هل هي مدرجة؟</label>
          <select
            id="published"
            value={published ? 'true' : 'false'}
            onChange={(e) => setPublished(e.target.value === 'true')}
            required
          >
            <option value="">اختر...</option>
            <option value="true">نعم</option>
            <option value="false">لا</option>
          </select>
        </div>

        <div>
          <label htmlFor="name" style={{ marginBottom: '10px' }}>الماركة</label>
          <Accordion className="accordion">
            <Accordion.Item eventKey='0'>
              <Accordion.Header >اختار الماركة</Accordion.Header>
              <Accordion.Body>
                <div className="MA_checkbox">
                  <div>
                    <textarea
                      readOnly
                      value={displayText}
                      className="textarea"
                      placeholder="البحث عن الماركات بالاسم"
                    ></textarea>
                  </div>

                  {data?.map((row: TDataitem) => (
                    <div className="box">
                      <h2 style={{ fontWeight: 400, fontSize: '1rem' }}>اختار الماركات</h2>
                      {row.brands_name.map((brand: string) => (
                        <label>
                          <input
                            type="checkbox"
                            value={brand}
                            onChange={handleOptionChange}
                          />
                          {brand}
                        </label>
                      ))}
                    </div>
                  ))}
                </div>
              </Accordion.Body>

            </Accordion.Item>

          </Accordion>
          <ul>
            {selectedOptions.map((option, index) => (
              <li key={index}> <img src={check} alt="check" style={{ marginLeft: '0.9rem', width: '1.25rem' }} />
                {option}

              </li>
            ))}
          </ul>
        </div>

        <div className='MA_Button_Space'>
          <button type="submit" className="submit_button">
            حفظ
          </button>

        </div>




      </form>
    </>
  );
}

