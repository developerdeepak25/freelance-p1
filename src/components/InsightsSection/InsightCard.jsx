import RightArrow from "../../assets/RightArrow";
import RoundButton from "../buttons/RoundButton";
import "./InsightsCards.css";

const insightImages = [
  { image: "/images/InsightImage1.png" },
  { image: "/images/InsightImage2.png" },
  { image: "/images/InsightImage3.png" },
  { image: "/images/InsightImage3.png" },
  { image: "/images/InsightImage3.png" },
];
const InsightCard = () => {
  return (
    <div className="insight-card">
      <p className="insight-heading">Parenting hacks</p>
      <div className="insight-images">
        {insightImages.map((image, i) => {
          return (
            <div className="insight-image" key={i}>
              <img src={image.image} />
            </div>
          );
        })}
      </div>
      <div className="slider">
        <RoundButton >
          <RightArrow height="13" />
        </RoundButton>
      </div>
    </div>
  );
};

export default InsightCard;
