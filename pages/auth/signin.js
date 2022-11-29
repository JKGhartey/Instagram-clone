import React from "react";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

// Browser
const signIn = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img
          src="https://www.pngkey.com/png/detail/3-31957_instagram-logo-instagram-logo-with-words.png"
          alt=""
          className="w-80"
        />
        <p className="font-xs italic">
          This is not a real app, this is just a clone made by Jerome Ghartey
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
                className="p-3 bg-blue-500 rounded-lg text-white"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Server Side Render
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
