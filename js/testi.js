const dataTestimonial = [
  {
    name: "Rusyidi Aqil",
    comment: "Pinjam dulu seratus",
    rating: 5,
    image: "img/tsubasa.jpg",
  },
  {
    name: "Riyan Hidayat",
    comment: "Okaay",
    rating: 4,
    image: "img/tsubasa.jpg",
  },
  {
    name: "Rafi Ananda",
    comment: "Siap",
    rating: 4,
    image: "img/tsubasa.jpg",
  },
  {
    name: "Rijal Rahman",
    comment: "Boleh",
    rating: 5,
    image: "img/tsubasa.jpg",
  },
];

function testimonial() {
  let setTestimonial = "";

  dataTestimonial.forEach((item) => {
    setTestimonial += `
      <div class="testimonial">
        <img src=${item.image} class="profile-testimonial" />
        <p class="quote">${item.comment}</p>
        <p class="author">- ${item.name}</p>
      </div>`;
  });

  document.getElementById("testimonials").innerHTML = setTestimonial;
}

testimonial();

function filterTestimonial(rating) {
  let setTestimonial = "";

  const filteredData = dataTestimonial.filter((data) => data.rating === rating);
  console.log(filteredData);

  if (filteredData.length === 0) {
    setTestimonial = `<h2>Data Not Found</h2>`;
  } else {
    filteredData.forEach((item) => {
      setTestimonial += `
        <div class="testimonial">
          <img src=${item.image} class="profile-testimonial" />
          <p class="quote">${item.comment}</p>
          <p class="author">- ${item.name}</p>
        </div>`;
    });
  }

  document.getElementById("testimonials").innerHTML = setTestimonial;
}
