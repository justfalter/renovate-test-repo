console.log(`MY_ENV_VAR: '${process.env['MY_ENV_VAR']}'`);
console.log(`ANOTHER_ENV_VAR: '${process.env['ANOTHER_ENV_VAR']}'`);
console.log(`IGNORED_ENV_VAR: '${process.env['IGNORED_ENV_VAR']}'`);
console.log(`ENV_VAR_THAT_DOES_NOT_EXIST: '${process.env['ENV_VAR_THAT_DOES_NOT_EXIST']}'`);

module.exports = {
  branchPrefix: 'renovate/',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: false,
  platform: 'github',
  forkProcessing: 'false',
  // dryRun: 'full',
  configFileNames: ['.github/renovate-github-action-1032.json5'],
  repositories: ['justfalter/renovate-test-repo'],
  packageRules: [
    // {
    //   description: 'lockFileMaintenance',
    //   matchUpdateTypes: [
    //     'pin',
    //     'digest',
    //     'patch',
    //     'minor',
    //     'major',
    //     'lockFileMaintenance',
    //   ],
    //   dependencyDashboardApproval: false,
    //   minimumReleaseAge: null,
    // },
  ],
};