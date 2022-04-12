import Link from "next/link";

export const HeaderSection = () => {
  return (
    <div className="bg-primary py-4 flex justify-between ">
      <div>
        <h1 className="text-6xl text-white">けんしんのいろいろ</h1>
      </div>
      <div className="mr-4 my-auto">
        <Link href="/game">
          <a className="text-4xl text-white">ゲーム</a>
        </Link>
      </div>
    </div>
  );
};
