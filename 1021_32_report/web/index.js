document.getElementById("sign-up").onsubmit = async function (e) {
  e.preventDefault();

  if (!e.target["sign-up-id"].value) {
    e.target["sign-up-id"].focus();
    return;
  }

  if (!e.target["sign-up-pw"].value) {
    e.target["sign-up-pw"].focus();
    return;
  }

  try {
    const data = await axios.post("api/signup", {
      id: e.target["sign-up-id"].value,
      pw: e.target["sign-up-pw"].value,
    });
    console.log(data.data);

    if (data.data.status == 200) {
      e.target["sign-up-id"].value = e.target["sign-up-pw"].value = "";
    }
  } catch (err) {
    console.error(err);
  }
};

document.getElementById("log-in").onsubmit = async function (e) {
  e.preventDefault();

  if (!e.target["login-id"].value) {
    e.target["login-id"].focus();
    return;
  }

  if (!e.target["login-pw"].value) {
    e.target["login-pw"].focus();
    return;
  }

  try {
    const data = await axios.post("api/login", {
      id: e.target["login-id"].value,
      pw: e.target["login-pw"].value,
    });
    console.log(data.data);
    if (data.data.status == 200) {
      e.target["login-id"].value = e.target["login-pw"].value = "";
    }
  } catch (err) {
    console.error(err);
  }
};
