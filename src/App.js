import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { pink } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useState, useEffect } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e83a5a',
    },
    background: {
      default: '#181a1b',
      paper: '#23272a',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e83a5a',
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  const [themeMode, setThemeMode] = useState(null);
  const [language, setLanguage] = useState('es');
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)');

  // Translations
  const translations = {
    es: {
      themeDialog: {
        title: 'Elige el modo visual',
        content: '¿Prefieres modo oscuro o claro?',
        dark: 'Oscuro',
        light: 'Claro'
      },
      header: {
        slogan: 'Transformamos tu espacio, mejoramos tu vida.'
      },
      sections: {
        ourWork: 'Nuestros Trabajos',
        whyChooseUs: '¿Por qué elegirnos?',
        workProcess: 'Proceso de Trabajo',
        contact: 'Pedir Presupuesto',
        doubts: '¿Dudas?',
        doubtsSubtitle: '¿Querés saber cuánto cuesta tu proyecto?',
        whatsappCTA: '¡Hablá con nosotros por WhatsApp sin compromiso!'
      },
      process: {
        step1: 'Contacto y presupuesto',
        step2: 'Visita técnica',
        step3: 'Ejecución de la obra',
        step4: 'Entrega final y revisión'
      },
      advantages: {
        title1: 'Materiales de alta calidad',
        title2: 'Compromiso con los tiempos de entrega',
        title3: 'Limpieza y orden en cada etapa',
        title4: 'Trato directo y transparente'
      },
      gallery: {
        before: 'Antes',
        after: 'Después',
        reform: 'Reforma'
      },
      footer: {
        copyright: '© 2024 KR Reformas. Todos los derechos reservados.'
      }
    },
    en: {
      themeDialog: {
        title: 'Choose visual mode',
        content: 'Do you prefer dark or light mode?',
        dark: 'Dark',
        light: 'Light'
      },
      header: {
        slogan: 'We transform your space, we improve your life.'
      },
      sections: {
        ourWork: 'Our Work',
        whyChooseUs: 'Why Choose Us?',
        workProcess: 'Work Process',
        contact: 'Get Quote',
        doubts: 'Questions?',
        doubtsSubtitle: 'Want to know how much your project costs?',
        whatsappCTA: 'Talk to us on WhatsApp without commitment!'
      },
      process: {
        step1: 'Contact and quote',
        step2: 'Technical visit',
        step3: 'Work execution',
        step4: 'Final delivery and review'
      },
      advantages: {
        title1: 'High quality materials',
        title2: 'Commitment to delivery times',
        title3: 'Cleanliness and order in each stage',
        title4: 'Direct and transparent treatment'
      },
      gallery: {
        before: 'Before',
        after: 'After',
        reform: 'Reform'
      },
      footer: {
        copyright: '© 2024 KR Reformas. All rights reserved.'
      }
    }
  };

  const t = translations[language];

  useEffect(() => {
    // Optionally, you could check for a saved preference here
  }, []);

  const handleThemeSelect = (mode) => {
    setThemeMode(mode);
    setOpen(false);
  };

  const theme = themeMode === 'light' ? lightTheme : darkTheme;
  const logoSrc = themeMode === 'light' ? '/images/logo-light-theme.png' : '/images/logo-kr.png';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dialog open={open} disableEscapeKeyDown disableBackdropClick>
        <DialogTitle>{t.themeDialog.title}</DialogTitle>
        <DialogContent>
          {t.themeDialog.content}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleThemeSelect('dark')} color="primary" variant="contained">{t.themeDialog.dark}</Button>
          <Button onClick={() => handleThemeSelect('light')} color="primary" variant="outlined">{t.themeDialog.light}</Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: themeMode === 'light'
            ? 'linear-gradient(135deg, #f5f5f5 0%, #fff 100%)'
            : 'linear-gradient(135deg, #181a1b 0%, #23272a 100%)',
        }}
      >
        {/* Header */}
        <Box component="header" sx={{ 
          py: { xs: 1, md: 0.5 }, 
          px: { xs: 1, md: 2 }, 
          bgcolor: 'background.paper', 
          boxShadow: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          flexDirection: 'row' 
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            flex: 1,
            justifyContent: 'flex-start', 
            flexDirection: { xs: 'column', sm: 'row' },
            textAlign: { xs: 'center', sm: 'left' }
          }}>
            <Box sx={{ flex: '0 0 auto', mr: { xs: 0, sm: 2 }, mb: { xs: 1, sm: 0 } }}>
              <img 
                key={themeMode} 
                src={logoSrc} 
                alt="KR Reformas Logo" 
                style={{ 
                  height: isMobile ? 120 : 200, 
                  marginBottom: 0 
                }} 
              />
            </Box>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: { xs: 'center', sm: 'flex-start' }
            }}>
              <Typography 
                variant="h4" 
                color="primary.main" 
                fontWeight={700} 
                className="orbitron" 
                sx={{ 
                  textAlign: { xs: 'center', sm: 'left' },
                  fontSize: { xs: '1.5rem', sm: '2.125rem' }
                }}
              >
                KR Reformas
              </Typography>
              <Typography 
                variant="h5" 
                color="primary.main" 
                sx={{ 
                  fontWeight: 500,
                  fontSize: { xs: '1rem', sm: '1.5rem' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                {t.header.slogan}
              </Typography>
            </Box>
          </Box>
          
          {/* Language Toggle Button */}
          <IconButton
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            sx={{
              color: 'primary.main',
              border: 2,
              borderColor: 'primary.main',
              borderRadius: 2,
              px: 2,
              py: 1,
              backgroundColor: 'background.paper',
              boxShadow: 2,
              minWidth: 50,
              height: 40,
              zIndex: 10,
              position: 'relative',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <Typography variant="body2" fontWeight="bold" fontSize="0.875rem">
              {language === 'es' ? 'EN' : 'ES'}
            </Typography>
          </IconButton>
        </Box>
        {/* Hero Section */}
        <Container maxWidth="md" sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', px: { xs: 2, md: 3 } }}>
          <Box textAlign="center">
            <Typography 
              variant="h2" 
              color="primary.main" 
              gutterBottom 
              fontWeight={700} 
              className="orbitron"
              sx={{ fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.75rem' } }}
            >
              {language === 'es' ? 'Espacio renovado, con calidad garantizada' : 'Renewed space, with guaranteed quality'}
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              paragraph
              sx={{ fontSize: { xs: '0.875rem', sm: '1.25rem' } }}
            >
              {language === 'es' 
                ? 'En KR Reformas y Pinturas nos especializamos en transformar hogares y espacios comerciales con acabados profesionales, pintura de alta calidad y reformas a medida. Nos encargamos de todo, desde pequeños arreglos hasta reformas integrales, con atención al detalle y compromiso total con el cliente.'
                : 'At KR Reformas y Pinturas we specialize in transforming homes and commercial spaces with professional finishes, high-quality paint and custom renovations. We handle everything from small repairs to comprehensive renovations, with attention to detail and total commitment to the client.'
              }
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              sx={{ 
                mt: 3,
                px: { xs: 3, md: 4 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: '0.875rem', md: '1.1rem' },
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 25px rgba(232, 58, 90, 0.4)',
                },
                '&:active': {
                  transform: 'scale(0.95)',
                  boxShadow: '0 4px 15px rgba(232, 58, 90, 0.3)',
                },
              }}
              onClick={() => {
                const message = encodeURIComponent(language === 'es' 
                  ? "Hola! Me gustaría solicitar un presupuesto para reformas/pintura."
                  : "Hello! I would like to request a quote for renovations/painting."
                );
                const whatsappUrl = `https://wa.me/34622215241?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              {t.sections.contact}
            </Button>
          </Box>
        </Container>
        {/* Nuestros Trabajos Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, md: 3 } }}>
          <Typography 
            variant="h3" 
            color="primary.main" 
            textAlign="center" 
            gutterBottom 
            fontWeight={700} 
            className="orbitron" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            {t.sections.ourWork}
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3, 
            overflowX: { xs: 'visible', md: 'auto' },
            pb: 2,
            '&::-webkit-scrollbar': {
              height: 8,
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'rgba(0,0,0,0.1)',
              borderRadius: 4,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'primary.main',
              borderRadius: 4,
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: 'primary.dark',
            }
          }}>
            {/* Grid para móviles, horizontal scroll para desktop */}
            <Box sx={{ 
              display: { xs: 'grid', md: 'flex' },
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' },
              gap: { xs: 2, md: 3 },
              width: '100%'
            }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: { md: 250, lg: 300 }, 
                flexShrink: 0 
              }}>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {t.gallery.before}
                </Typography>
                <img 
                  src="/images/AntesDespues/2.png" 
                  alt="Antes y después - Trabajo 1" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: 12, 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                    e.target.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                    e.target.style.zIndex = '1';
                  }}
                />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: { md: 250, lg: 300 }, 
                flexShrink: 0 
              }}>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {t.gallery.after}
                </Typography>
                <img 
                  src="/images/AntesDespues/4.png" 
                  alt="Antes y después - Trabajo 2" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: 12, 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                    e.target.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                    e.target.style.zIndex = '1';
                  }}
                />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: { md: 250, lg: 300 }, 
                flexShrink: 0 
              }}>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {t.gallery.before}
                </Typography>
                <img 
                  src="/images/AntesDespues/6.png" 
                  alt="Antes y después - Trabajo 3" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: 12, 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                    e.target.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                    e.target.style.zIndex = '1';
                  }}
                />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: { md: 250, lg: 300 }, 
                flexShrink: 0 
              }}>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {t.gallery.after}
                </Typography>
                <img 
                  src="/images/AntesDespues/8.png" 
                  alt="Antes y después - Trabajo 4" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: 12, 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                    e.target.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                    e.target.style.zIndex = '1';
                  }}
                />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: { md: 250, lg: 300 }, 
                flexShrink: 0 
              }}>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {t.gallery.before}
                </Typography>
                <img 
                  src="/images/AntesDespues/antes11.png" 
                  alt="Antes y después - Trabajo 5" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: 12, 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                    e.target.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                    e.target.style.zIndex = '1';
                  }}
                />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: { md: 250, lg: 300 }, 
                flexShrink: 0 
              }}>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {t.gallery.after}
                </Typography>
                <img 
                  src="/images/AntesDespues/despues21.png" 
                  alt="Antes y después - Trabajo 6" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: 12, 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                    e.target.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                    e.target.style.zIndex = '1';
                  }}
                />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: { md: 250, lg: 300 }, 
                flexShrink: 0 
              }}>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {t.gallery.reform}
                </Typography>
                <img 
                  src="/images/AntesDespues/reforma1.png" 
                  alt="Reforma 1" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: 12, 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                    e.target.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                    e.target.style.zIndex = '1';
                  }}
                />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: { md: 250, lg: 300 }, 
                flexShrink: 0 
              }}>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {t.gallery.reform}
                </Typography>
                <img 
                  src="/images/AntesDespues/reforma2.png" 
                  alt="Reforma 2" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: 12, 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                    e.target.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                    e.target.style.zIndex = '1';
                  }}
                />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: { md: 250, lg: 300 }, 
                flexShrink: 0 
              }}>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {t.gallery.reform}
                </Typography>
                <img 
                  src="/images/AntesDespues/reforma3.png" 
                  alt="Reforma 3" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: 12, 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                    e.target.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                    e.target.style.zIndex = '1';
                  }}
                />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: { md: 250, lg: 300 }, 
                flexShrink: 0 
              }}>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {t.gallery.reform}
                </Typography>
                <img 
                  src="/images/AntesDespues/reforma4.png" 
                  alt="Reforma 4" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: 12, 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                    e.target.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                    e.target.style.zIndex = '1';
                  }}
                />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: { md: 250, lg: 300 }, 
                flexShrink: 0 
              }}>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {t.gallery.reform}
                </Typography>
                <img 
                  src="/images/AntesDespues/reforma5.png" 
                  alt="Reforma 5" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: 12, 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                    e.target.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                    e.target.style.zIndex = '1';
                  }}
                />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: { md: 250, lg: 300 }, 
                flexShrink: 0 
              }}>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {t.gallery.reform}
                </Typography>
                <img 
                  src="/images/AntesDespues/reforma6.png" 
                  alt="Reforma 6" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: 12, 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                    e.target.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                    e.target.style.zIndex = '1';
                  }}
                />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minWidth: { md: 250, lg: 300 }, 
                flexShrink: 0 
              }}>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {t.gallery.reform}
                </Typography>
                <img 
                  src="/images/AntesDespues/reforma121.png" 
                  alt="Reforma 121" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: 12, 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative'
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                    e.target.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                    e.target.style.zIndex = '1';
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
        {/* Por qué elegirnos Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, bgcolor: 'background.paper', px: { xs: 2, md: 3 } }}>
          <Typography 
            variant="h3" 
            color="primary.main" 
            textAlign="center" 
            gutterBottom 
            fontWeight={700} 
            className="orbitron" 
            sx={{ 
              mb: 6,
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            {t.sections.whyChooseUs}
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, md: 4 } }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 2, 
              p: { xs: 2, md: 3 }, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography variant="h5" color="primary.main" sx={{ fontWeight: 600, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                ✔️
              </Typography>
              <Box>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 1, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}
                >
                  {t.advantages.title1}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    lineHeight: 1.6,
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  Utilizamos solo materiales premium y marcas reconocidas para garantizar durabilidad y acabados profesionales.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 2, 
              p: { xs: 2, md: 3 }, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography variant="h5" color="primary.main" sx={{ fontWeight: 600, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                ✔️
              </Typography>
              <Box>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 1, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}
                >
                  {t.advantages.title2}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    lineHeight: 1.6,
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  Cumplimos con los plazos acordados. Tu tiempo es valioso y nos comprometemos a entregar en la fecha prometida.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 2, 
              p: { xs: 2, md: 3 }, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography variant="h5" color="primary.main" sx={{ fontWeight: 600, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                ✔️
              </Typography>
              <Box>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 1, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}
                >
                  {t.advantages.title3}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    lineHeight: 1.6,
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  Mantenemos tu espacio limpio y organizado durante todo el proceso. Respetamos tu hogar como si fuera el nuestro.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 2, 
              p: { xs: 2, md: 3 }, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography variant="h5" color="primary.main" sx={{ fontWeight: 600, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                ✔️
              </Typography>
              <Box>
                <Typography 
                  variant="h6" 
                  color="primary.main" 
                  sx={{ 
                    mb: 1, 
                    fontWeight: 600, 
                    className: "orbitron",
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}
                >
                  {t.advantages.title4}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    lineHeight: 1.6,
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  Comunicación clara y honesta. Sin intermediarios, tratamos directamente contigo para una experiencia personalizada.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        {/* Proceso de Trabajo Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, bgcolor: 'background.paper', px: { xs: 2, md: 3 } }}>
          <Typography 
            variant="h3" 
            color="primary.main" 
            textAlign="center" 
            gutterBottom 
            fontWeight={700} 
            className="orbitron" 
            sx={{ 
              mb: 6,
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            {t.sections.workProcess}
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, md: 4 } }}>
            <Box sx={{ 
              textAlign: 'center', 
              p: { xs: 2, md: 3 }, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography 
                variant="h4" 
                color="primary.main" 
                sx={{ 
                  mb: 2, 
                  fontWeight: 600, 
                  className: "orbitron",
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2.125rem' }
                }}
              >
                1. {t.process.step1}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  lineHeight: 1.6,
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                Contactanos por WhatsApp o teléfono. Evaluamos tu proyecto y te entregamos un presupuesto detallado y transparente sin compromiso.
              </Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center', 
              p: { xs: 2, md: 3 }, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography 
                variant="h4" 
                color="primary.main" 
                sx={{ 
                  mb: 2, 
                  fontWeight: 600, 
                  className: "orbitron",
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2.125rem' }
                }}
              >
                2. {t.process.step2}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  lineHeight: 1.6,
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                Realizamos una visita al sitio para evaluar las condiciones, tomar medidas precisas y planificar la ejecución de la obra.
              </Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center', 
              p: { xs: 2, md: 3 }, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography 
                variant="h4" 
                color="primary.main" 
                sx={{ 
                  mb: 2, 
                  fontWeight: 600, 
                  className: "orbitron",
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2.125rem' }
                }}
              >
                3. {t.process.step3}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  lineHeight: 1.6,
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                Nuestro equipo especializado ejecuta la obra con materiales de calidad y técnicas profesionales, manteniendo comunicación constante.
              </Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center', 
              p: { xs: 2, md: 3 }, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography 
                variant="h4" 
                color="primary.main" 
                sx={{ 
                  mb: 2, 
                  fontWeight: 600, 
                  className: "orbitron",
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2.125rem' }
                }}
              >
                4. {t.process.step4}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  lineHeight: 1.6,
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                Realizamos una revisión exhaustiva junto al cliente, garantizando que todo esté perfecto antes de la entrega final.
              </Typography>
            </Box>
          </Box>
        </Container>
        {/* Footer */}
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: { xs: 2, md: 3 }, mt: 'auto' }}>
          <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography 
                variant="h5" 
                color="primary.main" 
                gutterBottom 
                fontWeight={700} 
                className="orbitron"
                sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
              >
                ¿Tenés dudas?
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                gutterBottom
                sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
              >
                {t.sections.doubtsSubtitle}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  mb: 2,
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                📲 {t.sections.whatsappCTA}
              </Typography>
              <Button
                component="a"
                href={`https://wa.me/34622215241?text=${encodeURIComponent("Hola! Me gustaría saber cuánto cuesta mi proyecto de reforma/pintura.")}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<WhatsAppIcon />}
                sx={{
                  borderRadius: 2,
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.5, md: 1.5 },
                  fontSize: { xs: '0.875rem', md: '1.1rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: 3,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 6,
                  },
                  '&:active': {
                    transform: 'translateY(0)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Consultar por WhatsApp
              </Button>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
              >
                {t.footer.copyright}
              </Typography>
              <IconButton
                component="a"
                href={`https://wa.me/34622215241?text=${encodeURIComponent("Hola! Me gustaría solicitar un presupuesto para reformas/pintura.")}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    color: 'primary.dark',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <WhatsAppIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
              </IconButton>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 