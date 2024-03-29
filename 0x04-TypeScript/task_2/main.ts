interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
}
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}
export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}
export function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) return new Teacher();

  return new Director();
}
export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}
export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let request;
  if (isDirector(employee)) {
      request = employee.workDirectorTasks();
    } else {
      request = employee.workTeacherTasks();
    }
  return request;
}
type Subjects = "Math" | "History";
export function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') return 'Teaching Math';
    if (todayClass === 'History') return 'Teaching History';
}

