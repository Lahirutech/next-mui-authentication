import { UserType } from '../../../types/serverTypes';
import Users from '../model/schema';

export const getUser = async (user: UserType) => {
  const result = await Users.findOne({ email: user.email });
  return result;
};
