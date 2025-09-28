import { useTranslations } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

export default async function Home({ params }: { params: { locale: string } }) {
  const locale = (await params).locale;
  const t = await getTranslations('Home');
  return (
    <>
      <h1 className="text-center text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.00
      </h1>
    </>
  );
}
