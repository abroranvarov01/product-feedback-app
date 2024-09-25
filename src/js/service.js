const url = "https://product-feedback-data.vercel.app";

export const getCategory = async () => {
  const res = await fetch(`${url}/category`);
  const data = await res.json();
  return data;
};

export const getData = async (category) => {
  const res = await fetch(`${url}/${category ||"all"}`);
  const data = await res.json();
  return data;
};
