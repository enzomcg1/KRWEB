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
  const [open, setOpen] = useState(true);

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
        <DialogTitle>Elige el modo visual</DialogTitle>
        <DialogContent>
          ¿Prefieres modo oscuro o claro?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleThemeSelect('dark')} color="primary" variant="contained">Dark</Button>
          <Button onClick={() => handleThemeSelect('light')} color="primary" variant="outlined">Light</Button>
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
        <Box component="header" sx={{ py: 0.5, px: 2, bgcolor: 'background.paper', boxShadow: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'flex-start', mb: 1 }}>
            <Box sx={{ flex: '0 0 auto', mr: 2 }}>
              <img key={themeMode} src={logoSrc} alt="KR Reformas Logo" style={{ height: 200, marginBottom: 0 }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="h4" color="primary.main" fontWeight={700} className="orbitron" sx={{ textAlign: 'left' }}>
                KR Reformas
              </Typography>
              <Typography variant="h5" color="primary.main" sx={{ fontWeight: 500 }}>
                Transformamos tu espacio, mejoramos tu vida.
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Hero Section */}
        <Container maxWidth="md" sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box textAlign="center">
            <Typography variant="h2" color="primary.main" gutterBottom fontWeight={700} className="orbitron">
            Espacio renovado, con calidad garantizada
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
            En KR Reformas y Pinturas nos especializamos en transformar hogares y espacios comerciales con acabados profesionales, pintura de alta calidad y reformas a medida. Nos encargamos de todo, desde pequeños arreglos hasta reformas integrales, con atención al detalle y compromiso total con el cliente.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              sx={{ 
                mt: 3,
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
                const message = encodeURIComponent("Hola! Me gustaría solicitar un presupuesto para reformas/pintura.");
                const whatsappUrl = `https://wa.me/595994351389?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Pedir Presupuesto
            </Button>
          </Box>
        </Container>
        {/* Nuestros Trabajos Section */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Typography variant="h3" color="primary.main" textAlign="center" gutterBottom fontWeight={700} className="orbitron" sx={{ mb: 4 }}>
            Nuestros Trabajos
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: 3, 
            overflowX: 'auto', 
            pb: 2,
            '&::-webkit-scrollbar': {
              height: 8,
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(0,0,0,0.1)',
              borderRadius: 4,
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(232, 58, 90, 0.5)',
              borderRadius: 4,
              '&:hover': {
                background: 'rgba(232, 58, 90, 0.7)',
              },
            },
          }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400, flexShrink: 0 }}>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                Antes
              </Typography>
              <img 
                src="/images/antesDespues/2.png" 
                alt="Antes y después - Trabajo 1" 
                style={{ 
                  maxWidth: 500, 
                  width: '100%', 
                  borderRadius: 12, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400, flexShrink: 0 }}>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                Después
              </Typography>
              <img 
                src="/images/antesDespues/4.png" 
                alt="Antes y después - Trabajo 2" 
                style={{ 
                  maxWidth: 500, 
                  width: '100%', 
                  borderRadius: 12, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400, flexShrink: 0 }}>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                Antes
              </Typography>
              <img 
                src="/images/antesDespues/6.png" 
                alt="Antes y después - Trabajo 3" 
                style={{ 
                  maxWidth: 500, 
                  width: '100%', 
                  borderRadius: 12, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400, flexShrink: 0 }}>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                Después
              </Typography>
              <img 
                src="/images/antesDespues/8.png" 
                alt="Antes y después - Trabajo 4" 
                style={{ 
                  maxWidth: 500, 
                  width: '100%', 
                  borderRadius: 12, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400, flexShrink: 0 }}>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                Antes
              </Typography>
              <img 
                src="/images/antesDespues/antes11.png" 
                alt="Antes y después - Trabajo 5" 
                style={{ 
                  maxWidth: 500, 
                  width: '100%', 
                  borderRadius: 12, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400, flexShrink: 0 }}>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                Después
              </Typography>
              <img 
                src="/images/antesDespues/despues21.png" 
                alt="Antes y después - Trabajo 6" 
                style={{ 
                  maxWidth: 500, 
                  width: '100%', 
                  borderRadius: 12, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400, flexShrink: 0 }}>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                Reforma
              </Typography>
              <img 
                src="/images/antesDespues/reforma1.png" 
                alt="Reforma 1" 
                style={{ 
                  maxWidth: 500, 
                  width: '100%', 
                  borderRadius: 12, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400, flexShrink: 0 }}>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                Reforma
              </Typography>
              <img 
                src="/images/antesDespues/reforma2.png" 
                alt="Reforma 2" 
                style={{ 
                  maxWidth: 500, 
                  width: '100%', 
                  borderRadius: 12, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400, flexShrink: 0 }}>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                Reforma
              </Typography>
              <img 
                src="/images/antesDespues/reforma3.png" 
                alt="Reforma 3" 
                style={{ 
                  maxWidth: 500, 
                  width: '100%', 
                  borderRadius: 12, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400, flexShrink: 0 }}>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                Reforma
              </Typography>
              <img 
                src="/images/antesDespues/reforma4.png" 
                alt="Reforma 4" 
                style={{ 
                  maxWidth: 500, 
                  width: '100%', 
                  borderRadius: 12, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400, flexShrink: 0 }}>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                Reforma
              </Typography>
              <img 
                src="/images/antesDespues/reforma5.png" 
                alt="Reforma 5" 
                style={{ 
                  maxWidth: 500, 
                  width: '100%', 
                  borderRadius: 12, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400, flexShrink: 0 }}>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                Reforma
              </Typography>
              <img 
                src="/images/antesDespues/reforma6.png" 
                alt="Reforma 6" 
                style={{ 
                  maxWidth: 500, 
                  width: '100%', 
                  borderRadius: 12, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400, flexShrink: 0 }}>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                Reforma
              </Typography>
              <img 
                src="/images/antesDespues/reforma121.png" 
                alt="Reforma 121" 
                style={{ 
                  maxWidth: 500, 
                  width: '100%', 
                  borderRadius: 12, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} 
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 12px 40px rgba(232, 58, 90, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
              />
            </Box>
          </Box>
        </Container>
        {/* Por qué elegirnos Section */}
        <Container maxWidth="lg" sx={{ py: 6, bgcolor: 'background.paper' }}>
          <Typography variant="h3" color="primary.main" textAlign="center" gutterBottom fontWeight={700} className="orbitron" sx={{ mb: 6 }}>
            ¿Por qué elegirnos?
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 2, 
              p: 3, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography variant="h5" color="primary.main" sx={{ fontWeight: 600 }}>
                ✔️
              </Typography>
              <Box>
                <Typography variant="h6" color="primary.main" sx={{ mb: 1, fontWeight: 600, className: "orbitron" }}>
                  Materiales de alta calidad
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Utilizamos solo materiales premium y marcas reconocidas para garantizar durabilidad y acabados profesionales.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 2, 
              p: 3, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography variant="h5" color="primary.main" sx={{ fontWeight: 600 }}>
                ✔️
              </Typography>
              <Box>
                <Typography variant="h6" color="primary.main" sx={{ mb: 1, fontWeight: 600, className: "orbitron" }}>
                  Compromiso con los tiempos
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Cumplimos con los plazos acordados. Tu tiempo es valioso y nos comprometemos a entregar en la fecha prometida.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 2, 
              p: 3, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography variant="h5" color="primary.main" sx={{ fontWeight: 600 }}>
                ✔️
              </Typography>
              <Box>
                <Typography variant="h6" color="primary.main" sx={{ mb: 1, fontWeight: 600, className: "orbitron" }}>
                  Limpieza y orden
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Mantenemos tu espacio limpio y organizado durante todo el proceso. Respetamos tu hogar como si fuera el nuestro.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 2, 
              p: 3, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography variant="h5" color="primary.main" sx={{ fontWeight: 600 }}>
                ✔️
              </Typography>
              <Box>
                <Typography variant="h6" color="primary.main" sx={{ mb: 1, fontWeight: 600, className: "orbitron" }}>
                  Trato directo y transparente
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Comunicación clara y honesta. Sin intermediarios, tratamos directamente contigo para una experiencia personalizada.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        {/* Proceso de Trabajo Section */}
        <Container maxWidth="lg" sx={{ py: 6, bgcolor: 'background.paper' }}>
          <Typography variant="h3" color="primary.main" textAlign="center" gutterBottom fontWeight={700} className="orbitron" sx={{ mb: 6 }}>
            Proceso de Trabajo
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <Box sx={{ 
              textAlign: 'center', 
              p: 3, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography variant="h4" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                1. Contacto y Presupuesto
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                Contactanos por WhatsApp o teléfono. Evaluamos tu proyecto y te entregamos un presupuesto detallado y transparente sin compromiso.
              </Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center', 
              p: 3, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography variant="h4" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                2. Visita Técnica
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                Realizamos una visita al sitio para evaluar las condiciones, tomar medidas precisas y planificar la ejecución de la obra.
              </Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center', 
              p: 3, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography variant="h4" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                3. Ejecución de la Obra
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                Nuestro equipo especializado ejecuta la obra con materiales de calidad y técnicas profesionales, manteniendo comunicación constante.
              </Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center', 
              p: 3, 
              borderRadius: 2,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 25px rgba(232, 58, 90, 0.2)',
                bgcolor: 'rgba(232, 58, 90, 0.05)',
              },
            }}>
              <Typography variant="h4" color="primary.main" sx={{ mb: 2, fontWeight: 600, className: "orbitron" }}>
                4. Entrega Final y Revisión
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                Realizamos una revisión exhaustiva junto al cliente, garantizando que todo esté perfecto antes de la entrega final.
              </Typography>
            </Box>
          </Box>
        </Container>
        {/* Footer */}
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3, mt: 'auto' }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="h5" color="primary.main" gutterBottom fontWeight={700} className="orbitron">
                ¿Tenés dudas?
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                ¿Querés saber cuánto cuesta tu proyecto?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                📲 ¡Hablá con nosotros por WhatsApp sin compromiso!
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
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
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
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
              <Typography variant="body2" color="text.secondary">
                © 2024 KR Reformas. Todos los derechos reservados.
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
                <WhatsAppIcon sx={{ fontSize: 28 }} />
              </IconButton>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 