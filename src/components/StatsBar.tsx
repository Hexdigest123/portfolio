"use client";

interface Props {
  stats: { name: string; value: number }[];
}

export default function(props: Props) {
  const stats = props.stats.map((stat, index) => {
    let reformated_value = "";
    if (stat.value > 1000000) {
      reformated_value = (stat.value / 1000000).toString() + "M";
    } else if (stat.value > 1000) {
      reformated_value = (stat.value / 1000).toString() + "K";
    } else {
      reformated_value = stat.value.toString();
    }
    return (
      <div className="mx-auto" key={index}>
        <p className="text-2xl font-bold text-center">{reformated_value}</p>
        <p className="text-lg text-center">{stat.name}</p>
      </div>
    );
  });
  return (
    <div className="w-full h-32 bg-accent text-white grid grid-cols-2 grid-rows-1 gap-4 items-center">
      {stats}
    </div>
  );
}
