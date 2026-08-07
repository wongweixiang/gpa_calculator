import { useContext } from "react";

import {
  commonModules,
  daaaModules,
  dbftModules,
  ditModules,
  dsfModules,
} from "../helpers/moduleData";
import { DiplomaContext } from "@/main";
import { diplomaIdMap } from "@/helpers/diplomaIdMapping";

export const useModuleItems = () => {
  const { diploma } = useContext(DiplomaContext);

  let moduleList = commonModules.map((module) => ({
    ...module,
    id: module.id.replace(
      "IT1x",
      `IT1${diplomaIdMap[diploma?.id as keyof typeof diplomaIdMap]}`,
    ),
  }));

  switch (diploma?.id) {
    case "DIT":
      moduleList = [...moduleList, ...ditModules];
      break;
    case "DSF":
      moduleList = [...moduleList, ...dsfModules];
      break;
    case "DAAA":
      moduleList = [...moduleList, ...daaaModules];
      break;
    case "DBFT":
      moduleList = [...moduleList, ...dbftModules];
      break;
  }

  return {
    moduleList,
    moduleItems: moduleList.map((module) => ({
      label: `${module.id}: ${module.name}`,
      value: module.id,
    })),
  };
};
