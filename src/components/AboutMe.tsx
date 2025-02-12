"use client";
import store from "@/hooks/store";
import { themesStore } from "@/hooks/theme";
import { Button, Container, Flex } from "@mantine/core";
import Image from "next/image";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const AboutMe = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];

  return (
    <Container
      size="xl"
      className="w-full py-10 lg:py-16 scroll-m-20"
      id="about"
    >
      <ScrollAnimation animateIn="animate__rubberBand">
        <h2
          className={`mb-5 text-6xl text-center lg:mb-0 ${currentTheme["text-200"]}`}
        >
          About me
        </h2>
      </ScrollAnimation>

      <Flex justify="space-around" align="center" wrap="wrap">
        <Image
          src="/about-me-banner.png"
          alt="About me illutstration"
          width={500}
          height={500}
          className="object-cover"
        />
        <ul
          className={`max-w-xl space-y-5 text-xl lg:text-2xl rounded-xl font-medium [text-shadow:1px_1px_2px_rgba(0,0,0,1)]`}
        >
          <ScrollAnimation animateIn="animate__pulse">
            <li className="text-orange-600">
              Motivated Software Developer with hands-on experience
              working on multiple projects built with React.js, and
              Next.js.
            </li>
            <li className="text-white">
              A Competitive programming, with notable ratings of 2164 on LeetCode, 1864 on Codeforces, and 1950+ on CodeChef.
            </li>
            <li className="!mb-12 text-green-500">
              Skilled in optimizing performance, writing clean, maintainable
              code, and ensuring seamless integration with backend systems.
            </li>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__swing">
            <li>
              <Button
                className={currentTheme["bg-500"]}
                size="lg"
                component="a"
                href="https://drive.google.com/file/d/1b5I0utWzXaWYo71vQrINW50bPx5-VPA0/view?usp=drive_link"
                download
              >
                Download CV
              </Button>
            </li>
          </ScrollAnimation>
        </ul>
      </Flex>
    </Container>
  );
};

export default AboutMe;
