<script>
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("upload-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Prevents the form from refreshing the page

    const fileInput = document.getElementById("image-upload");
    const textInput = document.getElementById("text-upload");

    // Read the image file
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageURL = e.target.result;

      // Create a new div to hold the image and text
      const newContent = document.createElement("div");
      newContent.innerHTML = `<img src="${imageURL}" alt="Uploaded Image" style="max-width: 100%;"><p>${textInput.value}</p>`;

      // Append the new content to the main content area
      document.querySelector(".main-content").appendChild(newContent);
    };
    reader.readAsDataURL(file); // Converts the image file to a URL that can be used in the src attribute of an img element
  });
});
</script>

<template>
  <div class="holy-grail-grid">
    <header class="header"></header>
    <main class="main-content">
      <!-- The form to upload image and text -->
      <form id="upload-form">
        <label for="image-upload">Choose an image:</label>
        <input type="file" id="image-upload" accept="image/*" required />
        <br />
        <label for="text-upload">Enter text:</label>
        <textarea
          id="text-upload"
          style="border: 1px solid red; color: black"
        ></textarea>
        <br />
        <button type="submit">Upload</button>
      </form>
    </main>
    <aside class="left-sidebar"></aside>
    <aside class="right-sidebar"></aside>
    <footer class="footer"></footer>
  </div>
</template>

<style>
/* grid container */
.holy-grail-grid {
  display: grid;
  grid-template-areas:
    "header"
    "main-content"
    "left-sidebar"
    "right-sidebar"
    "footer";
}

/* general column padding */
.holy-grail-grid > * {
  padding: 1rem;
}

/* assign columns to grid areas */
.holy-grail-grid > .header {
  grid-area: header;
  background-color: #ffffffe6;
  text-align: right;
  font-size: x-large;
  padding-right: 100px;
  text-shadow: 2px 2px rgb(214, 214, 214);
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.holy-grail-grid > .main-content {
  grid-area: main-content;
  background-color: #ffffffe6;
  text-align: center;
  font-size: x-large;
  margin: 1rem;
  padding-top: 50px;
  padding-bottom: 50px;
  text-shadow: 2px 2px rgb(214, 214, 214);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  font-family: "Arial", Times, serif, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  text-align: center;
  font-size: 18px;
  color: rgb(66, 66, 66);
}
.holy-grail-grid > .right-sidebar {
  text-align: center;
}
.holy-grail-grid > .left-sidebar {
  text-align: center;
}
.holy-grail-grid > .footer {
  grid-area: footer;
}

/* tablet breakpoint */
@media (min-width: 768px) {
  .holy-grail-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "main-content main-content"
      "left-sidebar right-sidebar"
      "footer footer";
  }
}
/* desktop breakpoint */
@media (min-width: 1024px) {
  .holy-grail-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "header header header header"
      "left-sidebar main-content main-content right-sidebar"
      "footer footer footer footer";
  }
}

/* Style for the form */
#upload-form {
  margin-bottom: 1rem;
}

#upload-form label {
  display: block;
  margin: 0.5rem 0;
}

#upload-form input,
#upload-form button {
  margin: 0.5rem 0;
}
</style>
