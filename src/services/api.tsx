export const getLoanPurposes = async () => {
  const response = await fetch("https://api.borrowly.ca/loanPurposes");

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
};
