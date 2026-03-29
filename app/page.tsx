import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsList from "@/components/NewsList";
import SubscribeForm from "@/components/SubscribeForm";
import AdBanner from "@/components/AdBanner";
import AdSocialBar from "@/components/AdSocialBar";

export default function Home() {
  return (
    <>
      <Header />
      <AdBanner />
      <main id="main-content" className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <NewsList />
        <div className="mt-12">
          <SubscribeForm />
        </div>
      </main>
      <Footer />
      <AdSocialBar />
    </>
  );
}
