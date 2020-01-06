// async onFetchLoginRecords() {
//   var data = {
//     token_id: 3,
//     slug: 'about_us'
//   };
//   try {
//   let response = await fetch(
//   "https://mobapp.iscriptsdemo.com/api/pages/getPageContent",
//   {
//   method: "POST",
//   headers: {
//   "Accept": "application/json",
//   "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data)
//   }
//   );
//    return response;
//   } catch (errors) {
 
//   alert(errors);
//   } 
//  }