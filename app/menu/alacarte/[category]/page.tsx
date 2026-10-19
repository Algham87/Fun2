
import CategoryMenu from "../../../components/CategoryMenu";
import { alacarteCategories } from "../../../data/menuCategories";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return alacarteCategories.map((category) => ({
    category: category.slug,
  }));
}

export default async function AlacarteCategoryPage({
  params,
}: Props) {
  const { category: slug } = await params;

  const category = alacarteCategories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    notFound();
  }

  return (
    <CategoryMenu
      category={category}
      menuType="alacarte"
    />
  );
}