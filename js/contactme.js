function getData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phonenumber = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const yourmessage = document.getElementById("message").value;

  if (name == "") {
    return alert("Nama harus diisi");
  } else if (email == "") {
    return alert("Email harus diisi");
  } else if (phonenumber == "") {
    return alert("Nomor harus diisi");
  } else if (subject == "") {
    return alert("Subject harus diisi");
  } else if (yourmessage == "") {
    return alert("Pesan harus diisi");
  }

  const myEmail = "hi.muhammadfadliwidiawan@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${myEmail}?subject=${subject}&body=Halo nama saya ${name}, bisa Anda menghubungi saya di ${phonenumber} untuk membahas proyek ${yourmessage}`;
  a.click();

  let data = {
    name,
    email,
    phonenumber,
    subject,
    yourmessage,
  };

  console.log("data", data);
}
