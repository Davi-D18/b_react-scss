export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'build',
        'ci',
        'revert',
        'wip',
        'temp',
        'security',
        'design',
        'locale',
        'ux',
        'deps',
        'config',
        'data',
        'hotfix',
        'infra',
        'env',
        'lint',
        'release',
        'seo'
      ]
    ]
  }
}
