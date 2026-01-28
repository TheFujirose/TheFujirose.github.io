import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import './App.css'
import {Profile } from './components'

function App() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
      }}
    >
      {/* App Bar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#ffffff',
          color: '#1d1b20',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: 3,
            pb: 3,
          }}
        >
          <Typography
            sx={{
              flex: 1,
              textAlign: 'center',
              fontSize: '22px',
              fontWeight: 400,
              color: '#1d1b20',
            }}
          >
            Portfolio
          </Typography>
          <Box sx={{ width: 48 }} />
        </Toolbar>
      </AppBar>

      {/* Main Layout */}
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          overflow: 'hidden',
        }}
      >
        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.875,
            overflow: 'auto',
            px: isDesktop ? 2 : 1,
            py: 1.875,
            pb: isDesktop ? 10 : 10,
          }}
        >
          {/* Profile Section */}
          <Card
            sx={{
              backgroundColor: '#fef7ff',
              borderRadius: 1.5,
              boxShadow: '0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px rgba(0,0,0,0.15)',
              mx: 'auto',
              width: '100%',
              maxWidth: isDesktop ? '100%' : '375px',
            }}
          >
            <CardContent sx={{ p: 2 }}>
              <Profile size={isDesktop ? 'Horizontal' : 'Vertical'} />

              {/* Divider */}
              <Divider sx={{ my: 2 }} />

              {/* About Text */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#1d1b20',
                  lineHeight: '20px',
                  textAlign: 'justify',
                }}
              >
                Portfolio under development.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}

export default App
