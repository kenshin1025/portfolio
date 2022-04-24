import Image from "next/image";

export const AboutSection = () => {
  type link = { key: string; url: string; value: string };
  const links: link[] = [
    {
      key: "GitHub",
      url: "https://github.com/kenshin1025",
      value: "@kenshin1025",
    },
  ];
  return (
    <div className="text-center mt-8">
      <h2 className="mt-2 text-primary text-3xl font-bold">けんしんについて</h2>
      <p className="mt-1 text-gray">About Me</p>
      <div className="mt-8">
        <div className="inline-block p-8 border border-solid border-border rounded-full">
          <Image
            src="/kenshin.png"
            alt="Profile Icon"
            width={128}
            height={128}
          ></Image>
        </div>
        <h2 className="mt-2 text-gray text-2xl font-bold">
          けんしん
          <br />
          (Kenshin)
        </h2>
      </div>
      <div>
        <div>
          {links.map((link) => (
            <dl key={link.key}>
              <dt>{link.key}</dt>
              <dd>
                <a href={link.url}>{link.value}</a>
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </div>
  );
};
