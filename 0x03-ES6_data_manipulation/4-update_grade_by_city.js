export default function updateStudentGradeByCity(array, city, grade) {
  return array
    .filter((i) => i.location === city)
    .map((student) => {
      const grade1 = grade
        .filter((i) => i.studentId === student.id)
	.map((x) => x.grade)[0];
      const g = grade1 || 'N/A';
      return { ...student, g };
    });
}
