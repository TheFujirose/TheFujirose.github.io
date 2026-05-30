import { Box, Typography, useTheme } from '@mui/material';

interface SkillProps {
  label?: string;
}

export const Skill = ({ label = 'Skill' }: SkillProps) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 1.5,
        py: 0.75,
        border: '1px solid',
        borderColor: '#cac4d0',
        borderRadius: 1,
        backgroundColor: 'transparent',
      }}
    >
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.1px',
          color: theme.palette.text.secondary,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
