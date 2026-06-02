export function convertGoogleDriveUrl(url: string): string {
  if (!url) return url;

  // Check if it's a Google Drive sharing URL
  if (url.includes('drive.google.com/file/d/')) {
    // Extract file ID from URLs like:
    // https://drive.google.com/file/d/1ChWhgRu4XpubxF1bAjmqRNpeKJzdrHZe/view?usp=drivesdk
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
  }

  return url;
}
