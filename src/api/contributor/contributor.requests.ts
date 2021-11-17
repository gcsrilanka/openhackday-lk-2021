import { Contributor } from "../../models/contributor.model";
import { apiInstance } from "../authInstance";

export async function getAllContributors() {
  const PATH = "/contributors";
  try {
    const res = await apiInstance.get(PATH);
    const apiRes = res.data;

    return apiRes as Contributor[];
  } catch (e) {
    throw new Error("Failed to get All products");
  }
}