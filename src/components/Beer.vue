<script>
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("upload-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fileInput = document.getElementById("image-upload");
    const titleInput = document.getElementById("title-upload");
    const dateInput = document.getElementById("date-upload");
    const textInput = document.getElementById("text-upload");

    const files = fileInput.files;
    const images = [];

    Array.from(files).forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        images.push(e.target.result);

        if (index === files.length - 1) {
          createContent(images);
        }
      };
      reader.readAsDataURL(file);
    });

    function createContent(images) {
      const newContent = document.createElement("div");
      newContent.innerHTML = `
        <h3>${titleInput.value}</h3>
        <h4>${dateInput.value}</h4>
        <div class="image-slider">
          <button class="prev-btn">&lt;</button>
          <img src="${images[0]}" alt="Uploaded Image" style="max-width: 100%;">
          <button class="next-btn">&gt;</button>
        </div>
        <p>${textInput.value}</p>`;

      document.querySelector(".main-content").appendChild(newContent);

      const imgElement = newContent.querySelector("img");
      let currentIndex = 0;

      newContent.querySelector(".prev-btn").addEventListener("click", () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
        imgElement.src = images[currentIndex];
      });

      newContent.querySelector(".next-btn").addEventListener("click", () => {
        currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
        imgElement.src = images[currentIndex];
      });
    }
  });
});
</script>

<template>
  <div class="holy-grail-grid">
    <header class="header"></header>
    <main class="main-content">
      <form id="upload-form">
        <label for="image-upload">Choose up to 5 images:</label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          multiple
          required
        />
        <br />
        <label for="title-upload">Enter title:</label>
        <textarea
          id="title-upload"
          style="border: 1px solid red; color: black"
        ></textarea>
        <br />
        <label for="date-upload">Enter date:</label>
        <textarea
          id="date-upload"
          style="border: 1px solid red; color: black"
        ></textarea>
        <br />
        <label for="text-upload">Enter content:</label>
        <textarea
          id="text-upload"
          style="border: 1px solid red; color: black"
        ></textarea>
        <br />
        <button type="submit">Submit</button>
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
  border-radius: 10px;
  font-family: "Arial", Times, serif, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  text-align: center;
  font-size: 18px;
  color: rgb(0, 0, 0);
}

#upload-form label {
  display: block;
  margin: 0.5rem 0;
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
  color: rgb(0, 0, 0);
}

#upload-form input,
#upload-form button,
#upload-form textarea {
  margin: 0.5rem 0;
  border-radius: 10px;
  font-family: "Arial", Times, serif, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  text-align: center;
  font-size: 18px;
  color: rgb(0, 0, 0);
}
</style>
