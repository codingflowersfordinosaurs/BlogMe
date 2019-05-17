

const submitBtn = document.getElementById("edit-submit");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const id = window.location.href.split('/')[4];
  console.log("ID: ", id);

  const randomData = {
    title,
    description
  };

  // console.log("edit.js", axios);
  // document.addEventListener("DOMContentLoaded", function(event) {
  //   axios.put(`http://localhost:3000/pages/${id}`, randomData);
  // });

  const url = `http://localhost:3000/pages/${id}`;
  console.log("url: ", url);
  axios.put(url, randomData);
});



