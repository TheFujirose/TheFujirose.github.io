import { 
  useState,
  useRef,
  useEffect,
  Fragment,
} from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  useTheme,
  useMediaQuery,
  Icon,
  Snackbar,
  type SnackbarCloseReason,
  Button,
} from '@mui/material'

// Importing icons
import PersonIcon from '@mui/icons-material/Person'
import BuildIcon from '@mui/icons-material/Build'
import AssignmentIcon from '@mui/icons-material/Assignment'
import EmailIcon from '@mui/icons-material/Email'
import GetAppIcon from '@mui/icons-material/GetApp'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// Importing custom components and hooks
import { 
  Profile,
  ProjectCard,
  Skill,
  VideoPlayer,
} from './components'
import { useResponsive } from './hooks/useResponsive'


// Importing images
import quizImg from './assets/images/website.jpg'
import loonEImg from './assets/images/loon-e.jpg'
import humberASVImg from './assets/images/humberasvwebsite.jpg'
/**
 * NavTab type for navigation indexing
 * 0: About, 1: Skills, 2: Projects, 3: Contact, 4: Resume
 * Used for both sidebar and bottom navigation
 */
type NavTab = 0 | 1 | 2 | 3 | 4

function App() {
  const theme = useTheme()
  const isBelowMobile = useMediaQuery('(max-width: 359px)')
  const [currentTab, setCurrentTab] = useState<NavTab>(0)
  const [hasDownloadPressed, setHasDownloadPressed] = useState(false);

  // Refs for each section to enable scrolling
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({
    about: null,
    skills: null,
    projects: null,
    contact: null,
    resume: null,
  })
  const {
    showSidebar,
    showBottomNav,
    showTopBar,
    getPadding,
    getMargin,
    getGap,
  } = useResponsive()

  // Navigation items
  const allNavItems = [
    { icon: <PersonIcon />, label: 'About', key: 'about' },
    { icon: <BuildIcon />, label: 'Skills', key: 'skills' },
    { icon: <AssignmentIcon />, label: 'Projects', key: 'projects' },
    { icon: <EmailIcon />, label: 'Contact', key: 'contact' },
    { icon: <GetAppIcon />, label: 'Resume', key: 'resume' },
  ]

  const navItems = isBelowMobile ? allNavItems.filter(item => item.key !== 'skills') : allNavItems

  // Handle scroll to section
  const handleScrollToSection = (sectionKey: string, tabIndex: NavTab) => {
    setCurrentTab(tabIndex)
    const ref = sectionRefs.current[sectionKey as keyof typeof sectionRefs.current]
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // handle download resume button
  const handleDownload = () => {
    const fileUrl = 'public/resume.pdf';
    const fileName = 'carson_fujita_resume.pdf';

    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = fileName;

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor); //clean dom
    setHasDownloadPressed(true);
  };

  const handleClose = (
    _ : React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway'){
      return;
    }
    setHasDownloadPressed(false);
  };
  
  const action = (
    <Fragment>
      <Button 
      aria-label='retry'
      onClick={handleDownload}
      >
        Retry
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  )

  // Update current tab when scrolling (for tablet/desktop)
  useEffect(() => {
    if (showSidebar) {
      const handleScroll = (e: Event) => {
        const target = e.target as HTMLElement
        const scrollPosition = target.scrollTop + 100

        // Check which section is in view
        const sections = Object.entries(sectionRefs.current)
        for (let i = 0; i < sections.length; i++) {
          const [_, ref] = sections[i]
          if (ref) {
            const nextRef = sections[i + 1]?.[1]
            const refTop = ref.offsetTop
            const refBottom = nextRef ? nextRef.offsetTop : refTop + ref.clientHeight

            if (scrollPosition >= refTop && scrollPosition < refBottom) {
              setCurrentTab(i as NavTab)
              break
            }
          }
        }
      }

      const mainContent = document.querySelector('main')
      if (mainContent) {
        mainContent.addEventListener('scroll', handleScroll)
        return () => mainContent.removeEventListener('scroll', handleScroll)
      }
    }
  }, [showSidebar])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        width: '100vw',
        overflow: 'hidden',

      }}
    >
      {/* Desktop/Tablet Sidebar Navigation - Fixed Position */}
      {showSidebar && (
        <Box
          sx={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: { md: 280, xl: 320 },
            height: '100vh',
            backgroundColor: theme.palette.background.paper,
            borderRight: `1px solid ${theme.palette.divider}`,
            overflowY: 'auto',
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 3,
            px: 2,
            gap: 2,
            zIndex: 999,
          }}
        >
          <Typography
            sx={{
              fontSize: '22px',
              fontWeight: 400,
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Portfolio
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
            {navItems.map((item, idx) => (
              <Box
                key={idx}
                onClick={() => handleScrollToSection(item.key, idx as NavTab)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 1.5,
                  borderRadius: 1,
                  cursor: 'pointer',
                  backgroundColor: currentTab === idx ? theme.palette.action.hover : 'transparent',
                  color: currentTab === idx ? theme.palette.primary.main : theme.palette.text.secondary,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                {item.icon}
                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Main Content Area */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          overflow: 'hidden',
          width: '100%',
          // Sidebar is fixed and removed from flow, so main content fills normally
          // Content inside will be positioned to avoid sidebar overlap via padding
        }}
      >
        {/* App Bar (Mobile and Tablet Portrait) */}
        {showTopBar && (
          <AppBar position="static">
            <Toolbar
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pt: 2,
                pb: 2,
              }}
            >
              <Typography variant='h1'
                sx={{
                  color: theme.palette.text.primary,
                }}
              >
                Portfolio
              </Typography>
            </Toolbar>
          </AppBar>
        )}

        {/* Content Container */}
        <Box
          component="main"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: getGap(),
            overflow: 'auto',
            py: getPadding(),
            pl: showSidebar ? { md: '280px', xl: '320px' } : getPadding(),
            pr: getPadding(),
            mx: getMargin(),
            pb: showBottomNav ? 15 : getPadding() * 4,
            maxWidth: 'none',
            width: '100%',
          }}
        >
          {/* Profile Section */}
          <Card
            ref={(el) => {
              if (el) sectionRefs.current.about = el
            }}
            sx={{
              backgroundColor: theme.palette.background.paper,
              mx: 'auto',
              width: '100%',
              scrollMarginTop: showTopBar ? '64px' : '0px',
            }}
          >
            <CardContent>
              {/* Images and content is in the component */}
              <Profile
                size={showSidebar ? 'Horizontal' : 'Vertical'}
              />

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
                I'm Carson, I'm a computer programmer with a passion for robotics and software architecture. 
                I have experience in full stack development, and 
                I'm always eager to learn new technologies and 
                take on challenging projects; checkout my club's project: 
                <a href='https://humberasv.ca/'> Loon-E</a>, an autonomous surface vehicle!
              </Typography>

              
            </CardContent>

          {/* Skills Section */}
            
            <CardContent 
              ref={(el) => {
                if (el) sectionRefs.current.skills = el
              }}
              sx={{
                backgroundColor: theme.palette.background.paper,
                scrollMarginTop: showTopBar ? '64px' : '0px',
              }}
              >
              <Box
               sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                <Skill label="JavaScript" />
                <Skill label="TypeScript" />
                <Skill label="React" />
                <Skill label="Python" />
                <Skill label="Robotics" />
                <Skill label="ROS" />
                <Skill label="Docker" />
                <Skill label="Git" />
                <Skill label="SQL" />
                <Skill label="NoSQL" />
              </Box>
            </CardContent>
          </Card>

          {/* Projects Section */}
          <Card
            ref={(el) => {
              if (el) sectionRefs.current.projects = el
            }}
            sx={{
              backgroundColor: theme.palette.background.paper,
              scrollMarginTop: showTopBar ? '64px' : '0px',
            }}
          >
            <CardContent>
              <Typography variant="h6">
                Projects
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 1 }}>
                <ProjectCard
                  title="Loon-E ASV"
                  subtitle="Humber College Robotics Club"
                  description="An autonomous surface vehicle designed for research and competition. I contributed to the software architecture, navigation algorithms, and sensor integration."
                  skills={['Python', 'ROS', 'Docker']}
                  media={
                  <VideoPlayer
                    videoId="Ocej88hrU2k"
                    mediaOnFail={<img src={loonEImg} alt="The Loon-E autonomous surface vehicle" />}
                  />
                  }
                  primaryLink='https://humberasv.ca/'
                  primaryLinkLabel='View Project'
                  secondaryLink='https://github.com/HumberASV/'
                  secondaryLinkLabel='View Github'
                />
                  <ProjectCard
                  title="Quick Quiz Website"
                  subtitle="Assignment with no framework"
                  description="A quiz website built with vanilla JavaScript, HTML, and CSS."
                  skills={['JavaScript', 'HTML', 'CSS']}
                  media={<img src={quizImg} alt="Screenshot of the Quick Quiz website" />}
                  primaryLink='https://cfujitahumber.github.io/JavaScript/quick-quiz.html'
                  primaryLinkLabel='View Project'
                  secondaryLink='https://github.com/CFujitaHumber/CFujitaHumber.github.io'
                  secondaryLinkLabel='View Github'
                />
                <ProjectCard
                  title="HumberASV.ca"
                  subtitle="Maintainer of the club website"
                  description="The website for the Humber College Robotics Club, built with React and hosted on GitHub Pages. I maintain the site, add new features, and ensure it stays up to date with our latest projects and news."
                  skills={['Vite', 'React', 'GitHub Pages']}
                  media={<img src={humberASVImg} alt="Screenshot of the HumberASV.ca homepage" />}
                  primaryLink='https://humberasv.ca/'
                  primaryLinkLabel='View Project'
                  secondaryLink='https://github.com/HumberASV/HumberASV-Website'
                  secondaryLinkLabel='View Github'
                />
              </Box>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card
            ref={(el) => {
              if (el) sectionRefs.current.contact = el
            }}
            sx={{
              backgroundColor: theme.palette.background.paper,
              scrollMarginTop: showTopBar ? '64px' : '0px',
            }}
          >
            <CardContent>
              <Typography variant="h6">
                Contact
              </Typography>
              <Typography variant="body2">
                <Icon component={LinkedInIcon} sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                <a href='https://www.linkedin.com/in/carson-fujita/' target='blank'>LinkedIn</a>
              </Typography>
              <Typography variant="body2">
                <Icon component={EmailIcon} sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                <a href='mailto:carsonfujita@gmail.com'>carsonfujita@gmail.com</a>
              </Typography>
            </CardContent>
          </Card>

          {/* Resume Section */}
          <Card
            ref={(el) => {
              if (el) sectionRefs.current.resume = el
            }}
            sx={{
              backgroundColor: theme.palette.background.paper,
              scrollMarginTop: showTopBar ? '64px' : '0px',
            }}
          >
            <CardContent>
              <Typography variant="h6">
                Resume
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                Download the resume to view today!
              </Typography>
              <Button 
                sx={{
                  mt: "1rem",
                  backgroundColor: theme.palette.primary.main,
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }} 
                onClick={handleDownload}
              >
                Download
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Bottom Navigation (Mobile only) */}
      {showBottomNav && (
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000}}
          elevation={3}
        >
          <BottomNavigation
            value={currentTab}
            onChange={(_, newValue) =>
              handleScrollToSection(navItems[newValue as NavTab].key, newValue as NavTab)
            }
            sx={{ backgroundColor: theme.palette.background.paper }}
          >
            {navItems.map((item, idx) => (
              <BottomNavigationAction
                key={idx}
                icon={item.icon}
                label={item.label}
                sx={{
                  fontSize: '12px',
                  color: theme.palette.text.secondary,
                  px: { xs: 0.75, sm: 1 }, // Reduce horizontal padding on mobile
                  //fixes issues for mobile devices at 360px
                  '&.Mui-selected': {
                    color: theme.palette.primary.main,
                  },
                }}
              />
            ))}
          </BottomNavigation>
        </Paper>
      )}
    <Snackbar
      open={hasDownloadPressed}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Download started!"
      action={action}
    />
    </Box>
  )
}

export default App
