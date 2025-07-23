import { articles } from "@/data";

export default function handler({ query: { id } }, res) {
  // Convert string id to number for comparison
  const numericId = parseInt(id, 10);

  // Check if conversion was successful
  if (isNaN(numericId)) {
    return res.status(400).json({ message: `Invalid article id: ${id}` });
  }

  const filtered = articles.filter((article) => article.id === numericId);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Article with the id ${id} not found` });
  }
}
