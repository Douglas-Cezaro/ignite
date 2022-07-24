import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/douglas-cezaro.png",
      name: "Douglas Cezaro",
      role: "CEO Cezaro e Pires",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      {
        type: "link",
        content: "Acesse e deixe seu feedback 👉 devonlane.design",
      },
    ],
    publishedAt: new Date("2022-07-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/douglas-cezaro.png",
      name: "Kielson Tututu",
      role: "Dev Backend",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      {
        type: "link",
        content: "Acesse e deixe seu feedback 👉 devonlane.design",
      },
    ],
    publishedAt: new Date("2022-07-05 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
