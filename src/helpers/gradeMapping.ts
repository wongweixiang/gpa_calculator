export const gradeMapping = {
  DIST: 4.0,
  A: 4.0,
  "B+": 3.5,
  B: 3.0,
  "C+": 2.5,
  C: 2.0,
  "D+": 1.5,
  D: 1.0,
  F: 0.0,
};

export const gradeColorMapping: Record<keyof typeof gradeMapping, string> = {
  DIST: "text-blue-400",
  A: "text-blue-400",
  "B+": "text-green-400",
  B: "text-green-400",
  "C+": "text-yellow-400",
  C: "text-yellow-400",
  "D+": "text-orange-400",
  D: "text-orange-400",
  F: "text-red-400",
};
