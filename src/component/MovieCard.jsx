import { Card } from "antd";

const { Meta } = Card;

function MovieCard() {
  return (
    <>
      <Card
        hoverable
        style={{ width: 240, backgroundColor: "rgba(78, 78, 127, 0.52)" }}
        cover={
          <img
            draggable={false}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </>
  );
}

export default MovieCard;
