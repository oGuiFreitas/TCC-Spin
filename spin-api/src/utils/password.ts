import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const salt =  await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const verifyPassword = async (password: string, hash: string) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};
