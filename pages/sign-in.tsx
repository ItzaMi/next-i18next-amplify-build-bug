import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['sign-in'])),
    },
  };
}

const SignIn = () => {
  const { t } = useTranslation(['sign-in']);

  return (
    <main>
      <h1>{t('sign-in:message.title')}</h1>
    </main>
  );
};

export default SignIn;
