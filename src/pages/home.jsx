import { Col, Row } from "antd";
import MovieCard from "../component/MovieCard";
import { use, useEffect } from "react";
import { getMovies } from "../api/movie";
const Movies = [1, 2, 3, 4, 5];

export default function Home() {
  useEffect(() => {
    getMovies().then((respons) => {
      console.log(respons.data);
    });
  }, []);
  return (
    <>
      <Row gutter={[22, 55]}>
        {Movies.map(() => (
          <Col span={8}>
            <MovieCard />
          </Col>
        ))}
      </Row>
    </>
  );
}
