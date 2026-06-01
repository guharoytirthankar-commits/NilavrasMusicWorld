const SHEET_ID =
  "1XR_IMyCy6TTnMxIJ0lsfpoiTJxwu9Y55mXRQpk6aqPg";

export async function getVideos() {
  const res = await fetch(
    `https://opensheet.elk.sh/${SHEET_ID}/Videos`,
    { cache: "no-store" }
  );

  return res.json();
}

export async function getGallery() {
  const res = await fetch(
    `https://opensheet.elk.sh/${SHEET_ID}/Gallery`,
    { cache: "no-store" }
  );

  return res.json();
}

export async function getEvents() {
  const res = await fetch(
    `https://opensheet.elk.sh/${SHEET_ID}/Events`,
    { cache: "no-store" }
  );

  return res.json();
}

export async function getSettings() {
  try {
    const res = await fetch(
      `https://opensheet.elk.sh/${SHEET_ID}/Settings`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("Failed to fetch settings:", res.status);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching settings:", error);
    return [];
  }
}