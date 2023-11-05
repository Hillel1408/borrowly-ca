export const getLoanPurposes = async () => {
  const response = await fetch("https://api.borrowly.ca/loanPurposes", {
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
};

export const getFilteredOffers = async (params: string) => {
  const response = await fetch(
    `https://api.borrowly.ca/filteredOffers?${params}`,
    { cache: "no-store" }
  );

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
};
