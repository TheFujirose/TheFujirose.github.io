import { Box, Card, CardContent, Typography, Stack, Avatar } from '@mui/material';
import { Skill } from './Skill';

interface ProfileProps {
  size?: 'Horizontal' | 'Vertical';
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}

export const Profile = ({
  size = 'Horizontal',
  name = 'Carson Fujita',
  title = 'Computer Programmer',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  imageUrl = 'http://localhost:3845/assets/054dfe02e425078fdd66113858fbed2e929f9c10.png',
}: ProfileProps) => {
  const imageSize = size === 'Vertical' ? 327 : 136;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: size === 'Vertical' ? 'column' : 'row',
        gap: 3,
        alignItems: size === 'Vertical' ? 'center' : 'flex-start',
      }}
    >
      <Avatar
        src={imageUrl}
        sx={{
          width: imageSize,
          height: imageSize,
          borderRadius: 3.5,
          flexShrink: 0,
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          flex: 1,
        }}
      >
        <Box>
          <Typography
            variant="headline"
            sx={{
              fontSize: size === 'Vertical' ? '24px' : '24px',
              fontWeight: 400,
              lineHeight: size === 'Vertical' ? '32px' : '32px',
              color: '#1d1b20',
              mb: 0.5,
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="titleMedium"
            sx={{
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '24px',
              color: '#49454f',
            }}
          >
            {title}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            color: '#1d1b20',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
