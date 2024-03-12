import image1 from '../assets/star.svg'
import image2 from '../assets/star-empty.svg'


const Card = ({ title, year, description, posterURL, rating }) => {
  const maxStars = 5;

  const renderStars = () => {
    const filledStars = Math.round((rating / 10) * maxStars);

    const stars = Array.from({ length: maxStars }, (_, index) => (
      <img key={index} src={index < filledStars ? image1 : image2} alt={`star ${index + 1}`} />
    ));

    return <div className="stars">{stars}</div>;
  };

  return (
    <div className="text-white movieBackground m-[20px] flex flex-col gap-3 w-[300px] p-[10px]">
      <img src={posterURL} className="cursor-pointer" alt="movie poster" />
      <p>{`Title: ${title}`}</p>
      <p>{`Year: ${year}`}</p>
      <p>{`Description: ${description}`}</p>
      <div className="rating">{renderStars()}</div>
    </div>
  );
};

export default Card;
