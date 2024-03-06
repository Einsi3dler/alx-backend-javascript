export default function createReportObject(employeesList) {
    const resObj = {
      allEmployees: {
        ...employeesList,
      },
      getNumberOfDepartments(employeesList) {
        return Object.keys(employeesList).length;
      },
    };
    return resObj;
  }
  