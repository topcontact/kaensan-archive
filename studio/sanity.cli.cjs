const { defineCliConfig } = require('sanity/cli');

module.exports = defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'mvvl7y27',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
});
