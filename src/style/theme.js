// theme.js
const media = {
    mediaLg: '960px',
    mediaMd: '737px',
    mediaSm: '414px'
}

const border = {
  borderRadius: '15px'
}

export const lightTheme = {
    body: '#ffffff',
    bg20: '#e0e0e06b',
    bg50: '#e0e0e0',
    text: '#00204a',
    title: '#00204a',
    title2: '#1A5EA0',
    highlightLink: '#1A5EA0',
    softShadow: '#00204a85',
    // Primary button
    primaryButtonText: '#ffffff',
    primaryButton: '#1A5EA0',
    primaryButtonHover: '#692AFC',
    // Secondary button
    secondaryButtonText: '#ffffff',
    secondaryButton: '#3E07BF',
    secondaryButtonHover: '#692AFC',
    // Outline button
    outlineButtonText: '#3E07BF',
    outlineButton: '#3E07BF',
    outlineButtonHover: '#ffffff',
    // Body
    emphasizedText: '#1A5EA0',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(109deg,#cfecff,#75C8FF)',
    navbar: 'white',
    navbarText: '#1A5EA0',
    navbarTextHover: 'black',
    error: '#c90000',
    //Alert
    alertFill: '#846823',
    ...border,
    ...media
  }

  export const darkTheme = {
    body: '#0c0a0e',
    bg20: '#1b1b1b',
    bg50: '#29242d',
    softShadow: 'transparent',
    text: '#dfd9e8',
    title: '#91C1EE',
    title2: '#676eff',
    highlightLink: '#cd00ff',
    // Primary button
    primaryButtonText: '#ffffff',
    primaryButton: '#4D8ECC',
    primaryButtonHover: '#91C1EE',
    // Secondary button
    secondaryButtonText: '#ffffff',
    secondaryButton: '#4D8ECC',
    secondaryButtonHover: '#91C1EE',
    // Outline button
    outlineButtonText: '#4D8ECC',
    outlineButton: '#4D8ECC',
    outlineButtonHover: '#ffffff',
    emphasizedText: '#91C1EE',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(57deg,rgb(37 27 59),rgb(66 70 158))',
    navbar: 'black',
    navbarText: '#91C1EE',
    navbarTextHover: 'white',
    error: '#c90000',
    //Alert
    alertFill: '#f0e5c9',
    ...border,
    ...media
  }