// eslint-disable-next-line
module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'release',
        'style',
        'test',
        'improvement'
      ]
    ]
  },
  extends: ['@commitlint/config-conventional']
}
