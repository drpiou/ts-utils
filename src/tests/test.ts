export const test = async (app: HTMLDivElement, title: string, callback: () => void | Promise<void>): Promise<void> => {
  const card = document.createElement('div');

  // Create card
  card.className = 'card';

  app.appendChild(card);

  // Create card result
  const result = document.createElement('p');

  result.className = 'result';
  result.innerHTML = `${title} in test`;

  card.appendChild(result);

  try {
    // Run test
    await callback();

    result.innerHTML = `${title} success`;
  } catch (e) {
    result.innerHTML = `${title} error: ${e instanceof Error ? e.message : 'unknown'}`;
  }
};
