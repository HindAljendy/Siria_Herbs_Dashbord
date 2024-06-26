import React from 'react';

interface SaveButtonProps {
  className?: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ className }) => {
  return (
    <div className={className}>
      <button type="submit">حفظ</button>
    </div>
  );
}

export default SaveButton;
