import { Box , Stack, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import BuildIcon from '@mui/icons-material/Build'
import AssignmentIcon from '@mui/icons-material/Assignment'
import EmailIcon from '@mui/icons-material/Email'
import GetAppIcon from '@mui/icons-material/GetApp'

interface NavRailItem {
  icon: React.ReactNode
  label: string
  active?: boolean
}

interface NavigationRailProps {
  currentTab: number
  onTabChange: (index: number) => void
}

export const NavigationRail = ({ currentTab, onTabChange }: NavigationRailProps) => {
  const navItems: NavRailItem[] = [
    { icon: <PersonIcon />, label: 'About', active: currentTab === 0 },
    { icon: <BuildIcon />, label: 'Skills', active: currentTab === 1 },
    { icon: <AssignmentIcon />, label: 'Projects', active: currentTab === 2 },
    { icon: <EmailIcon />, label: 'Contact', active: currentTab === 3 },
    { icon: <GetAppIcon />, label: 'Resume', active: currentTab === 4 },
  ]

  return (
    <Box>
      {/* Menu FAB placeholder */}
      <Box sx={{ width: '100%' }} />

      {/* Navigation items */}
      <Stack
        direction="column"
        spacing={0.5}
        sx={{ width: '100%', alignItems: 'center' }}
      >
        {navItems.map((item, idx) => (
          <Stack
            key={idx}
            direction="column"
            spacing={0.5}
            sx={{
              alignItems: 'center',
              py: 0.75,
              width: '100%',
              cursor: 'pointer',
            }}
            onClick={() => onTabChange(idx)}
          >
            {/* Icon container */}
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.active ? '#625b71' : '#49454f',
                  '& svg': {
                    fontSize: 24,
                  },
                }}
              >
                {item.icon}
              </Box>
            </Box>

            {/* Label */}
            <Typography
              variant="caption"
              sx={{
                fontSize: '12px',
                fontWeight: 500,
                textAlign: 'center',
                color: item.active ? '#625b71' : '#49454f',
                letterSpacing: '0.5px',
                width: '100%',
              }}
            >
              {item.label}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  )
}
