import { extendTheme, theme as base, withDefaultColorScheme } from "@chakra-ui/react";

const inputSelectStyles = {

}

const theme = extendTheme ({
    colors: {
        brand: {
            50: '#f5fee5',
            100: '#e1fbb2',
            200: '#cdf781',
            300: '#b8ee56',
            400: '#a2e032',
            500: '#8ac919',
            600: '#71ab09',
            700: '#578602',
            800: '#3c5e00',
            900: '#203300',

        },

    },
fonts: {
    Headers: 'Montserrat',
    p: 'Montserrat',
},


compontents: {
    Input: { ...inputSelectStyles },
        variants: {
            filled: {
                field: {
                    _focus: {
                        borderColor: 'brand.500',
                    },
                },

            },


        },
        sizes: {
            md: {
                field: {
                    borderRadius: 'none'
                },
            },
        },


    },

},



withDefaultColorScheme ({
    colorScheme: 'brand',
    components: ['Checkbox']


})

) ;

export default theme;