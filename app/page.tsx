import {
  getSettings,
  getVideos,
  getGallery,
  getEvents,
  getPerformance,
} from "../lib/googleSheets";
import HomeClient from "./HomeClient";

export default async function Home() {
  try {
    const settings = await getSettings();
    const videos = await getVideos();
    const gallery = await getGallery();
    const events = await getEvents();
    const performance= await getPerformance();

    const settingsMap: Record<string, string> =
      Object.fromEntries(
        settings.map((item: any) => [
          item.key,
          item.value,
        ])
      );

    return (
      <HomeClient
        settingsMap={settingsMap}
        videos={videos}
        gallery={gallery}
        events={events}
        performance={performance}
      />
    );
  } catch (error) {
    console.error(error);

    return (
      <HomeClient
        settingsMap={{}}
        videos={[]}
        gallery={[]}
        events={[]}
        performance={[]}
      />
    );
  }
}