export const getExampleIncomes = async () => {
  const response = await fetch("/inwestowanie/exampleIncomes.json");

  if (!response.ok) {
    new Error(response.statusText);
  }
  return await response.json();
};
