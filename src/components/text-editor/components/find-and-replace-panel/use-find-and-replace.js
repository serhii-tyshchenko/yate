import { useState, useCallback, useEffect } from 'react';

const useFindAndReplace = (onConfirm, selectedText) => {
  const [formValues, setFormValues] = useState({
    find: '',
    replace: '',
  });

  useEffect(() => {
    setFormValues((prev) => ({ ...prev, find: selectedText }));
  }, [selectedText]);

  const onFormChange = (e) =>
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleConfirm = () => onConfirm(formValues);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        handleConfirm();
      }
    },
    [handleConfirm]
  );

  return {
    formValues,
    onFormChange,
    handleConfirm,
    handleKeyDown,
  };
};

export default useFindAndReplace;
