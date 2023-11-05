export const getLoanPurposes = async () => {
  const response = await fetch("https://api.borrowly.ca/loanPurposes", {
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
};

export const getFilteredOffers = async (params: {
  [key: string]: string | string[] | undefined;
}) => {
  const response = await fetch(
    `https://api.borrowly.ca/filteredOffers?${
      params.amount && `amount=${params.amount}`
    }&${
      params.sort_by &&
      `sort_by=${params.sort_by}&sort_order=${params.sort_order}`
    }`,
    { cache: "no-store" }
  );

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
};
