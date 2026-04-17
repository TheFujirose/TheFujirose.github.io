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
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* App Bar */}
      <AppBar position="static">
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
              color: theme.palette.text.primary,
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
              backgroundColor: theme.palette.background.paper,
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
                  color: theme.palette.text.primary,
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
