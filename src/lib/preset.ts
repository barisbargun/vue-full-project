import { definePreset, palette } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const Preset = definePreset(Aura, {
    semantic: {
        primary: palette('{blue}'),
        colorScheme: {
            light: {
                primary: {
                    color: '{primary.500}',
                    contrastColor: '#ffffff',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.700}',
                },
                highlight: {
                    background: '{primary.100}',
                    focusBackground: '{primary.200}',
                    color: '{primary.700}',
                    focusColor: '{primary.800}',
                },
            },
            dark: {
                primary: {
                    color: '{primary.400}',
                    contrastColor: '{surface.900}',
                    hoverColor: '{primary.300}',
                    activeColor: '{primary.200}',
                },
                highlight: {
                    background:
                        'color-mix(in srgb, {primary.400}, transparent 84%)',
                    focusBackground:
                        'color-mix(in srgb, {primary.400}, transparent 76%)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)',
                },
            },
        },
    }
});

export default Preset;