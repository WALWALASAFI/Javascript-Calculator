const Button = ({ value, onClick }) => {
    const baseStyle = 'flex items-center justify-center font-bold text-xl p-4 cursor-pointer rounded';
    const styleClasses = {
      AC: `${baseStyle} bg-red-500 text-white col-span-4`,
      '=': `${baseStyle} bg-green-500 text-white col-span-4`,
      '/': `${baseStyle} bg-orange-400 text-white`,
      '*': `${baseStyle} bg-orange-400 text-white`,
      '-': `${baseStyle} bg-orange-400 text-white`,
      '+': `${baseStyle} bg-orange-400 text-white`,
      '.': `${baseStyle} bg-gray-200`,
    };
  
    return (
      <button className={styleClasses[value] || `${baseStyle} bg-gray-100`} onClick={onClick}>
        {value}
      </button>
    );
  };
  
  export default Button;
  