
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CategoryForm.css';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import check from '../../assets/images/button_icon/check.svg'
import { useNavigate, useParams } from 'react-router-dom';


interface FormCategoryProps {
  TitleCategory: string;
}


const CategoryForm: React.FC<FormCategoryProps> = ({TitleCategory}) => {
  const [name, setName] = useState('');
  const [published, setPublished] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [displayText, setDisplayText] = useState('');
  const [data, setData] = useState<TData>([]);

  const navigate = useNavigate();

  const { categoryId } = useParams<{ categoryId: string }>();

  useEffect(() => {
    if (categoryId) {
      axios.get(`http://127.0.0.1:8000/api/category/${categoryId}`)
      .then((response) => {
        setName(response.data.data.name);
        setPublished(response.data.data.published);
        setSelectedOptions(response.data.data.brands_id);
      })
    }
  }, []);

  type TDataitem = {
    id: string;
    name: string;
  }
  type TData = Array<TDataitem>;

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept': "application/json",
    },
  };


  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Accept': "application/json",
        'Content-Type': 'multipart/form-data',
      },
    };

    if (categoryId) {
      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/category/${categoryId}/update`, {
          name: name,
          published: published,
          brand_id: selectedOptions,
          _method: 'PUT'

        },config);

        console.log(response.data);
        alert('تم إضافة الفئة بنجاح!');
        navigate('/categories')
      } catch (error) {
        console.error(error);
        alert('فشلت العملية، يرجى المحاولة مرة أخرى.');
        navigate(`/categories/update-category/${categoryId}`)
      }
    }else{
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/add', {
          name: name,
          published: published,
          brand_id: selectedOptions,
        },config);

        console.log(response.data);
        alert('تم إضافة الفئة بنجاح!');
        
      } catch (error) {
        console.error(error);
        alert('فشلت العملية، يرجى المحاولة مرة أخرى.');
        navigate('/categories/addCategory')
      }
      navigate('/categories')
    }
    
  };
  ///////////////////////////////////////////////////////
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/brands-published").then((res) => setData(res.data.data)
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

  console.log(published);

  return (
    <>
      <form className="MA_form HJ_form_padding HJ_Margin_Add" onSubmit={handleSubmit}>
        <div className="form-header ">{TitleCategory}</div>
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

                  <div className="box">
                    <h2 style={{ fontWeight: 400, fontSize: '1rem' }}>اختار الماركات</h2>
                    {data?.map((row: TDataitem) => (

                      <label>
                        <input
                          type="checkbox"
                          value={row.id}
                          onChange={handleOptionChange}
                        />
                        {row.name}
                      </label>

                    ))}
                  </div>
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

export default CategoryForm
