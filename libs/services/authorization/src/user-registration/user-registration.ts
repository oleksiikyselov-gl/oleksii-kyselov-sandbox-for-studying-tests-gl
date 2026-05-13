export const registerUser = async (name: string): Promise<string> => {
  console.log('name to register:', name);

  return new Promise((resolve) => {
    setTimeout(() => resolve('Success!'), 500);
  });
};
