import { Box, Typography, Avatar, useTheme } from '@mui/material';
import carsonImg from '../assets/images/Carson Fujita.jpg' 

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
  imageUrl = carsonImg,
}: ProfileProps) => {
  const theme = useTheme()
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
            sx={{
              fontSize: size === 'Vertical' ? '24px' : '24px',
              fontWeight: 400,
              lineHeight: size === 'Vertical' ? '32px' : '32px',
              color: theme.palette.text.primary,
              mb: 0.5,
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '24px',
              color: theme.palette.text.secondary,
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
            color: theme.palette.text.primary,
          }}
        >
          <a href='https://youtube.com/shorts/8l5D6i6iLpA?feature=share' target='blank'>See Portfolio Prototype</a>
        </Typography>
      </Box>
    </Box>
  );
};
