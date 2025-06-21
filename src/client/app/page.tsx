import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-8">
        <p className="text-gray-700">Welcome to your todo list!</p>
      </main>
    </>
  );
}