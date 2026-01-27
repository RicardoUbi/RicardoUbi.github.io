import { createTheme } from "@mantine/core";

export const theme = createTheme({
    primaryColor: 'petrol',

    colors: {
        petrol: [
            '#e6f4f4',
            '#cce9ea',
            '#9fd4d6',
            '#6fbec2',
            '#45aab0',
            '#2f9aa2',
            '#238e97',
            '#1a7a82',
            '#0f5f67',
            '#083f45',
        ],

        winterGreen: [
            '#e8f7f1',
            '#cfeee2',
            '#9edbc4',
            '#6dc8a5',
            '#3db688',
            '#27a573',
            '#1e9a68',
            '#148556',
            '#0b6a45',
            '#054a30',
        ],

        winterRed: [
            '#ffecee',
            '#fdd6db',
            '#f4a9b3',
            '#ec7a8b',
            '#e45167',
            '#e0354f',
            '#de2746',
            '#c41c3a',
            '#ab142f',
            '#820b1f',
        ],

        winterGray: [
            '#f2f4f8',
            '#e6e9ef',
            '#cfd5df',
            '#b6bdcc',
            '#9ea7ba',
            '#8a94ad',
            '#7c87a3',
            '#6a758f',
            '#565f78',
            '#3d445a',
        ],

        iceBlue: [
            '#f4f8ff',
            '#e8effa',
            '#cfdcf2',
            '#b4c7ea',
            '#9bb4e3',
            '#86a4de',
            '#789bdb',
            '#6686c4',
            '#5676b1',
            '#3f5c8f',
        ],

        winterViolet: [
            '#f3f0ff',
            '#e5dbff',
            '#cbbfff',
            '#b197fc',
            '#9775fa',
            '#845ef7',
            '#7950f2',
            '#7048e8',
            '#6741d9',
            '#5f3dc4',
        ],

        winterBlack: [
            '#e5e7eb',
            '#cbd5e1',
            '#94a3b8',
            '#64748b',
            '#475569',
            '#334155',
            '#1e293b',
            '#0f172a',
            '#0b1220',
            '#05080f',
        ],
    },

    fontFamily: 'IBM Plex Sans, system-ui, sans-serif',
    headings: {
        fontFamily: 'IBM Plex Sans, system-ui, sans-serif',
        fontWeight: '700',
    },

    defaultRadius: 'md',
});
