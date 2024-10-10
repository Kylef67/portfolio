interface CardInterface {
  children: React.ReactNode;
  className: string;
}

const Card: React.FC<CardInterface> = ({ children, className }) => {
  return (
    <div
      className={`bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
