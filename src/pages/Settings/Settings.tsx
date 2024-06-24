import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import SaveButton from '../../componnents/Form/Buttons/SaveButton';
import NavigationLinks from '../../componnents/NavigationLinks/NavigationLinks';
import './Setting.css';
import SettingImageUpload from '../../componnents/SettingImageUpload/SettingImageUpload';

interface Settings {
  title: string;
  description: string;
  meta_pixel_id: string;
  google_analystic_id: string;
  tags: string;
  website_icon: File | null;
  website_logo: File | null;
  system_language: string;
}

const Settings = () => {
  const { id } = useParams();
  const [settings, setSettings] = useState<Settings>({
    title: '',
    description: '',
    meta_pixel_id: '',
    google_analystic_id: '',
    tags: '',
    website_icon: null,
    website_logo: null,
    system_language: 'AR'
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/setting/${id}`)
      .then(response => {
        const data = response.data.data;
        setSettings({
          title: data.title || '',
          description: data.description || '',
          meta_pixel_id: data.meta_pixel_id || '',
          google_analystic_id: data.google_analystic_id || '',
          tags: data.tags || '',
          website_icon: data.website_icon || null,
          website_logo: data.website_logo || null,
          system_language: 'AR'
        });
      })
      .catch(error => {
        console.error('There was an error fetching the settings!', error);
      });
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleImageUpload = (name: string, file: File) => {
    setSettings({ ...settings, [name]: file });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in settings) {
      const value = settings[key as keyof Settings];
      if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, value as string);
      }
    }
    axios.put(`http://127.0.0.1:8000/api/setting/${id}/update`, formData, {
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
  return (
    <>
      <Outlet />
      <div className="na-nav">
        <NavigationLinks
          navigateMain='إعدادات النظام'
          navigateLink=' لوحة التحكم' navigateSubmain='الإعدادات'
        />
      </div>

      <form className="na-form" onSubmit={handleSubmit}>


        <div className="input na-icon">
          <SettingImageUpload
            name="website_icon"
            label="أيقونة الموقع الخاص بالمتصفح"
            onImageUpload={handleImageUpload}
          />
        </div>

        <div className="input na-logo">
          <SettingImageUpload
            name="website_logo"
            label="شعار الموقع"
            onImageUpload={handleImageUpload}
          />
        </div>

        <div className="input na-title">
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

        <div className="input na-desc">
          {/* <TextArea name="وصف الموقع" value={settings.description} onChange={handleChange} /> */}
          <div className='input'>
            <label htmlFor="description" className="HJ_FontColor_gray"> وصف الموقع</label>
            <textarea name="description" id="description" className='MA_TextArea' value={settings.description} onChange={handleChange}></textarea>
          </div>
        </div>

        <div className="input na-language">
          <label htmlFor="system-language">لغة النظام</label>
          <div className="input-wrapper">
            <input
              type="text"
              name="system_language"
              id="system-language"
              value={settings.system_language}
              onChange={handleChange}
            />
            <span className="language-toggle">▼</span>
          </div>
        </div>

        <div className="input na-keywords">
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

        <div className="input na-meta-pixel">
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
        <div className="input na-google">
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
