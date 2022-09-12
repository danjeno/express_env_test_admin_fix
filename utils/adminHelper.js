import userModel from "../models/userModel.js";

export const compareAdmin = async (req, res) => {
  const currentUser = await userModel.findById(req.params.id);
  const userInitialState = res.locals.userInitialState;
  if (currentUser.isAdmin !== userInitialState.isAdmin) {
    res.clearCookie("session_token");
  }
  res.status(200).json(currentUser);
};
