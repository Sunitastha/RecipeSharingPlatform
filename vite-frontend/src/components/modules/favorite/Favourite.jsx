import React from 'react';
import img from '../../../assets/images/image4.jpg';
import { BackgroundImage, Text } from "@mantine/core";

export const Favourite = () => {
  return (
    <BackgroundImage src={img} style={{ height: '100vh' }} className="flex items-center justify-center opacity-100 bg-cover bg-center">

        {/* <Text
          size="xl"
          align="center"
          style={{ color: 'black', fontSize: '2rem', fontWeight: 'bold' }}
        >
          Hello!!! I am your favorite
        </Text> */}
   
    </BackgroundImage>
  );
};

