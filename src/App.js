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
        {/* Footer */}
        <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'background.paper', mt: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} KR Reformas. All rights reserved.
          </Typography>
          <img 
            src="/images/AntesDespues/whatsApppppp.png" 
            alt="WhatsApp" 
            style={{ 
              height: 30, 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onClick={() => {
              const message = encodeURIComponent("Hola! Me gustaría contactar con KR Reformas.");
              const whatsappUrl = `https://wa.me/595994351389?text=${message}`;
              window.open(whatsappUrl, '_blank');
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 