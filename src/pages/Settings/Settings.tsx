import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SaveButton from '../../componnents/Form/Buttons/SaveButton';
import NavigationLinks from '../../componnents/NavigationLinks/NavigationLinks';
import { Outlet } from 'react-router-dom';
import { FaRegTrashCan } from 'react-icons/fa6';
import './Settings.css'

interface Settings {
  title: string;
  description: string;
  meta_pixel_id: string;
  google_analystic_id: string;
  tags: string;
  website_icon: File | null;
  website_logo: File | null;
}

const Settings = () => {
  const [settings, setSettings] = useState<Settings>({
    title: '',
    description: '',
    meta_pixel_id: '',
    google_analystic_id: '',
    tags: '',
    website_icon: null,
    website_logo: null,
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/setting/1`)
      .then(response => {
        const data = response.data.data;
        setSettings({
          title: data.title,
          description: data.description,
          meta_pixel_id: data.meta_pixel_id,
          google_analystic_id: data.google_analystic_id,
          tags: data.tags,
          website_icon: data.website_icon,
          website_logo: data.website_logo
        });
      })
      .catch(error => {
        console.error('There was an error fetching the settings!', error);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', settings.title);
    formData.append('description', settings.description);
    formData.append('meta_pixel_id', settings.meta_pixel_id);
    formData.append('google_analystic_id', settings.google_analystic_id);
    formData.append('tags', settings.tags);
    if (settings.website_icon instanceof File) {
      formData.append('website_icon', settings.website_icon);
    }
    if (settings.website_logo instanceof File) {
      formData.append('website_logo', settings.website_logo);
    }
    formData.append('_method', 'PUT');

    axios.post(`http://127.0.0.1:8000/api/setting/1/update`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log('Settings updated successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error updating the settings!', error);
      });
  };

  const [websiteIconName, setWebsiteIconName] = useState<string>(' اختر ملف');
  const handleWebsiteIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setWebsiteIconName(file.name);
      setSettings({ ...settings, website_icon: file });
      console.log(settings);
    } else {
      setWebsiteIconName('لم يتم اختيار صورة');
    }
  };

  const triggerWebsiteIconInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const fileInputElement = document.getElementById('website_icon') as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };

  const [websiteLogoName, setWebsiteLogoName] = useState<string>(' اختر ملف');
  const handleWebsiteLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setWebsiteLogoName(file.name);
      setSettings({ ...settings, website_logo: file });
      console.log(settings);
    } else {
      setWebsiteLogoName('لم يتم اختيار صورة');
    }
  };

  const triggerWebsiteLogoInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const fileInputElement = document.getElementById('website_logo') as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };
  return (
    <>
      <Outlet />
      <div className="na-nav">
        <NavigationLinks
          navigateMain='إعدادات النظام'
          navigateLink=' لوحة التحكم' navigateSubmain='الإعدادات'
        />
      </div>

      <form className="form" onSubmit={handleSubmit}>

        <div className='container input'>
          <label htmlFor='website_icon'>أيقونة الموقع الخاص بالمتصفح</label>
          <div className="file-upload-wrapper">
            <button className="choose-file-btn" onClick={triggerWebsiteIconInput}>
              <span>اختر الملف</span>
            </button>
            <div className="file-name">{websiteIconName}</div>
            <input
              type="file"
              id='website_icon'
              onChange={handleWebsiteIconChange}
              style={{ display: "none" }}
            />
            <span className="icon">
              <FaRegTrashCan />
            </span>
          </div>
        </div>

        <div className='container input'>
          <label htmlFor='website_icon'>أيقونة الموقع الخاص بالمتصفح</label>
          <div className="file-upload-wrapper">
            <button className="choose-file-btn" onClick={triggerWebsiteLogoInput}>
              <span>اختر الملف </span>
            </button>
            <div className="file-name">{websiteLogoName}</div>
            <input
              type="file"
              id='website_logo'
              onChange={handleWebsiteLogoChange}
              style={{ display: "none" }}
            />
            <span className="icon">
              <FaRegTrashCan />
            </span>
          </div>
        </div>
        <div className="input">
          <label htmlFor="site-title">عنوان الموقع</label>
          <input
            type="text"
            name="title"
            id="site-title"
            value={settings.title}
            onChange={handleChange}
            placeholder="اكتب هنا اسم الموقع"
          />
        </div>

        <div className='input'>
          <label htmlFor="description" className="HJ_FontColor_gray"> وصف الموقع</label>
          <textarea name="description" id="description" className='MA_TextArea' value={settings.description} onChange={handleChange}></textarea>
        </div>

        <div className="input">
          <label htmlFor="keywords">كلمات مفتاحية</label>
          <input
            type="text"
            name="tags"
            id="keywords"
            value={settings.tags}
            onChange={handleChange}
            placeholder="اضغط هنا كلمة مفتاحية"
          />
          <span> منتجات طبيعية#, avie, #malika#</span>
        </div>

        <div className="input">
          <label htmlFor="meta-pixel">معرف Meta Pixel</label>
          <input
            type="text"
            name="meta_pixel_id"
            id="meta-pixel"
            value={settings.meta_pixel_id}
            onChange={handleChange}
            placeholder="الصق المعرف هنا"
          />
        </div>
        <div className="input">
          <label htmlFor="google-analytics">معرف Google Analytics</label>
          <input
            type="text"
            name="google_analystic_id"
            id="google-analytics"
            value={settings.google_analystic_id}
            onChange={handleChange}
            placeholder="الصق المعرف هنا"
          />
        </div>
        <div className="na-button">
          <SaveButton className="na-save-button" />
          </div>
      </form>
    </>
  );
}

export default Settings;
