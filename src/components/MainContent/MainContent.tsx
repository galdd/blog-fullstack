import React from "react";
import RecentWork from "./RecentWork";
import ScrollToTopButton from "../Shared/ScrollToTopButton/ScrollToTopButton";
import AboutMe from "./AboutMe";
import Blog from "./Blog";

const MainContent: React.FC = () => {
  return (
    <main className="main-content relative">
      <AboutMe
        className="about-me"
        title="Full Stack Chronicles: Adventures in Modern Web Development"
        subtitle="This blog is written by Gal Dagan, a Full Stack developer with extensive experience in cybersecurity. The blog features guides on writing professional and clean code, secure coding practices, and modern technology trends."
      />
      <Blog className="blog" />
      
        <RecentWork />


      <ScrollToTopButton />
    </main>
  );
};

export default MainContent;
