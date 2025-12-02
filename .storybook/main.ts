const config = {
    framework: {
        name: '@storybook/html-vite',
        options: {}
    },
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    builder: '@storybook/builder-vite',
};

export default config;
