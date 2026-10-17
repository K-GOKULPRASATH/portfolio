import type { MetadataRoute } from "next";
import { projects } from "@/lib/site";
const baseUrl = "https://example.com";
export default function sitemap(): MetadataRoute.Sitemap {
 const routes = ["","/projects","/lab","/experience","/aisdop","/services","/writing","/resume","/contact"];
 return [...routes.map(route=>({url:`${baseUrl}${route}`,lastModified:new Date()})),...projects.map(project=>({url:`${baseUrl}/projects/${project.slug}`,lastModified:new Date()}))];
}