import { Box, Card, CardContent, Typography, Button, Stack, useTheme } from '@mui/material';
import type { ReactNode } from 'react';
import { Skill } from './Skill';

interface ProjectCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  skills?: string[];
  media?: ReactNode;
  primaryLink?: string;
  primaryLinkLabel?: string;
  secondaryLink?: string;
  secondaryLinkLabel?: string;
}

export const ProjectCard = ({
  title = 'Title',
  subtitle = 'Subtitle',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  skills = [],
  media,
  primaryLink = '#',
  primaryLinkLabel = 'Primary Link',
  secondaryLink = '#',
  secondaryLinkLabel = 'Secondary Link',
}: ProjectCardProps) => {
  const theme = useTheme()

  return (
    <Card
      sx={{
        backgroundColor: '#f7f2fa',
        boxShadow: 'none',
        width: '100%',
        maxWidth: '359px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '188px',
          overflow: 'hidden',
          backgroundColor: theme.palette.action.disabledBackground,
          '& > *': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          },
        }}
      >
        {media}
      </Box>
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
              color: theme.palette.text.primary,
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
              color: theme.palette.text.secondary,
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
            color: theme.palette.text.secondary,
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
            <Button variant="outlined"
              href={secondaryLink}
            >
              {secondaryLinkLabel}
            </Button>
            <Button
              variant="contained"
              href={primaryLink}
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              {primaryLinkLabel}
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
