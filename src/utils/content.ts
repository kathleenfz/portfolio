
export const fetchContent = async (filename: string) => {
  try {
    const response = await fetch(`/content/${filename}.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch content');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${filename}:`, error);
    return null;
  }
};
