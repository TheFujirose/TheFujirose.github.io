import { Box, Typography } from '@mui/material';

interface SkillProps {
  label?: string;
}

export const Skill = ({ label = 'Skill' }: SkillProps) => {
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
        variant="labelLarge"
        sx={{
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.1px',
          color: '#49454f',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
