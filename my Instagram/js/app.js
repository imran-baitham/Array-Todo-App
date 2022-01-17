const instagram = {
     state: {
          posts: [
               {
                    id: 1,
                    name: "imran baitham",
                    url: "imran.png",
                    city: "Gilgit",
                    gmail: "imranbaitham001@gmail.com",
                    caption: "my name is imran baitham.i am 19 years old.i want become software engineer.",
                    like: 0,
                    islike: false,
               },
               {
                    id: 2,
                    name: "zahid",
                    location: "Nagar",
                    imageUrl: "./images/Nora-Fatehi-1.jpeg",
                    profileImage: "./images/Nora-Fatehi-1.jpeg",
                    like: 10,
                    isLike: false,
                    caption:
                         "Quidem eius doloribus Voluptatum ratione molestias ipsum sint sunt incidunt quaerat facere quis.",
                    comments: {
                         userId: 2,
                         text: "Nice Post",
                         username: "zafar",
                         likes: 0,
                         createdAt: new Date(),
                         updatedAd: new Date(),
                    },
                    createdAt: new Date(),
                    updatedAt: new Date(),
               },
          ],
     },
     handleAddLike(postsId) {
          const { state: { posts }, rander } = instagram
          const postsIndex = posts.findIndex((x) => x.id === postsId)

          if (postsIndex > -1) {
               posts[postsIndex].like = posts[postsIndex].islike ?
                    posts[postsIndex].like - 1 : posts[postsIndex].islike + 1
          }
          posts[postsIndex].islike = !posts[postsIndex].islike
          rander()
     },
     myFun(post) {
          const { state: { posts } } = instagram
          const newIndex = posts.findIndex((x) => x.id === post)
          console.log(newIndex)
          let todoList = document.querySelector(".showList")
          let input = document.getElementById("inputName")
          let list = []
          if (newIndex > -1 && input.value) {
               list.push(input.value)
               input.value = ""
          } else {
               // alert("Plz input Value")
               list.push(input.value)
               input.value = ""
          }
          // todoList.innerHTML = ""
          list.forEach((value, index) => {
               todoList.innerHTML += `<li>${value}</li>`
          })
     },
     randerPost(x) {
          return `
          <div class="insta-div">
           <h2>${x.id}</h2>
           <h1>${x.name}</h1>
           <p><strong>${x.name}</strong> ${x.caption}</p>
           <p ${x.like ? "isliked" : ""} onclick="instagram.handleAddLike(${x.id})">
           ${x.like}${x.islike ? "unlike" : "likes"}</p>
             <div>
               <input id="inputName" type="text" placeholder="comment">
               <button onclick="instagram.myFun(${x.id})">comment</button>
             </div>
           <ul class="showList"></ul>
          </div>
          `
     },
     rander() {
          const { state: { posts }, randerPost } = instagram
          let root = document.querySelector(".root")
          root.innerHTML = posts.map((x) => randerPost(x)).join("")
     },
}

instagram.rander()
