export const registerUser = async (name: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Success!'), 500);
  });
};
