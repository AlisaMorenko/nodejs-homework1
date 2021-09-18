const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const id = 12;

const newData = {
  name: "Alisa Morenko",
  email: "alisa.morenko@gmail.com",
  phone: "(098) 851-7476",
};

(async () => {
  try {
    // const contacts = await listContacts();
    // console.log(contacts);
    //////////////////////////////////////
    // const contactById = await getContactById(id);
    // if (!contactById) {
    //   throw new Error("Contact not found");
    // }
    // console.log(contactById);
    ////////////////
    // const removeById = await removeContact(id);
    // if (!removeById) {
    //   throw new Error("Contact not found");
    // }
    // console.log(`Contact with id ${id} was deleted`);
    /////////////////
    const newContact = await addContact(newData);
    console.log(newContact);
  } catch (err) {
    console.log(err);
  }
})();
