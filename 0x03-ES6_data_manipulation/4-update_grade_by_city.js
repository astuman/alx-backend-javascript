export default function updateStudentGradeByCity(array, city, grade) {
  return array
    .filter((i) => i.location === city)
    .map((student) => {
      const newGrade = grade
        .filter((i) => i.studentId === student.id)
        .map((x) => x.newGrade)[0];
      const g = newGrade || 'N/A';
      return { ...student, g };
    });
}
