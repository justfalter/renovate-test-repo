module.exports = {
  branchPrefix: 'renovate/',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: false,
  platform: 'github',
  forkProcessing: 'false',
  // dryRun: 'full',
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