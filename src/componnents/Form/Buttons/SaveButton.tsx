import React from 'react';

interface SaveButtonProps {
  className?: string;
  type?:string
}

const SaveButton: React.FC<SaveButtonProps> = ({ className, type }) => {
  return (
    <div className={className}>
      <button type="submit">حفظ</button>
    </div>
  );
}

export default SaveButton;
