import { Col, Row } from "antd";
import MovieCard from "../component/MovieCard";
const Movies = [1, 2, 3, 4, 5];

export default function Home() {
  return (
    <>
      <Row gutter={[22,55]}>
        {Movies.map(() => (
          <Col span={8}>
            <MovieCard />
          </Col>
        ))}
      </Row>
    </>
  );
}
