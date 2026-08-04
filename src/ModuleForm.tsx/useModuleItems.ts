import { useContext } from "react";

import { commonModules, daaaModules, dbftModules, ditModules, dsfModules } from "../helpers/moduleData";
import { DiplomaContext } from "@/main";

export const useModuleItems = () => {
const { diploma } = useContext(DiplomaContext);

let moduleList = commonModules

switch (diploma?.id) {
    case 'DIT':
        moduleList = [...commonModules, ...ditModules]
    break
    case 'DSF':
        moduleList = [...commonModules, ...dsfModules]
    break
    case 'DAAA':
        moduleList = [...commonModules, ...daaaModules]
    break
    case 'DBFT':
        moduleList = [...commonModules, ...dbftModules]
    break
}


  return moduleList.map((module) => ({
    label: `${module.id}: ${module.name}`,
    value: module.id,
  }));
};
