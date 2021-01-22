module.exports = {
  extends: 'makezi',
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/components', './components'],
          ['@/styles', './styles'],
          ['@/layouts', './layouts']
        ]
      }
    }
  }
};
