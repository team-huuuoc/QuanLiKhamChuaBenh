import * as bcrypt from 'bcrypt';

export const hashData = async (data: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(data, saltRounds);
};

export const compareData = async (data: string, hashedData: string): Promise<boolean> => {
  return await bcrypt.compare(data, hashedData);
};
