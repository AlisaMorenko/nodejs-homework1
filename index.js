const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const contacts = await listContacts();
        console.table(contacts);
        break;

      case "get":
        const contactById = await getContactById(id);
        if (!contactById) {
          throw new Error("Contact not found");
        }
        console.log(contactById);
        break;

      case "add":
        const newContact = await addContact(name, email, phone);
        console.log(newContact);
        break;

      case "remove":
        const removeById = await removeContact(id);
        if (!removeById) {
          throw new Error("Contact not found");
        }
        console.log(`Contact with id ${id} was deleted`);
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (err) {
    console.log(err);
  }
};

invokeAction(argv);

// previous version
// const id = 12;

// const newData = {
//   name: "Alisa Morenko",
//   email: "alisa.morenko@gmail.com",
//   phone: "(098) 851-7476",
// };

// (async () => {
//   try {
// const contacts = await listContacts();
// console.log(contacts);

// const contactById = await getContactById(id);
// if (!contactById) {
//   throw new Error("Contact not found");
// }
// console.log(contactById);

// const removeById = await removeContact(id);
// if (!removeById) {
//   throw new Error("Contact not found");
// }
// console.log(`Contact with id ${id} was deleted`);

//     const newContact = await addContact(newData);
//     console.log(newContact);
//   } catch (err) {
//     console.log(err);
//   }
// })();
