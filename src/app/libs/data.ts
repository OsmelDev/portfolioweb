import { useTranslations } from "next-intl";

export const useData =()=>{
    const t = useTranslations("Work");

    const projects = [
        {
          title: t("projects.WorkshopManagement.title"),
          description: t("projects.WorkshopManagement.description"),
          tech: ["Next.js", "Nodejs", "Tailwindcss","MongoDB", "Typescript"],
          year: "2025",
          git: "https://github.com/OsmelDev/Gestion-de-Taller",
          site_url: null
        },
        {
          title: t("projects.EconomicSystem.title"),
          description: t("projects.EconomicSystem.description"),
          tech: ["Vite", "Typescript", "Tailwindcss", "Tauri"],
          year: "2025",
          git: "https://github.com/OsmelDev/Sistema-Economico",
          site_url: null
        },{
          title: t("projects.AdministrationSystem.title"),
          description: t("projects.AdministrationSystem.description"),
          tech: ["Next.js", "Nodejs","Tailwindcss", "MongoDB",  "Typescript"],
          year: "2026",
          git: "https://github.com/OsmelDev/Administration-Quebola",
          site_url: null
        },
      ]; 

      return {projects, t}
}