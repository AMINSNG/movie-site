import { Card } from "antd";

const { Meta } = Card;

function MovieCard({ cardData }) {
  

  return (
    <>
      <Card
        hoverable
        style={{ width: 240, backgroundColor: "rgba(78, 78, 127, 0.52)" }}
        cover={<img draggable={false} alt="example" src={cardData.imageUrl} />}
      >
        <Meta title={cardData.title} description="www.instagram.com" />
      </Card>
    </>
  );
}

export default MovieCard;
