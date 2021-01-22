module.exports = {
  extends: 'makezi',
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/components', './components'],
          ['@/styles', './styles'],
          ['@/layouts', './layouts'],
          ['@/utils', './utils']
        ]
      }
    }
  },
  rules: {
    'import/group-exports': 2,
    'import/exports-last': 2
  }
};
