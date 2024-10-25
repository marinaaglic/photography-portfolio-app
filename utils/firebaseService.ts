import { storage } from "./firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export async function getAllImageUrls(folderPath: string): Promise<string[]> {
  const folderRef = ref(storage, folderPath);
  const result = await listAll(folderRef);

  const urlPromises = result.items.map((item) => getDownloadURL(item));

  return Promise.all(urlPromises);
}
