const data = [];

function getData(event) {
  event.preventDefault();

  let ProjectName = document.getElementById("input-project-name").value;
  let StartDate = document.getElementById("input-date-start").value;
  let EndDate = document.getElementById("input-date-end").value;
  let Description = document.getElementById("input-description").value;
  let NodeJs = document.getElementById("inputnodejs").value;
  let Nextjs = document.getElementById("inputnextjs").value;
  let Reactjs = document.getElementById("inputreactjs").value;
  let TypeScriptJs = document.getElementById("inputtypescript").value;
  let image = document.getElementById("input-blog-image").files;

  const obj = {
    ProjectName,
    StartDate,
    EndDate,
    Description,
    NodeJs,
    Nextjs,
    Reactjs,
    TypeScriptJs,
    image,
    postedAt: new Date(),
    outhor: "Muhammad Fadli Widiawan",
  };

  console.log(obj);
  data.push(obj);
  renderBlog();
}

function renderBlog() {
  document.getElementById("content").innerHTML = "";

  for (let index = 0; index < data.length; index++) {
    document.getElementById("content").innerHTML += `
    <div class="project">
    <h1 style="text-align: center; background-color: #dbdbdb">My Project</h1>
    <div class="Project-list" id="content">
      <div class="Project-list-item">
        <div class="blog-image">
        <img src="var.jpg" alt="var" />
        </div>
        <h1>
          <a class="projectvar" href="blog.html" target="_blank"
            >Var Dalam Sepak Bola</a
          >
        </h1>
        <p style="font-size: 15px; color: gray">Durasi: 1 Bulan</p>
        <p>
          VAR (video assistant referee) adalah tambahan yang relatif baru
          dalam dunia sepak bola. Penggunaan bantuan teknologi video untuk
          memberi sudut pandang yang lebih ideal kepada wasit yang berada di
          dalam lapangan. Terdapat beberapa kejadian khusus yang dapat
          dipantau oleh VAR. Secara prinsip, wasit VAR berada di dalam ruangan
          khusus dengan beberapa layar yang digunakan untuk memantau kondisi
          di dalam lapangan dengan beberapa sudut pandang yang berbeda.
          Berikut adalah definisi dari VAR, sejarah, dan apa yang dapat
          terjadi di dalam lapangan yang dapat membuat wasit mendapat bantuan
          darinya.
        </p>

        <i><img src="js.svg" alt="" style="height: 15px; width: 15px" /></i>
        <i
          ><img src="node-js.svg" alt="" style="height: 15px; width: 15px"
        /></i>
        <i
          ><img src="react.svg" alt="" style="height: 15px; width: 15px"
        /></i>
        <i
          ><img src="nextjs1.png" alt="" style="height: 15px; width: 15px"
        /></i>
        <div class="Delete">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}

function getDuration(time) {
  const timeNow = new Date();
  const timePost = new Date(time);
  const distance = timeNow - timePost;

  const dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000));
  if (dayDistance > 0) {
    return dayDistance + " Day Ago"; // 2 Days ago
  } else {
    const hourDistance = Math.floor(distance / (60 * 60 * 1000));
    if (hourDistance > 0) {
      return hourDistance + " Hour Ago";
    } else {
      const minuteDistance = Math.floor(distance / (60 * 1000));
      if (minuteDistance > 0) {
        return minuteDistance + " Minute Ago";
      } else {
        const secondDistance = Math.floor(distance / 1000);
        if (secondDistance > 0) {
          return secondDistance + " Second Ago";
        }
      }
    }
  }
}

setInterval(renderBlog, 1000);
