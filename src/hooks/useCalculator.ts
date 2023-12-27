const useCalculator = (
  setValue: React.Dispatch<React.SetStateAction<string>>
) => {
  const handleDelete = () => {
    setValue((currentValue) => {
      if (currentValue.length === 1) {
        return '0';
      }

      return currentValue.slice(0, -1);
    });
  };

  const handleInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setValue((currentValue) => {
      if (
        currentValue === '0' &&
        (e.target as HTMLButtonElement).textContent !== '.'
      ) {
        return (e.target as HTMLButtonElement).textContent || '';
      }

      if (
        currentValue.includes('.') &&
        (e.target as HTMLButtonElement).textContent === '.'
      ) {
        return currentValue;
      }

      return currentValue.concat(
        (e.target as HTMLButtonElement).textContent || ''
      );
    });
  };

  return {
    handleDelete,
    handleInput,
  };
};

export default useCalculator;
