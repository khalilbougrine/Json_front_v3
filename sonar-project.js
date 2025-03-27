module.exports = {
  sonar: {
    hostUrl: 'http://localhost:6060',
    token: 'sqp_53a0b021f99d4c3512cb8c1722bfe1f393e38c10',
    projectKey: 'json-front',
    projectName: 'JSON Frontend',
    sources: 'src',
    exclusions: '**/node_modules/**,**/*.spec.ts',
    javascript: {
      lcov: {
        reportPaths: 'coverage/lcov.info'
      }
    },
    typescript: {
      lcov: {
        reportPaths: 'coverage/lcov.info'
      }
    },
    testExecutionReportPaths: 'test-report.xml'
  }
};
