import Image from "next/image";
const Card = ({ article, styles }: any) => {
  const quotation = article.name === "Daniel Clifford" ? " quota " : "";
  return (
    <section
      className={`${styles.backgroundColor} ${styles.textColor} ${styles.grid_style} relative ${quotation} shadow-2xl text-sm  flex flex-col gap-3 p-6 rounded-lg `}
    >
      <header className={`flex gap-4  `}>
        <div className="relative h-10 w-10">
          <Image
            src={`${article.profileImg}`}
            alt="profile-pic"
            fill
            className={`border-2 ${styles.imgBorder} rounded-full`}
          />
        </div>
        <div>
          <h4>{article.name}</h4>
          <p className="text-[0.75rem] opacity-50">{article.label}</p>
        </div>
      </header>
      <h2 className="text-xl font-semibold z-10">{article.topic}</h2>
      <p className="opacity-70">{article.comment}</p>
    </section>
  );
};
export default Card;
