import { border, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        lineHeight: '1.5',
        fontWeight: '400',
        letterSpacing: '0.01em',
        transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
      },
      // a: {
      //   color: props.colorMode === 'dark' ? 'blue.300' : 'blue.500',
      //   textDecoration: 'none',
      //   _hover: {
      //     textDecoration: 'underline',
      //     color: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
      //   },
      // },
      h1: {
        fontSize: '2xl',
        fontWeight: '700',
        lineHeight: '1.2',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
      h2: {
        fontSize: 'xl',
        fontWeight: '600',
        lineHeight: '1.3',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
      h3: {
        fontSize: 'lg',
        fontWeight: '500',
        lineHeight: '1.4',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
      p: {
        fontSize: 'md',
        fontWeight: '400',
        lineHeight: '1.5',
        color: props.colorMode === 'dark' ? 'gray.400' : 'gray.600',
      },
      button: {
        fontSize: 'md',
        fontWeight: '500',
        lineHeight: '1.5',
        color: props.colorMode === 'dark' ? 'white' : 'white',
        bg: props.colorMode === 'dark' ? 'blue.600' : 'blue.500',
        _active: {
          bg: props.colorMode === 'dark' ? 'blue.700' : 'blue.600',
          outline: 'none',
        },
        _hover: {
          bg: props.colorMode === 'dark' ? 'blue.500' : 'blue.400',
          color: props.colorMode === 'dark' ? 'white' : 'white',
        },
        _focus: {
          outline: 'none',
          color: props.colorMode === 'dark' ? 'white' : 'white',
        },
      },

      input: {
        fontSize: 'md',
        fontWeight: '400',
        lineHeight: '1.5',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
        _placeholder: {
          color: props.colorMode === 'dark' ? 'gray.400' : 'gray.500',
        },
        _hover: {
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          boxShadow: '0 0 0 1px',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _focus: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _active: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.500' : 'blue.700',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
      },
      label: {
        fontSize: 'md',
        fontWeight: '500',
        lineHeight: '1.5',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
      textarea: {
        fontSize: 'md',
        fontWeight: '400',
        lineHeight: '1.5',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
        _placeholder: {
          color: props.colorMode === 'dark' ? 'gray.400' : 'gray.500',
        },
        _hover: {
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          boxShadow: '0 0 0 1px',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _focus: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _active: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.500' : 'blue.700',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
      },
      select: {
        fontSize: 'md',
        fontWeight: '400',
        lineHeight: '1.5',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
        _placeholder: {
          color: props.colorMode === 'dark' ? 'gray.400' : 'gray.500',
        },
        _hover: {
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          boxShadow: '0 0 0 1px',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _focus: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _active: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.500' : 'blue.700',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
      },
      checkbox: {
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
        _hover: {
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          boxShadow: '0 0 0 1px',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _focus: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _active: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.500' : 'blue.700',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
      },
      radio: {
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
        _hover: {
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          boxShadow: '0 0 0 1px',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _focus: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _active: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.500' : 'blue.700',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
      },
      switch: {
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
        _hover: {
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          boxShadow: '0 0 0 1px',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _focus: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _active: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.500' : 'blue.700',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
      },
      modal: {
        dialog: {
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
          borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
          _header: {
            bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
            color: props.colorMode === 'dark' ? 'white' : 'gray.800',
          },
          _body: {
            bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
            color: props.colorMode === 'dark' ? 'white' : 'gray.800',
          },
          _footer: {
            bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
            color: props.colorMode === 'dark' ? 'white' : 'gray.800',
          },
        },
      },
      tooltip: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
        _arrow: {
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _focus: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _active: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.500' : 'blue.700',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
      },
      link: {
        color: props.colorMode === 'dark' ? 'blue.300' : 'blue.500',
        textDecoration: 'none',
        _hover: {
          textDecoration: 'underline',
          color: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
        },
        _focus: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _active: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.500' : 'blue.700',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
      },
      list: {
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
        _hover: {
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          boxShadow: '0 0 0 1px',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _focus: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _active: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.500' : 'blue.700',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
      },
      table: {
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
        _hover: {
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          boxShadow: '0 0 0 1px',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _focus: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _active: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.500' : 'blue.700',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
      },
      form: {
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
      },
      divider: {
        borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '4px',
        _hover: {
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          boxShadow: '0 0 0 1px',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _focus: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.400' : 'blue.600',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
        _active: {
          boxShadow: '0 0 0 1px',
          outline: 'none',
          borderColor: props.colorMode === 'dark' ? 'blue.500' : 'blue.700',
          color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        },
      },
    }),
  },
  semanticTokens: {
    colors: {
      primaryText: {
        default: 'gray.800', // Light mode
        _dark: 'white', // Dark mode
      },
      secondaryText: {
        default: 'gray.600',
        _dark: 'gray.400',
      },
      background: {
        default: 'white', // Light mode
        _dark: 'gray.900', // Dark mode
      },
      surface: {
        default: 'gray.100',
        _dark: 'gray.800',
      },
      accent: {
        default: 'blue.500',
        _dark: 'blue.300',
      },
      error: {
        default: 'red.500',
        _dark: 'red.300',
      },
      warning: {
        default: 'yellow.500',
        _dark: 'yellow.300',
      },
      success: {
        default: 'green.500',
        _dark: 'green.300',
      },
      info: {
        default: 'blue.500',
        _dark: 'blue.300',
      },
    },
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
});

export default theme;
