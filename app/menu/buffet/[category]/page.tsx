
import CategoryMenu from "../../../components/CategoryMenu";
import { buffetCategories } from "../../../data/menuCategories";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return buffetCategories.map((category) => ({
    category: category.slug,
  }));
}

export default async function BuffetCategoryPage({
  params,
}: Props) {
  const { category: slug } = await params;

  const category = buffetCategories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    notFound();
  }

  return (
    <CategoryMenu
      category={category}
      menuType="buffet"
    />
  );
}