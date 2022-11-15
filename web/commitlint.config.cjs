// convert it later
module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'wip-docs',
        'feat',
        'wip-feat',
        'fix',
        'wip-fix',
        'perf',
        'wip-perf',
        'revert',
        'refactor',
        'wip-refactor',
        'style',
        'wip-style',
        'test',
        'wip-test',
        'chore',
        'wip-chore',
      ],
    ],
  },
};
