export type Diploma = {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const defaultDiploma: Diploma = {
  id: '',
  name: '',
  icon: () => null,
};