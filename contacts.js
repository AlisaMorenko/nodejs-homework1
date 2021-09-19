const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}
//var2
// const contacts = require('./db/contacts.json')
// const listContacts = async () => contacts;

async function getContactById(contactId) {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === Number(contactId));
  if (idx === -1) {
    return null;
  }
  // console.log(contacts[idx]);
  return contacts[idx];
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === Number(contactId));
  if (idx === -1) {
    return null;
  }
  contacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  // console.log(`Contact with id=${idx} removed successfully`);
  return contacts;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const id = contacts[contacts.length - 1].id + 1;
  const newContact = { id, name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
