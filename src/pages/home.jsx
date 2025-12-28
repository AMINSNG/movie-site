import { Col, Row } from "antd";
import MovieCard from "../component/MovieCard";
import { use, useEffect } from "react";
import { getMovies } from "../api/movie";
const Movies = [1, 2, 3, 4, 5];
import { Input } from "antd";
const onSearch = (value, _e, info) => console.log(info?.source, value);
const { Search } = Input;

export default function Home() {
  useEffect(() => {
    getMovies().then((respons) => {
      console.log(respons.data);
    });
  }, []);
  return (
    <>
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ Width: 20, marginBottom: 40 }}
      />
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
