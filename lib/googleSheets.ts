const SHEET_ID =
  "1XR_IMyCy6TTnMxIJ0lsfpoiTJxwu9Y55mXRQpk6aqPg";

export async function getVideos() {
  try {
    const res = await fetch(
      `https://opensheet.elk.sh/${SHEET_ID}/Videos`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (error) {
    return [];
  }
}

export async function getGallery() {
  try {
    const res = await fetch(
      `https://opensheet.elk.sh/${SHEET_ID}/Gallery`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (error) {
    return [];
  }
}

export async function getEvents() {
  try {
    const res = await fetch(
      `https://opensheet.elk.sh/${SHEET_ID}/Events`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (error) {
    return [];
  }
}

export async function getSettings() {
  try {
    const res = await fetch(
      `https://opensheet.elk.sh/${SHEET_ID}/Settings`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (error) {
    return [];
  }
}