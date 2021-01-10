export function getContactsFromLS() {
    try {
      let res = localStorage.getItem("Contacts");
      if (res?.length) {
        let data = JSON.parse(res);
        return data;
      }
      return []
    }
  catch(error){
      console.log(error)
  }
}
