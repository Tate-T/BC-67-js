const ulElem = document.querySelector(".list-item");
const btnSubmit = document.querySelector("button");
const url = "https://jsonplaceholder.typicode.com";
let page = 1;

const searchParams = new URLSearchParams({
  _limit: 3,
  _sort: "userId",
  _page: page,
});

async function getPosts() {
  try {
    const data = await fetch(`${url}/users?${searchParams}`).then((data) =>
      data.json()
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function asyncShowPage() {
  try {
    const posts = await getPosts();
    return creatUserList(posts);
  } catch (error) {
    console.log(error);
  }
}

function createMarkup({ email, name, address: { city, street } }) {
  return `<li>
      <h3>email</h3>
      <p>${email}</p>
      <h3>name</h3>
      <p>${name}</p>
      <h3>city</h3>
      <p>${city}</p>
      <h3>street</h3>
      <p>${street}</p>
    </li>`;
}

function creatUserList(arr) {
  const userList = arr.map((user) => createMarkup(user)).join("");
  ulElem.insertAdjacentHTML("beforeend", userList);
}

btnSubmit.addEventListener("click", loadMore);

function loadMore() {
  page += 1;
  asyncShowPage();
}
