import { Layout, Menu, Typography } from "antd";
import {
  InfoCircleOutlined,
  TeamOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  const location = useLocation();
  const selectedKey =
    location.pathname.startsWith("/students") && location.pathname !== "/"
      ? "/students"
      : location.pathname.startsWith("/about")
      ? "/about"
      : "/";

  const menuItems = [
    { key: "/", icon: <HomeOutlined />, label: <Link to="/">Home</Link> },
    {
      key: "/home",
      icon: <TeamOutlined />,
      label: <Link to="/students">Students</Link>,
    },
    {
      key: "/about",
      icon: <InfoCircleOutlined />,
      label: <Link to="/about">About</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Typography.Title level={4} style={{ color: "#fff", margin: 0 }}>
          React Router · Ant Design
        </Typography.Title>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={menuItems}
          style={{ flex: 1 }}
        />
      </Header>
      <Content style={{ padding: 24 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <Typography.Text type="secondary">
          Sample student routing demo
        </Typography.Text>
      </Footer>
    </Layout>
  );
}

export default App;
