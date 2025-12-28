import { Layout, Menu, Typography } from "antd";
import { Avatar } from "antd";
import {
  InfoCircleOutlined,
  HomeOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router";
import "./App.css";
const url = "./src/assets/movie-recorder-light.svg";
const { Header, Content, Footer } = Layout;
import { MdOutlineMovieFilter } from "react-icons/md";

function App() {
  const location = useLocation();
  const selectedKey =
    location.pathname.startsWith("/favorite") && location.pathname !== "/"
      ? "/favorite"
      : location.pathname.startsWith("/about")
      ? "/about"
      : "/";

  const menuItems = [
    { key: "/", icon: <HomeOutlined />, label: <Link to="/">Home</Link> },
    {
      key: "/favorite",
      icon: <HeartOutlined />,
      label: <Link to="/favorite">Favorite</Link>,
    },
    {
      key: "/about",
      icon: <InfoCircleOutlined />,
      label: <Link to="/about">About</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          justifyContent: "space-between",
          backgroundColor: "#4d4863ff",
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          <MdOutlineMovieFilter size={48} />
          <Typography.Title
            level={5}
            style={{
              color: "#fff",
              margin: 0,
              fontSize: 30,
              alignItems: "center",
            }}
          >
            Movie-Time
          </Typography.Title>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={menuItems}
          style={{ gap: 1, backgroundColor: "#4d4863ff" }}
        />
      </Header>
      <Content
        style={{ padding: 24, backgroundColor: "rgba(105, 105, 134, 0.52)" }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <Typography.Text type="secondary">Created by AMIN :)</Typography.Text>
      </Footer>
    </Layout>
  );
}

export default App;
