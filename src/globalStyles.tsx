import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

export const GlobalStyles = () => {
  return (
    <MUIGlobalStyles
      styles={{
        '*': {
          // Standard (Firefox & modern browsers)
          scrollbarWidth: 'thin',
          // Matching the WebKit thumb color (grey with opacity) and transparent track
          scrollbarColor: 'rgba(100, 100, 100, 0.4) transparent',
        },
        // WebKit (Chrome, Safari, Edge)
        '*::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
          backgroundColor: 'transparent', // Crucial for Safari to not show a white box
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
          borderRadius: '0px',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(100, 100, 100, 0.4)',
          borderRadius: '20px',
          border: '2px solid transparent',
          backgroundClip: 'content-box',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'rgba(150, 150, 150, 0.6)',
        },
        '*::-webkit-scrollbar-corner': {
          backgroundColor: 'transparent',
        },
      }}
    />
  );
};
