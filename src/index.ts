import { CounterReport } from '@qualweb/counter';

function executeCounter(): CounterReport {
  const report: CounterReport = {
    type: 'counter',
    data: {
      roles: {},
      tags: {}
    }
  };

  const elementList = window.qwPage.findAll('*');

  //get explicit roles
  for (const element of elementList ?? []) {
    const role = element.getRole();
    const tag = element.getTagName();

    // count elements
    if (role) {
      if (report.data.roles[role] === undefined) {
        report.data.roles[role] = 0;
      }

      report.data.roles[role]++;
    }

    // count tags
    if (report.data.tags[tag] === undefined) {
      report.data.tags[tag] = 0;
    }
    report.data.tags[tag]++;
  }

  return report;
}

export { executeCounter };
