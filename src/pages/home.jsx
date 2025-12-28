import { Col, Row } from "antd";
import MovieCard from "../component/MovieCard";
import { use, useEffect, useState } from "react";
import { getMovies } from "../api/movie";
import { Input } from "antd";
import { Link } from "react-router";
const { Search } = Input;

export default function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getMovies().then((respons) => {
      setdata(respons.data);
    });
  }, []);

  return (
    <>
      <Search
        placeholder="input search text"
        allowClear
        // onSearch={onSearch}
        style={{ Width: 20, marginBottom: 40 }}
      />
      <Row gutter={[22, 55]}>
        {data.map((item) => (
          <Col span={8}>
            <Link to={`movie/${item.id}`}>
              <MovieCard cardData={item} />
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}
