import con from "../database/db.js";
const db = con;

/** HTTP GET METHOD - get all data */
const getUsers = async (req, res) => {
  res.send("Get Users");
};

/** HTTP POST METHOD - save data */
const createUser = async (req, res) => {
  res.send("Create User");
};

/** HTTP GET METHOD - get single data */
const getUser = async (req, res) => {
  res.send("Get User");
};

/** HTTP PUT METHOD - update selected data */
const updateUser = async (req, res) => {
  res.send("Update User");
};

/** HTTP DELETE METHOD - delete selected data */
const deleteUser = async (req, res) => {
  res.send("Delete User");
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
