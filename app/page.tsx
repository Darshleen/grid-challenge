import Card from "@/components/Card";
import  Articles  from "@/utils/articles";
const styles=[{
backgroundColor: "bg-[#7541c8]",
    textColor: "text-white",
    imgBorder: "border-white/50",
    grid_style:"md:col-span-2"
},
{
backgroundColor: "bg-[#48556a]",
    textColor: "text-white",
    imgBorder: "border-[#48556a]",
},
{
backgroundColor: "bg-white",
    textColor: "text-[#48556a]",
    imgBorder: "border-white/50",
},
{
backgroundColor: "bg-[#19212e]",
    textColor: "text-[#ecf2f8]",//light grayish blue
    imgBorder: "border-[#7541c8]",
    grid_style:"lg:col-span-2"

},
{
backgroundColor: "bg-white",
    textColor: "text-[#48556a]",//gray-color that used in second card
    imgBorder: "border-white/50",
    grid_style:"lg:col-end-5 lg:row-start-1 lg:row-span-2"

},
];
export default function Home() {
  return (
    <main className="grid gap-4 lg:grid-cols-4 ">
      {Articles.map((article,index) => (
        <Card key={article.id} article={article} styles={styles[index]} />
      ))}
    </main>
  );
}
