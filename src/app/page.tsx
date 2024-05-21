"use client";

import Layout from "./components/layout";
import Content from "./components/Content";
import VideoCarousel from "./components/VideoCarousel";

export default function Home() {
  return (
    <Layout>
      <VideoCarousel />
      <Content />
    </Layout>
  );
}
