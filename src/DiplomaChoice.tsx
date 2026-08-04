import {
  Cpu,
  ShieldCheck,
  BrainCircuit,
  LineChart,
  GitFork,
} from "lucide-react";
import { Link } from "react-router";
import { useContext } from "react";
import { DiplomaContext } from "./main";

export type Diploma = {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const DiplomaChoice = () => {
  const diplomas: Diploma[] = [
    {
      id: "DIT",
      name: "Diploma in Information Technology",
      icon: Cpu,
    },
    {
      id: "DSF",
      name: "Diploma in Cybersecurity and Digital Forensics",
      icon: ShieldCheck,
    },
    {
      id: "DAAA",
      name: "Diploma in Applied AI & Analytics",
      icon: BrainCircuit,
    },
    {
      id: "DBFT",
      name: "Diploma in Business & Financial Technology",
      icon: LineChart,
    },
    {
      id: "CIP",
      name: "Common Intake Programme",
      icon: GitFork,
    },
  ];

  const {setDiploma} = useContext(DiplomaContext);

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <h2 className="text-2xl font-bold">Select Your Diploma</h2>
      <div className="grid grid-cols-2 grid-rows-3 gap-4">
        {diplomas.map((diploma) => {
          const Icon = diploma.icon;
          const isFullWidth = diploma.id === "CIP";
          return (
            <Link
              to="/"
              key={diploma.id}
              onClick={() => setDiploma(diploma)}
              className={`flex w-48 cursor-pointer flex-col items-center gap-3 rounded-lg bg-blue-500 p-5 text-white transition-colors hover:bg-blue-600 ${
                isFullWidth ? "col-span-2 w-auto flex-row justify-center" : ""
              }`}
            >
              <Icon className="h-8 w-8" strokeWidth={1.75} />
              <h3 className="text-lg font-bold">{diploma.id}</h3>
              <p className="text-center text-sm text-blue-50">{diploma.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DiplomaChoice;
