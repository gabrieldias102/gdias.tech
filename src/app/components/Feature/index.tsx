import { ReactNode } from "react";

type FeatureProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div className="flex flex-row items-start mx-8">
      <div className="mr-2 mt-1">{icon}</div>
      <div className="flex-1 text-justify">
        <p className="font-light">
          <b className="font-extrabold">{title}</b> {description}
        </p>
      </div>
    </div>
  );
}
