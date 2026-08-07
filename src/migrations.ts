import type { Semester } from "./App";
import { diplomaIdMap } from "./helpers/diplomaIdMapping";

// migrations.ts
const VERSION_KEY = "storageVersion";
const CURRENT_VERSION = 1;

function getStoredVersion(): number {
  const raw = window.localStorage.getItem(VERSION_KEY);
  return raw !== null ? Number(raw) : 0;
}

function setStoredVersion(version: number) {
  window.localStorage.setItem(VERSION_KEY, String(version));
}

export function runMigrations() {
  const version = getStoredVersion();

  if (version < 1) {
    migrateToV1();
  }

  if (version < CURRENT_VERSION) {
    setStoredVersion(CURRENT_VERSION);
  }
}

function migrateToV1() {
  // e.g. reshape old "modules" data into the new Semester[] shape
  const rawModules = window.localStorage.getItem("modules");
  if (rawModules === null) return;

  const rawDiploma = window.localStorage.getItem("diploma");
  if (rawDiploma === null) return;

  try {
    const parsedModules = JSON.parse(rawModules);
    const parsedDiploma = JSON.parse(rawDiploma);

    const diplomaId = parsedDiploma?.id;

    console.log({ diplomaId });

    const migrated = parsedModules.map((sem: Semester) => {
      const { semester, modules } = sem;

      return {
        semester,
        modules: modules.map((mod) => {
          const { id } = mod;

          // Replace "IT1x" with the correct diploma ID in module IDs
          const newId = id.replace(
            "IT11",
            `IT1${diplomaIdMap[diplomaId as keyof typeof diplomaIdMap]}`,
          );

          return {
            ...mod,
            id: newId,
          };
        }),
      };
    }); // /* transform parsed into new shape */ parsedModules;
    window.localStorage.setItem("modules", JSON.stringify(migrated));
  } catch (error) {
    console.error("migrateToV1 failed:", error);
  }
}
