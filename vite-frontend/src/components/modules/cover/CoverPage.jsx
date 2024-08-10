import React from 'react';
import { Button } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import cover2 from '../../../assets/images/coverpage.jpg';
import { BackgroundImage, Center, Stack, Title, Text } from '@mantine/core';

export const CoverPage = () => {
  const navigate = useNavigate();

  return (
    <BackgroundImage src={cover2} style={{ height: '100vh' }}>
      <Center style={{ height: '100%' }}>
        <Stack align="center">
          <Title order={1} style={{ color: 'black' }}>
            Cooking Connections
          </Title>
          <Title order={3} style={{ color: 'black' }}>
            Discover. Create. Share.
          </Title>
          <Text size="xl" align="center" style={{ color: 'black', marginBottom: '2rem' }}>
            Join our culinary community to explore recipes, unleash creativity, and share the joy of cooking.
          </Text>
          <div>
            <Button
              component={Link}
              to="sign-in"
              variant="filled"
              color="#E70000"
              style={{ marginRight: '2rem' }}
            >
              Sign In
            </Button>
            <Button
              component={Link}
              to="sign-up"
              variant="filled"
              color="#138808"
            >
              Sign Up
            </Button>
          </div>
        </Stack>
      </Center>
    </BackgroundImage>
  );
};

