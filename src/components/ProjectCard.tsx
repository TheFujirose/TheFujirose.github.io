import { Box, Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { Skill } from './Skill';

interface ProjectCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  skills?: string[];
  imageUrl?: string;
}

export const ProjectCard = ({
  title = 'Title',
  subtitle = 'Subtitle',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  skills = [],
  imageUrl = 'http://localhost:3845/assets/054dfe02e425078fdd66113858fbed2e929f9c10.png',
}: ProjectCardProps) => {
  return (
    <Card
      sx={{
        borderRadius: 1.5,
        backgroundColor: '#f7f2fa',
        boxShadow: 'none',
        width: '100%',
        maxWidth: '359px',
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={title}
        sx={{
          width: '100%',
          height: '188px',
          objectFit: 'cover',
          backgroundColor: '#ece6f0',
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          p: 2,
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              color: '#1d1b20',
              mb: 0.5,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: '14px',
              color: '#49454f',
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: '14px',
            color: '#49454f',
          }}
        >
          {description}
        </Typography>

        <Box>
          <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill, idx) => (
              <Skill key={idx} label={skill} />
            ))}
          </Stack>

          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <Button
              variant="outlined"
              sx={{
                borderColor: '#cac4d0',
                color: '#49454f',
                textTransform: 'none',
                fontSize: '14px',
                borderRadius: '100px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)',
                },
              }}
            >
              Secondary
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#6750a4',
                color: '#ffffff',
                textTransform: 'none',
                fontSize: '14px',
                borderRadius: '100px',
                '&:hover': {
                  backgroundColor: '#5a47a0',
                },
              }}
            >
              Primary
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
