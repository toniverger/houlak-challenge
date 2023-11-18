"use client";
import styles from "./page.module.css";
import AlbumCard from "./components/AlbumCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
    </main>
  );
}
