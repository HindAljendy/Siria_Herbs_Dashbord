import React from 'react';
import { FaTrash } from 'react-icons/fa';

interface SectionProps {
  data: {
    icon: string;
    title: string;
    summary: string;
    description: string;
  };
  onChange: (data: SectionProps['data']) => void;
  onRemove: () => void;
}

const EvaluationForm: React.FC<SectionProps> = ({ data, onChange, onRemove }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="section">
      <button className="remove-section" onClick={onRemove}>
        إزالة قسم <FaTrash />
      </button>
      <div className="section-content">
        <div className="input-group">
          <label>الأيقونة</label>
          <input
            type="text"
            name="icon"
            value={data.icon}
            onChange={handleChange}
            placeholder="fa fa_hand"
          />
        </div>
        <div className="input-group">
          <label>العنوان</label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>الملخص</label>
          <input
            type="text"
            name="summary"
            value={data.summary}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>الوصف</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </div>
        <button className="save-button">حفظ</button>
      </div>
    </div>
  );
};

export default EvaluationForm;