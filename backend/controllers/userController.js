import { data } from "../data.js";

export const user = (req, res) => {
  try {
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "kuch gadbad hai",
    });
  }
};
export const getuserbyid = (req, res) => {};
