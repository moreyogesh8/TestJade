declare module "@salesforce/apex/MyContactListController.getContacts" {
  export default function getContacts(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/MyContactListController.getContactList" {
  export default function getContactList(param: {accountIds: any}): Promise<any>;
}
declare module "@salesforce/apex/MyContactListController.saveContactList" {
  export default function saveContactList(param: {contactList: any}): Promise<any>;
}
