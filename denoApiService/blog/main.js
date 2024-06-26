import {sqlFetch} from '../lib/sql.js'

export var R = {}
let _id=0, _title=1, _body=2

window.onhashchange = async function () {
  var r
  var tokens = window.location.hash.split('/')
  console.log('tokens=', tokens)
  switch (tokens[0]) {
    case '#show': //show a post which is selected
      let r = await sqlFetch('blog', `SELECT id, title, body FROM posts WHERE id=${tokens[1]}`)
      R.show(r[0]) // 取得第一筆傳入 (雖然只會有一筆，但 SELECT 預設會傳回很多比，所以用 results[0] 只取第一筆)
      break
    case '#new': //create a new post
      R.new()
      break
    default:
      let posts = await sqlFetch('blog', `SELECT id, title, body FROM posts`) // Get SQL data
      R.list(posts) //list all posts
      break
  }
}

window.onload = async function () { //when the window is loading,run the sqlFetch function
  await sqlFetch('blog', `CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT)`)
  window.onhashchange()
}

R.layout = function (title, content) { //layout the title and content
  document.querySelector('title').innerText = title //set the title
  document.querySelector('#content').innerHTML = content //set the content
} 

R.list = function (posts) { //list all posts
  let list = []
  for (let post of posts) {
    list.push(`
    <li>
      <h2>${post[_title]}</h2>
      <p><a id="show${post[_id]}" href="#show/${post[_id]}">Read post</a></p>
    </li>
    `)
  }
  let content = `
  <h1>Posts</h1>
  <p>You have <strong>${posts.length}</strong> posts!</p>
  <p><a id="createPost" href="#new">Create a Post</a></p>
  <ul id="posts">
    ${list.join('\n')}
  </ul>
  `
  return R.layout('Posts', content)
}

R.new = function () { //create a new post's layout
  R.layout('New Post', `
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form>
    <p><input id="title" type="text" placeholder="Title" name="title"></p>
    <p><textarea id="body" placeholder="Contents" name="body"></textarea></p>
    <p><input id="savePost" type="button" value="Create"></p>
  </form>
  `)
  document.querySelector('#savePost').onclick = ()=>R.savePost() //save the post
}

R.show = function (post) { //show the post selected
  return R.layout(post[_title], `
    <h1>${post[_title]}</h1>
    <p>${post[_body]}</p>
  `)
}

R.savePost = async function () { //save the post to the database
  let title = document.querySelector('#title').value
  let body = document.querySelector('#body').value
  await sqlFetch('blog', `INSERT INTO posts (title, body) VALUES ('${title}', '${body}')`)
  window.location.hash = '#list'
}
