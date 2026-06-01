import { getSettings } from "../lib/googleSheets";
import HomeClient from "./HomeClient";

export default async function Home(){
  try {
    const settings = await getSettings();

    const settingsMap = Object.fromEntries(
      settings.map((item: any) => [item.key, item.value])
    );

    return <HomeClient settingsMap={settingsMap} />;
  } catch (error) {
    console.error("Error in Home component:", error);
    return <HomeClient settingsMap={{}} />;
  }
}