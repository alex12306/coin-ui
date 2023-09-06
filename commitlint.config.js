module.exports = {
  // 自定义commit的type类型，因为默认是没有release的
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
